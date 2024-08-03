import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
function InfiniteScroll() {
  const [data, setData] = useState([]);

  const [partner, setPartner] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const uid = sessionStorage.getItem("uid");
      try {
        const response = await axios.post("back/api/user/home", { uid });

        console.log(response.data);

        let CopyData = [...data];

        CopyData = response.data;

        setData(CopyData);

        setPartner(CopyData);

        console.log('ptner', partner, 'data', data, 'copy', CopyData);

      } catch (err) {
        console.log('222',err.message);

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
    console.log(inView, partner.length, key);
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
