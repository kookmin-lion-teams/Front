import Nav_ from "./Nav_";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
import OptimizedKakaoMap from "./OptimizedKakaoMap";

function Main() {
  return (
    <>
      <Nav_></Nav_>

      {/* 필터 */}
      <div className={styles.filterContainer}>
        <button className={styles.filter}>
          <span style={{ width: '1.5rem' }}>►</span>
          <span>필터</span>
        </button>

        <div style={{ flexGrow: '1' }}></div>

        <select className={styles.sort}>
          <option value={'기본순'}>기본순</option>
          <option value={'가격순'}>가격순</option>
          <option value={'최신순'}>최신순</option>
        </select>
      </div>

      {/* main 전체 프레임 */}
      <div className={styles.mainFrame}>
        <InfiniteScroll />
      </div>
    </>
  );
}

export default Main;
