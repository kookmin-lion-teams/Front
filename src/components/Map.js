import React from 'react';
import OptimizedKakaoMap from './OptimizedKakaoMap';

const Map = () => {

  const addresses = [
    "서울특별시 관악구 봉천로14길 12, 지하1층 (신림동, 관전GT타워)",
    "서울특별시 관악구 보라매로 13",
    "서울특별시 관악구 신림로58길 13, S-빌딩 201호 (신림동)",
    "서울특별시 관악구 남부순환로 1836, 호산빌딩 지하1층 (봉천동)",
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <OptimizedKakaoMap addresses={addresses} />
    </div>
  );
};

export default Map;
