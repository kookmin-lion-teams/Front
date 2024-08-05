import styles from "../CSS/ReservUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReservUserModal from "./ReservUserModal";
import Modal from 'react-modal';
import Review from "./Review";
import axios from "axios";
import { useFindState } from "../store/Statefind";

export default function ReservUser() {

  Modal.setAppElement('#root');
  const [selectmodal, setSelectmodal] = useState('')
  const [checkreview, setCheckReview] = useState([0, 0, 0]);
  const [checkrsub, setChecksub] = useState([0, 0, 0]);


  //
  const completeReview = (idx) => {
    let cp = [...checkreview];
    cp[idx] = 1;
    setCheckReview(cp);
  }

  const completeSub = (idx) => {
    let cp = [...checkrsub];
    cp[idx] = 1;
    setChecksub(cp);
  }

  // 모달 상태를 관리하는 state
  const [activeModal, setActiveModal] = useState(null);
  const [openReview, setOpenReview] = useState(null);

  // 모달을 열기 위한 함수
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setActiveModal(null);
  };

  //review modal open
  const openReviewModal = () => {
    setOpenReview(true)
  }

  //review modal close
  const closeReviewModal = () => {
    setOpenReview(null);
  }




  const [UserReservList, setUserReservList] = useState([])
  const [bookingid, setBookingid] = useState()

  let bookId;

  //유저의 예약 리스트 데이터 받아오기
  const findState = useFindState();
  useEffect(() => {
    const fetchData = async () => {
      const user_id = sessionStorage.getItem("uid");


      try {
        const response = await axios.get("/back/api/user/booking_list", { params: { user_id } });
        let CopyData = [...UserReservList];

        CopyData = response.data;
        setUserReservList(CopyData.bookings);



      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [findState]);


  let ReservedList = []
  let ReservingList = []
  UserReservList.map((lst, idx) => {
    lst.APPLY ? ReservedList.push(lst) : ReservingList.push(lst);
  })



  let bid;
  const [Reviewparam, setReviewparam] = useState([])


  //  values = (pid, uid, rate, content, 0, today)
  return (
    <>
      <TabFrame>
        <TabLine content="진행중인 예약" />

        {
          ReservingList.map((rsv, idx) => {
            console.log(rsv)
            return (

              <>
                <div className={styles.Reserving}>
                  <div className={styles.ReservingInfo}>
                    <span>{rsv.PARTNER_NAME} 트레이너</span>
                    <span>|</span>
                    <span>{rsv.YEAR}.{rsv.MONTH}.{rsv.DAY} {rsv.TIME}</span>
                    <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> {rsv.GYM_NAME}</span>
                  </div>
                  <div style={{ flexGrow: '1' }}></div>
                  <div className={styles.ReservingBtn}>
                    <span>예약확정</span>
                    <button onClick={() => {
                      openModal(true)
                      setSelectmodal('상세보기')
                    }}>상세보기</button>
                  </div>
                </div>

                <ReservUserModal activeModal={activeModal} closeModal={closeModal} selectmodal={selectmodal} completeReview={completeReview} completeSub={completeSub} bid={rsv.BOOKID}></ReservUserModal>

              </>
            )

          })


        }


        <TabLine content="예약 내역" />
        {

          ReservedList.map((rsv, idx) => {


            return (

              <div div className={styles.Reserved} >
                <div className={styles.ReservedInfo}>
                  <span>{rsv.PARTNER_NAME}  트레이너</span>
                  <span>|</span>
                  <span>{rsv.YEAR}.{rsv.MONTH}.{rsv.DAY} {rsv.TIME}</span>
                  <span><FontAwesomeIcon icon={faLocationDot} style={{ gap: '2rem' }} /> {rsv.GYM_NAME}</span>

                </div>
                <div style={{ flexGrow: '1' }}></div>


                {/* 리뷰 작성은 Review 모달을 열기 */}
                <div className={styles.ReservedBtn}>
                  <button onClick={() => {
                    setReviewparam(rsv)
                    openReviewModal()
                  }} style={checkreview[idx] ? { backgroundColor: 'white', color: 'black' } : null}

                  >{checkreview[idx] ? '리뷰 작성 완료' : '리뷰 작성'}</button>


                  <button onClick={() => {

                    setSelectmodal('구독신청');
                    openModal(true);
                  }} style={checkrsub[idx] ? { backgroundColor: 'white', color: 'black' } : null}
                  >{checkrsub[idx] ? '구독 신청 완료' : '구독 신청'}</button>

                </div>
              </div>
            )
          })
        }



        {/* map으로 받아와서 나중에 리스트 idx 추가하기 */}


        {openReview && <Review openModal={openReview} closeModal={closeReviewModal} Reviewparam={Reviewparam}></Review>}



      </TabFrame >
    </>
  );
}
