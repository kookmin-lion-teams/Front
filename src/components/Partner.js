import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Partner() {
  const location = useLocation();
  const { pid } = location.state || {};
  useEffect(() => {
    console.log(pid);
  }, [pid]);
  return (
    <>
      <h1>{pid} 파트너</h1>
      <></>
    </>
  );
}
