import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
function InfiniteScroll() {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    console.log("partner: ", partner);
  }, [partner]);

  useEffect(() => {
    const fetchData = async () => {
      const uid = sessionStorage.getItem("uid");
      try {
        const response = await axios.post("/back/api/user/home", { uid });

        const CopyData = response.data;
        setPartner(CopyData);

        console.log(partner)

      } catch (err) {
        console.log("123", err.message);
      }
    };
    fetchData();
  }, []);

  const loaction = useLocation();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [fragment, setFragment] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView && key < partner.length) {
      const newF = <PtCard Key={key} partner={partner[key]}></PtCard>;
      setKey((prev) => prev + 1);
      setFragment((prev) => [...prev, newF]);
    }
  }, [inView, fragment, partner]);

  return (
    <div className={styles.InfiniteScrollFrame}>
      {fragment}
      <div ref={ref}></div>
    </div>
  );
}

export default InfiniteScroll;
