import Nav_ from "./Nav_";
import FilterModal from "./Modal";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
import OptimizedKakaoMap from "./OptimizedKakaoMap";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useFindState, useActions } from "../store/Statefind";

function Main() {
  // 전역상태 : find
  const findState = useFindState();
  console.log("findState:", findState);
  //find 전역상태로 css 결정
  const [scrollClassName, setScrollClassName] = useState(styles.scrollFrame1);
  //find 전역상태 변경시 View 의 css가 바뀝니다.
  useEffect(() => {
    if (findState === "파트너 찾기") {
      setScrollClassName(styles.scrollFrame1);
    } else if (findState === "헬스장으로 찾기") {
      setScrollClassName(styles.scrollFrame2);
    }
  }, [findState]);
  //Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Nav_ />

      {/* 필터 */}
      {findState === "파트너 찾기" ? (
        <div className={styles.filterContainer}>
          {/* 필터버튼 */}
          <button className={styles.filter} onClick={openModal}>
            <span style={{ width: "1.5rem" }}>►</span>
            <span>필터</span>
          </button>

          {/* Filter Modal */}
          <FilterModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          <div style={{ flexGrow: "1" }}></div>

          {/* 정렬버튼 */}
          <select className={styles.sort}>
            <option value={"기본순"}>기본순</option>
            <option value={"가격순"}>가격순</option>
            <option value={"최신순"}>최신순</option>
          </select>
        </div>
      ) : (
        <></>
      )}
      {findState !== "매칭 내역" && (
        <div style={{ display: "flex" }}>
          <div className={scrollClassName}>
            <InfiniteScroll />
          </div>
          {findState === "헬스장으로 찾기" && (
            <div className={styles.mapFrame}>
              <OptimizedKakaoMap />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Main;
