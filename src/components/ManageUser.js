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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("back/api/partner/r_list", {
          params: { partner_id },
        });
        const data = response.data.subscriptions;
        setSubUserList(data); // 데이터를 상태에 저장합니다.
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [partner_id]);

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
            <div className={styles.ConfirmedReserv}>
              <div className={styles.ConfirmedReservInfo}>
                <span>김준서</span>
                <span style={{ margin: "0 1rem 0 1.3rem" }}>/</span>
                <span>2024.08.01(목) 18:00</span>
              </div>

              <div style={{ flexGrow: "1" }}></div>

              <div className={styles.ConfirmedReservInfoBtn}>
                <button>상세보기</button>
                <button>예약 취소</button>
              </div>
            </div>

            <TabLine content="대기 중인 예약" />
            <div className={styles.WaitingReserv}>
              <div className={styles.WaitingReservInfo}>
                <span>윤영광</span>
                <span style={{ margin: "0 1rem 0 1.3rem" }}>/</span>
                <span>2024.08.01(목) 18:00</span>
              </div>

              <div style={{ flexGrow: "1" }}></div>

              <div className={styles.WaitingReservBtn}>
                <button>확인하기</button>
              </div>
            </div>
          </>
        )}
      </TabFrame>
    </div>
  );
};

export default ManageUser;
