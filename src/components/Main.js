// import 컴포넌트
import Map from "./Map";
import Nav_ from "./Nav_";
import Filter from "./Filter";
import ReservUser from "./ReservUser";
import ManageUser from "./ManageUser";
import ManagePaper from "./ManagePaper";
import SubscribeUser from "./SubscribeUser";
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
// import 기능
import { useEffect, useState } from "react";
import { useGymState } from "../store/StateGym";
import { useFindState, useActions } from "../store/Statefind";

function Main() {
  const gymName = useGymState();
  // 전역상태 : find
  const findState = useFindState();

  const { changeState } = useActions();

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
  // map에서 받아올 파트너들 정보

  const [F2Partners, setF2Partners] = useState([]);

  // window.location.href를 사용하여 현재 페이지의 URL을 가져올 수 있습니다.
  const currentUrl = window.location.href;
  //결제 완료하면 예약 내역 페이지로 넘어감
  useEffect(() => {
    if (currentUrl[currentUrl.length - 1] != "/") {
      window.history.pushState({}, "", "/");
      changeState("예약 내역");
    }
  }, [currentUrl]);

  // sort 관련 ----
  const [sortOrder, setSortOrder] = useState("기본순");

  // sort 변경 감지
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <Nav_ />
      {/* 아래 부터는 findState의 값에 따라 보여지는 컴포넌트들이 달라집니다. */}
      {/* 필터 */}
      {findState === "파트너 찾기" ? (
        <div className={styles.filterContainer}>
          <Filter />

          {/* 정렬버튼 */}
          <select
            className={styles.sort}
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value={"기본순"}>평점순</option>
            <option value={"가격순"}>가격순</option>
          </select>
        </div>
      ) : (
        <></>
      )}
      {(findState === "헬스장으로 찾기" || findState === "파트너 찾기") && (
        <div style={{ display: "flex" }}>
          <div className={scrollClassName}>
            {findState === "헬스장으로 찾기" && (
              <div className={styles.gymCheck}>
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{ width: "15%", height: "auto" }}
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
                  <span>{gymName ? gymName : "-"}</span>
                </div>
                <div>
                  <Filter />
                </div>
              </div>
            )}
            <InfiniteScroll sortOrder={sortOrder} />
          </div>
          {findState === "헬스장으로 찾기" && (
            <div className={styles.mapFrame}>
              <Map partners={setF2Partners} />
            </div>
          )}
        </div>
      )}
      {findState === "예약 내역" && <ReservUser />}
      {findState === "구독 내역" && <SubscribeUser />}
      {findState === "공고 관리" && <ManagePaper />}
      {findState === "내 고객 관리" && <ManageUser />}
      {/* <Checkout></Checkout> */}
    </>
  );
}

export default Main;
