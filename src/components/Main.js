import Nav_ from "./Nav_";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
import OptimizedKakaoMap from "./OptimizedKakaoMap";
import { useEffect, useState } from "react";
import { useFindState } from "../store/Statefind";
import FilterModal from "./Modal";
import ReservUser from "./ReservUser";
import axios from "axios";
import Checkout from "./Checkout";
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
            {findState === "헬스장으로 찾기" && (
              <div className={styles.gymCheck}>
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{ width: "20%", height: "auto" }}
                    width="36"
                    height="43"
                    viewBox="0 0 36 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 22C20.3833 22 22.3333 20.05 22.3333 17.6667C22.3333 15.2834 20.3833 13.3334 18 13.3334C15.6167 13.3334 13.6667 15.2834 13.6667 17.6667C13.6667 20.05 15.6167 22 18 22ZM18 0.333374C27.1 0.333374 35.3333 7.31004 35.3333 18.1C35.3333 24.99 30.025 33.0934 19.43 42.4317C18.6067 43.1467 17.3717 43.1467 16.5483 42.4317C5.97499 33.0934 0.666656 24.99 0.666656 18.1C0.666656 7.31004 8.89999 0.333374 18 0.333374Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                  <span>abc헬스짐</span>
                </div>
                <div>filter</div>
              </div>
            )}

            <InfiniteScroll />
          </div>
          {findState === "헬스장으로 찾기" && (
            <div className={styles.mapFrame}>
              <OptimizedKakaoMap />
            </div>
          )}
        </div>
      )}
      {findState === "매칭 내역" && <ReservUser />}

      <Checkout></Checkout>
    </>
  );
}

export default Main;
