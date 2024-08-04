import { useState, useEffect } from "react";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import axios from "axios";
import { useFindState } from "../store/Statefind";
function InfiniteScroll({ list }) {
  const [partner, setPartner] = useState([]);
  const [fragment, setFragment] = useState([]);
  const findState = useFindState();
  useEffect(() => {
    const fetchData = async () => {
      const uid = sessionStorage.getItem("uid");
      try {
        const response = await axios.post("/back/api/user/home", { uid });
        const CopyData = response.data;
        setPartner((prev) => CopyData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [findState]);

  useEffect(() => {
    if (findState === "파트너 찾기") {
      const newF = partner.map((item, index) => (
        <PtCard key={`${item.PID}-${index}`} partner={item} />
      ));
      setFragment(newF);
    }
  }, [partner]);

  useEffect(() => {
    console.log("list: ", list);
    if (findState === "헬스장으로 찾기") {
      const newF = list.map((item, index) => (
        <PtCard key={`${item.PID}-${index}`} partner={item} />
      ));
      setFragment(newF);
    }
  }, [list]);

  return <div className={styles.InfiniteScrollFrame}>{fragment}</div>;
}

export default InfiniteScroll;
