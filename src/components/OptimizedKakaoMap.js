import React, { useState, useEffect } from "react";
import { Map, MapInfoWindow } from "react-kakao-maps-sdk";
import axios from "axios";
import { useGymState, useGymActions } from "../store/StateGym";
const OptimizedKakaoMap = ({ getGymsPartners }) => {
  const [positions, setPositions] = useState([]);
  const [name, setName] = useState("");
  const [gu] = useState(sessionStorage.getItem("gu") || "");
  const [dong] = useState(sessionStorage.getItem("dong") || "");
  const [gyms, setGyms] = useState([]);
  const { setGymState } = useGymActions();
  useEffect(() => {
    console.log("name: ", name);
    setGymState(name);
  }, [name]);
  // 첫 렌더링시 유저 주소로 헬스장 불러오기
  useEffect(() => {
    const searchGym = async () => {
      try {
        const response = await axios.get("back/api/gym/search", {
          params: {
            name: "",
            gu: gu,
            dong: dong,
          },
        });

        if (response.data.length === 0) {
          setPositions([]);
          setGyms([]);
          return;
        }

        const geocoder = new window.kakao.maps.services.Geocoder();
        const gymDataWithCoords = [];

        for (const gym of response.data) {
          const coords = await new Promise((resolve, reject) => {
            geocoder.addressSearch(gym.ADDRESS, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                resolve({
                  lat: parseFloat(result[0].y),
                  lng: parseFloat(result[0].x),
                });
              } else {
                console.error("주소를 변환할 수 없습니다:", gym.ADDRESS);
                resolve(null);
              }
            });
          });

          if (coords) {
            gymDataWithCoords.push({ ...gym, ...coords });
          }
        }

        setGyms(gymDataWithCoords);
        setPositions(
          gymDataWithCoords.map((gym) => ({
            lat: gym.lat,
            lng: gym.lng,
            address: gym.ADDRESS,
          }))
        );
      } catch (e) {
        console.error(e);
      }
    };

    searchGym();
  }, [gu, dong]);

  useEffect(() => {
    const fetchGym = async () => {
      try {
        const response = await axios("back/api/gym/partners", {
          params: { name, gu, dong },
        });
        console.log("파트너들~", response.data[0].partners);
        getGymsPartners(response.data[0].partners);
      } catch (e) {
        console.log(`헬스장의 파트너 정보를 가져오는 도중 발생한 에러`, e);
      }
    };
    fetchGym();
  }, [name]);
  return (
    <Map
      center={{ lat: 36.450701, lng: 128.570667 }} // 기본 지도 중심을 대한민국으로 설정
      style={{ width: "100%", height: "100%" }}
      level={7} // 줌 레벨을 넓게 설정
    >
      {positions.map((position, index) => (
        <>
          {/* <MapMarker
            key={index}
            position={{ lat: position.lat, lng: position.lng }}
          ></MapMarker> */}
          <MapInfoWindow
            key={`${gyms[index]?.NAME}-${index}` || index} // gyms[index]?.ID가 없을 경우 index를 key로 사용
            position={{ lat: position.lat, lng: position.lng }}
            removable={false}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "0.25rem 0.75rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setName(gyms[index]?.NAME);
              }}
            >
              {gyms[index]?.NAME}
            </div>
          </MapInfoWindow>
        </>
      ))}
    </Map>
  );
};

export default OptimizedKakaoMap;
