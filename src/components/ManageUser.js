import TabFrame from "./TabFrame";
import styles from "../CSS/ManageUser.module.css";
import React, { useState, useEffect } from "react";
import TabLine from "./TabLine";
import axios from "axios";

const ManageUser = () => {
  const [manage, setManage] = useState("구독");
  const [ptcount, setPtcount] = useState([0, 0, 0]);
  const [check, setCheck] = useState([0, 0, 0]);
  const [partner_id] = useState(sessionStorage.getItem("pid"));
  const [subUserList, setSubUserList] = useState([]);
  const [bookUserList, setBookUserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint =
        manage === "구독"
          ? "back/api/partner/r_list"
          : "back/api/partner/booking_list";
      try {
        const response = await axios.get(endpoint, {
          params: { partner_id },
        });
        if (manage === "구독") {
          const data = response.data.subscriptions;
          setSubUserList(data); // 데이터를 상태에 저장합니다.
          console.log("구독 리스트: ", data);
        } else {
          const data = response.data.bookings;
          setBookUserList(data); // 데이터를 상태에 저장합니다.
          console.log("예약 리스트: ", data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [partner_id, manage]);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.manageTab}>
        <div
          className={`${manage === "구독" ? styles.matchActive : ""}`}
          onClick={() => setManage("구독")}
        >
          구독 관리
        </div>
        <div
          className={`${manage === "예약" ? styles.matchActive : ""}`}
          onClick={() => setManage("예약")}
        >
          예약 관리
        </div>
      </div>
      <TabFrame>
        {manage === "구독" ? (
          <>
            <TabLine content="구독 중인 고객" />
            {subUserList.map((v, index) => (
              <div key={index} className={styles.SubscrbingCust}>
                <div className={styles.SubscrbingCustInfo}>
                  <span>{v.USER_NAME}</span>
                  <span>|</span>
                  <span>
                    {v.FDATE} ~ {v.EDATE}
                  </span>
                </div>

                <div style={{ flexGrow: "1" }}></div>

                <div className={styles.SubscrbingCustInfoBtn}>
                  <div>
                    <span>{ptcount[index]}</span>
                    <span style={{ margin: "0 1rem 0 1.3rem" }}>/</span>
                    <span>{v.FCOUNT}</span>
                  </div>
                  <button>상세보기</button>
                  <button
                    onClick={() => {
                      let countcopy = [...ptcount];
                      countcopy[index] += 1;
                      setPtcount(countcopy);

                      let checkcopy = [...check];
                      checkcopy[index] = 1;
                      setCheck(checkcopy);
                    }}
                    style={
                      check[index]
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            pointerEvents: "none",
                          }
                        : null
                    }
                  >
                    횟수 체크
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <TabLine content="확정된 예약" />
            {bookUserList.map(
              (v, index) =>
                v.APPLY === 1 && (
                  <div className={styles.WaitingReserv}>
                    <div className={styles.WaitingReservInfo}>
                      <span>{v.USER_NAME}</span>
                      <span style={{ margin: "0 1rem 0 1.3rem" }}>/</span>
                      <span>
                        {v.YEAR}.{v.MONTH < 10 ? "0" : ""}
                        {v.MONTH}.{v.DAY < 10 ? "0" : ""}
                        {v.DAY} {v.TIME}
                      </span>
                    </div>

                    <div style={{ flexGrow: "1" }}></div>

                    <div className={styles.ConfirmedReservInfoBtn}>
                      <button>상세보기</button>
                      <button>예약 취소</button>
                    </div>
                  </div>
                )
            )}

            <TabLine content="대기 중인 예약" />
            {bookUserList.map(
              (v, index) =>
                v.APPLY === 0 && (
                  <div className={styles.WaitingReserv}>
                    <div className={styles.WaitingReservInfo}>
                      <span>{v.USER_NAME}</span>
                      <span style={{ margin: "0 1rem 0 1.3rem" }}>/</span>
                      <span>
                        {v.YEAR}.{v.MONTH < 10 ? "0" : ""}
                        {v.MONTH}.{v.DAY < 10 ? "0" : ""}
                        {v.DAY} {v.TIME}
                      </span>
                    </div>

                    <div style={{ flexGrow: "1" }}></div>

                    <div className={styles.WaitingReservBtn}>
                      <button>확인하기</button>
                    </div>
                  </div>
                )
            )}
          </>
        )}
      </TabFrame>
    </div>
  );
};

export default ManageUser;
