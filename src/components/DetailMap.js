import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const OptimizedKakaoMap = ({ gu, dong, address }) => {
  const [location, setLocation] = useState({ lat: 36.450701, lng: 128.570667 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const searchLatLng = () => {
      return new Promise((resolve, reject) => {
        geocoder.addressSearch(address, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            resolve({
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
            });
          } else {
            console.error("주소를 변환할 수 없습니다:", `${gu} ${dong}`);
            reject(null);
          }
        });
      });
    };

    searchLatLng()
      .then((location) => {
        if (location) {
          setLocation(location);
          setIsLoaded(true);
        }
      })
      .catch((error) => {
        console.error("좌표 검색 실패:", error);
      });
  }, [gu, dong]);

  return (
    <Map
      center={location} // 상태를 기반으로 지도 중심을 설정
      style={{ width: "100%", height: "100%" }}
      level={7} // 줌 레벨을 넓게 설정
    >
      {isLoaded && <MapMarker position={location} />}{" "}
      {/* 주소가 로드되었을 때만 마커 표시 */}
    </Map>
  );
};

export default OptimizedKakaoMap;
