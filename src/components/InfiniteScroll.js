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
  useEffect(() => {
    if (inView && key < 10) {
      console.log(key, inView);
      setKey((prev) => prev + 1);
      const newF = <PtCard key={key}></PtCard>;
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
