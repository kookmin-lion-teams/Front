import Nav_ from "./Nav_";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
import OptimizedKakaoMap from "./OptimizedKakaoMap";

function Main() {
  return (
    <>
      <Nav_></Nav_>

      {/* main 전체 프레임 */}

      <div className={styles.mainFrame}>
          <InfiniteScroll />
      </div>
    </>
  );
}

export default Main;
