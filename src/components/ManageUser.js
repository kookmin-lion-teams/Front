import TabFrame from "./TabFrame";
import styles from "../CSS/ManageUser.module.css";
import React, { useState } from "react";
import TabLine from "./TabLine";
const ManageUser = () => {
  const [manage, setManage] = useState();
  const [ptcount, setPtcount] = useState([0, 0, 0]);
  const [check, setCheck] = useState([0, 0, 0])

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.manageTab}>
        <div
          className={`${manage === `구독` ? styles.matchActive : ""}`}
          onClick={() => setManage("구독")}
        >
          구독 관리
        </div>
        <div
          className={`${manage === `예약` ? styles.matchActive : ""}`}
          onClick={() => setManage("예약")}
        >
          예약 관리
        </div>
      </div>
      <TabFrame>
        {manage === "구독"
          ? (
            <>
              <TabLine content="구독 중인 고객" />
              <div className={styles.SubscrbingCust}>
                <div className={styles.SubscrbingCustInfo}>
                  <span>박정빈</span>
                  <span>|</span>
                  <span>2024.08.01(목) 18:00 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbingCustInfoBtn}>
                  <div>
                    <span>{ptcount[0]}</span>
                    <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                    <span>10</span>
                  </div>
                  <button>상세보기</button>
                  <button onClick={() => {
                    let countcopy = [...ptcount]
                    countcopy[0] += 1
                    setPtcount(countcopy)

                    let checkcopy = [...check]
                    checkcopy[0] = 1
                    setCheck(checkcopy)
                  }} 
                  style={
                    check[0] 
                    ? {backgroundColor : 'white' , color : 'black', pointerEvents : 'none'}
                    : null
                  }
                  >횟수 체크</button>
                </div>
              </div>



              <div className={styles.SubscrbingCust}>
                <div className={styles.SubscrbingCustInfo}>
                  <span>박정빈</span>
                  <span>|</span>
                  <span>2024.08.01(목) 18:00 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbingCustInfoBtn}>
                  <div>
                    <span>{ptcount[1]}</span>
                    <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                    <span>10</span>
                  </div>
                  <button>상세보기</button>
                  <button onClick={() => {
                    let countcopy = [...ptcount]
                    countcopy[1] += 1
                    setPtcount(countcopy)

                    let checkcopy = [...check]
                    checkcopy[1] = 1
                    setCheck(checkcopy)
                  }} 
                  style={
                    check[1] 
                    ? {backgroundColor : 'white' , color : 'black', pointerEvents : 'none'}
                    : null
                  }
                  >횟수 체크</button>
                </div>
              </div>



              <div className={styles.SubscrbingCust}>
                <div className={styles.SubscrbingCustInfo}>
                  <span>박정빈</span>
                  <span>|</span>
                  <span>2024.08.01(목) 18:00 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbingCustInfoBtn}>
                  <div>
                    <span>{ptcount[2]}</span>
                    <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                    <span>10</span>
                  </div>
                  <button>상세보기</button>
                  <button onClick={() => {
                    let countcopy = [...ptcount]
                    countcopy[2] += 1
                    setPtcount(countcopy)

                    let checkcopy = [...check]
                    checkcopy[2] = 1
                    setCheck(checkcopy)
                  }} 
                  style={
                    check[2] 
                    ? {backgroundColor : 'white' , color : 'black', pointerEvents : 'none'}
                    : null
                  }
                  >횟수 체크</button>
                </div>
              </div>


            </>
          )
          : (
            <>
              <TabLine content="확정된 예약" />

              <div className={styles.ConfirmedReserv}>
                <div className={styles.ConfirmedReservInfo}>
                  <span>김준서</span>
                  <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                  <span>2024.08.01(목) 18:00</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.ConfirmedReservInfoBtn}>
                  <button>상세보기</button>
                  <button>예약 취소</button>
                </div>
              </div>

              <TabLine content="대기 중인 예약" />

              <div className={styles.WaitingReserv}>
                <div className={styles.WaitingReservInfo}>
                  <span>윤영광</span>
                  <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                  <span>2024.08.01(목) 18:00</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

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
