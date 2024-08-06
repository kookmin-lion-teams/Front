import { useState, useEffect } from "react";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import axios from "axios";
import { useFindState } from "../store/Statefind";
import { usePartnersState } from "../store/statePartners";

function InfiniteScroll({ sortOrder }) {
  const [partner, setPartner] = useState([]);
  const [fragment, setFragment] = useState([]);
  const findState = useFindState();
  const partnersList = usePartnersState();

  // sortOrder에 따라 fragment 배열을 정렬
  useEffect(() => {
    const sortFragments = (items) => {
      return items.sort((a, b) => {
        const partnerA = a.props.partner;
        const partnerB = b.props.partner;
        console.log("s: ", sortOrder);
        if (sortOrder === "가격순") {
          // avg_rate가 높은 순으로 정렬
          return partnerB.avg_rate - partnerA.avg_rate;
        } else if (sortOrder === "기본순") {
          // eprice가 낮은 순으로 정렬
          return partnerA.eprice - partnerB.eprice;
        }
        return 0;
      });
    };

    setFragment((prevFragment) => sortFragments(prevFragment));
  }, [sortOrder, fragment]);

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
