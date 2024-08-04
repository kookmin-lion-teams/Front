import React, { useEffect, useState } from "react";
import OptimizedKakaoMap from "./OptimizedKakaoMap";

const Map = ({ partners }) => {
  const [gymsPartners, setGymsPartners] = useState([]);
  useEffect(() => {
    partners(gymsPartners);
  }, [gymsPartners]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <OptimizedKakaoMap getGymsPartners={setGymsPartners} />
    </div>
  );
};

export default Map;
