import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import axios from "axios";
const OptimizedKakaoMap = ({ addresses }) => {
  const [positions, setPositions] = useState([]);
  const [name, setName] = useState("");
  const [gu, setGu] = useState(sessionStorage.getItem("gu"));
  const [dong, setDong] = useState(sessionStorage.getItem("dong"));
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const searchGym = async () => {
      try {
        const response = await axios.get("back/api/gym/search", {
          params: {
            name: name,
            gu: gu,
            dong: dong,
          },
        });
        console.log(response.data);
        setGyms(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    searchGym();
  }, []);

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    addresses.forEach((address) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const newPosition = {
            lat: parseFloat(result[0].y),
            lng: parseFloat(result[0].x),
            address,
          };
          setPositions((prevPositions) => [...prevPositions, newPosition]); // 상태를 즉시 업데이트
        } else {
          console.error("주소를 변환할 수 없습니다:", address);
        }
      });
    });
  }, [addresses]);

  return (
    <Map
      center={{ lat: 36.450701, lng: 128.570667 }} // 기본 지도 중심을 대한민국으로 설정
      style={{ width: "100%", height: "500px" }}
      level={7} // 줌 레벨을 넓게 설정
    >
      {positions.map((position, index) => (
        <MapMarker
          key={index}
          position={{ lat: position.lat, lng: position.lng }}
        >
          <div style={{ color: "#000" }}>{position.address}</div>
        </MapMarker>
      ))}
    </Map>
  );
};

export default OptimizedKakaoMap;
