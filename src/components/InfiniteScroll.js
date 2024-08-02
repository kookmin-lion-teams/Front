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

        console.log('ptner', partner, 'data', data, 'copy' , CopyData);

      } catch (err) {
        console.log(err.message);

      }
    };
    fetchData();
  }, []);

  const loaction = useLocation();




  console.log('scroll3', partner)

  const { ref, inView } = useInView({
    threshold: 0,
  });



  const [fragment, setFragment] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView && key < partner.length) {

      console.log('key' , key , 'partner' , partner, 'partner[key]' , partner[key])
      const newF = <PtCard key={key} partner={partner[key]}></PtCard>;
      setKey((prev) => prev + 1);
      setFragment((prev) => [...prev, newF]);
    }
  }, [inView, fragment]);

  return (
    <div className={styles.InfiniteScrollFrame}>
      {fragment}
      <div ref={ref}>jjjj</div>
    </div>
  );
}

export default InfiniteScroll;
