import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
function InfiniteScroll() {
  const [data, setData] = useState([]);

  let partner;

  useEffect(() => {
    const fetchData = async () => {
      const uid = sessionStorage.getItem("uid");
      try {
        const response = await axios.post("back/api/user/home", { uid });
        setData(response.data)

        partner = data;

        console.log('scroll2' , partner, 'data' , data);
        
      } catch (err) {
        console.log(err.message);

      }
    };
    fetchData();
  }, []);

  const loaction = useLocation();




  console.log('scroll3' , partner)

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [fragment, setFragment] = useState([]);
  const [key, setKey] = useState(0);

  // const [partner, setPartner] = useState([
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Lee", career: "25", content: "반갑습니다.", price: 10000 },
  //   { name: "Yun", career: "30", content: "그만하세요.", price: 10000 },
  //   { name: "Choi", career: "35", content: "화이팅입니다.", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  //   { name: "Kim", career: "20", content: "안녕하세요", price: 10000 },
  // ]);

  useEffect(() => {
    if (inView && key < 10) {
      // const newF = <PtCard key={key} partner={partner[key]}></PtCard>;
      // setKey((prev) => prev + 1);
      // setFragment((prev) => [...prev, newF]);
    }
  }, [inView, fragment]);

  return (
    <div className={styles.InfiniteScrollFrame}>
      {fragment}
      <div ref={ref}></div>
    </div>
  );
}

export default InfiniteScroll;
