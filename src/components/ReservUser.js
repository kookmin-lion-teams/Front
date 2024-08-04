import styles from "../CSS/ReservUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReservUserModal from "./ReservUserModal";
import Modal from 'react-modal';
export default function ReservUser() {

  Modal.setAppElement('#root');
  const [selectmodal, setSelectmodal] = useState('')
  const [checkreview, setCheckReview] = useState([0, 0, 0]);
  const [checkrsub, setChecksub] = useState([0, 0, 0]);


  // 모달 상태를 관리하는 state
  const [activeModal, setActiveModal] = useState(null);

  // 모달을 열기 위한 함수
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setActiveModal(null);
  };

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
            <span >예약확정</span>
            <button onClick={() => {
              openModal(true)
              setSelectmodal('상세보기')
            }}>상세보기</button>

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

              openModal(true)
              setSelectmodal('리뷰작성')
            }} style={checkreview[0] ? { backgroundColor: 'white', color: 'black' } : null}

            >{checkreview[0] ? '리뷰 작성 완료' : '리뷰 작성'}</button>


            <button onClick={() => {
              let cp = [...checkrsub]

              cp[0] = 1;
              setChecksub(cp);

              openModal(true)
              setSelectmodal('구독신청')
            }} style={checkrsub[0] ? { backgroundColor: 'white', color: 'black' } : null}

            >{checkrsub[0] ? '구독 신청 완료' : '구독 신청'}</button>
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
            }} style={checkreview[1] ? { backgroundColor: 'white', color: 'black' } : null}

            >{checkreview[1] ? '리뷰 작성 완료' : '리뷰 작성'}</button>


            <button onClick={() => {
              let cp = [...checkrsub]

              cp[1] = 1;
              setChecksub(cp);
            }} style={checkrsub[1] ? { backgroundColor: 'white', color: 'black' } : null}

            >{checkrsub[1] ? '구독 신청 완료' : '구독 신청'}</button>
          </div>
        </div>

        <ReservUserModal activeModal={activeModal} closeModal={closeModal} selectmodal={selectmodal}></ReservUserModal>

      </TabFrame>
    </>
  );
}
