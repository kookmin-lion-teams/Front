import { useState, useEffect } from "react";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import axios from "axios";
import { useFindState } from "../store/Statefind";
import { usePartnersState } from "../store/statePartners";

function InfiniteScroll() {
  const [partner, setPartner] = useState([]);
  const [fragment, setFragment] = useState([]);
  const findState = useFindState();

  const partnersList = usePartnersState();

  useEffect(() => {
    const fetchData = async () => {
      const uid = sessionStorage.getItem("uid");
      try {
        const response = await axios.post("/back/api/user/home", { uid });
        const CopyData = response.data;
        setPartner(CopyData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [findState]);

  useEffect(() => {
    if (findState === "파트너 찾기") {
      const newF = partner.map((item, index) => (
        <PtCard
          key={`${item.PID}-${index}`}
          cardKey={item.PID}
          partner={item}
        />
      ));
      setFragment(newF);
    }
  }, [partner, findState]);

  useEffect(() => {
    if (findState === "헬스장으로 찾기") {
      const newF = partnersList.map((item, index) => (
        <PtCard
          key={`${item.PID}-${index}`}
          cardKey={item.PID}
          partner={item}
        />
      ));
      setFragment(newF);
    }
  }, [partnersList, findState]);

  return <div className={styles.InfiniteScrollFrame}>{fragment}</div>;
}

export default InfiniteScroll;
