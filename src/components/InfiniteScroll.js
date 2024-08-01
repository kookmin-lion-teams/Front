import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../CSS/InfiniteScroll.module.css";
import PtCard from "./PtCard";

function InfiniteScroll() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [fragment, setFragment] = useState([]);
  const [key, setKey] = useState(0);

  const [partner, setPartner] = useState([
    { name: 'Kim', career: '20', content: '안녕하세요' },
    { name: 'Lee', career: '25', content: '반갑습니다.' },
    { name: 'Yun', career: '30', content: '그만하세요.' },
    { name: 'Choi', career: '35', content: '화이팅입니다.' },
    { name: 'Kim', career: '20', content: '안녕하세요' },
    { name: 'Kim', career: '20', content: '안녕하세요' },
    { name: 'Kim', career: '20', content: '안녕하세요' },
    { name: 'Kim', career: '20', content: '안녕하세요' },
    { name: 'Kim', career: '20', content: '안녕하세요' },



  ])

  useEffect(() => {
    if (inView && key < partner.length) {
      console.log(key, inView);

      const newF = <PtCard partner={partner[key]}></PtCard>;
      setKey((prev) => prev + 1);
      setFragment((prev) => [...prev, newF]);

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
