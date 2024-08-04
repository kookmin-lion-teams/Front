import styles from "../CSS/ReservUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function ReservUser() {



  const [checkreview, setCheckReview] = useState([0, 0, 0]);

  return (
    <>
      <TabFrame>
        <TabLine content="진행중인 예약" />

        <div className={styles.Reserving}>
          <div className={styles.ReservingInfo}>
            <span>박석진 트레이너</span>
            <span>|</span>
            <span>2024.08.01(목) 18:00</span>
            <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> ABC헬스장</span>

          </div>
          <div style={{ flexGrow: '1' }}></div>

          <div className={styles.ReservingBtn}>
            <button>상세보기</button>
            <button>예약확정</button>
          </div>
        </div>


        <TabLine content="예약 내역" />

        <div className={styles.Reserved}>
          <div className={styles.ReservedInfo}>
            <span>박석진 트레이너</span>
            <span>|</span>
            <span>2024.08.01(목) 18:00</span>
            <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> ABC헬스장</span>

          </div>
          <div style={{ flexGrow: '1' }}></div>

          <div className={styles.ReservedBtn}>
            <button onClick={() => {
              let cp = [...checkreview]

              cp[0] = 1;
              setCheckReview(cp);
            }} style={checkreview[0] ? { backgroundColor: 'black', color: 'white' } : null}

            >{checkreview[0] ? '리뷰 작성 완료' : '리뷰 작성'}</button>
            <button style={{ backgroundColor: 'black', color: 'white' }}>구독 신청</button>
          </div>
        </div>





        <div className={styles.Reserved}>
          <div className={styles.ReservedInfo}>
            <span>박석진 트레이너</span>
            <span>|</span>
            <span>2024.08.01(목) 18:00</span>
            <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> ABC헬스장</span>

          </div>
          <div style={{ flexGrow: '1' }}></div>

          <div className={styles.ReservedBtn}>
            <button onClick={() => {
              let cp = [...checkreview]

              cp[1] = 1;
              setCheckReview(cp);
            }} style={checkreview[1] ? { backgroundColor: 'black', color: 'white' } : null}

            >{checkreview[1] ? '리뷰 작성 완료' : '리뷰 작성'}</button>
            <button style={{ backgroundColor: 'black', color: 'white' }}>구독 신청</button>
          </div>
        </div>

        <div className={styles.Reserved}>
          <div className={styles.ReservedInfo}>
            <span>박석진 트레이너</span>
            <span>|</span>
            <span>2024.08.01(목) 18:00</span>
            <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> ABC헬스장</span>

          </div>
          <div style={{ flexGrow: '1' }}></div>

          <div className={styles.ReservedBtn}>
            <button onClick={() => {
              let cp = [...checkreview]

              cp[2] = 1;
              setCheckReview(cp);
            }} style={checkreview[2] ? { backgroundColor: 'black', color: 'white' } : null}

            >{checkreview[2] ? '리뷰 작성 완료' : '리뷰 작성'}</button>
            <button style={{ backgroundColor: 'black', color: 'white' }}>구독 신청</button>
          </div>
        </div>


      </TabFrame>
    </>
  );
}
