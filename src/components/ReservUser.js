import styles from "../CSS/ReservUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReservUserModal from "./ReservUserModal";
import Modal from "react-modal";
import Review from "./Review";
import axios from "axios";
import { useFindState } from "../store/Statefind";

export default function ReservUser() {
  Modal.setAppElement("#root");
  const [selectmodal, setSelectmodal] = useState("");
  const [checkreview, setCheckReview] = useState([0, 0, 0]);
  const [checkrsub, setChecksub] = useState([0, 0, 0]);
  const [rcv2, setRcv2] = useState();
  //
  const completeReview = (idx) => {
    let cp = [...checkreview];
    cp[idx] = 1;
    setCheckReview(cp);
  };

  const completeSub = (idx) => {
    let cp = [...checkrsub];
    cp[idx] = 1;
    setChecksub(cp);
  };

  // 모달 상태를 관리하는 state
  const [activeModal, setActiveModal] = useState(null);
  const [openReview, setOpenReview] = useState(null);

  // 모달을 열기 위한 함수
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setActiveModal(false);
  };
  //review modal open
  const openReviewModal = () => {
    setOpenReview(true);
  };

  //review modal close
  const closeReviewModal = () => {
    setOpenReview(null);
  };

  const [UserReservList, setUserReservList] = useState([]);

  const [hasFetched, setHasFetched] = useState(false);

  //유저의 예약 리스트 데이터 받아오기
  const findState = useFindState();

  const fetchData = async () => {
    const user_id = sessionStorage.getItem("uid");
    try {
      const response = await axios.get("/back/api/user/booking_list", {
        params: { user_id },
      });
      setHasFetched(true);
      let CopyData = [...UserReservList];
      CopyData = response.data;
      setUserReservList(CopyData.bookings);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!hasFetched) { // 이미 데이터를 받아왔다면 fetchData를 호출하지 않음
      fetchData();
    }
  }, [hasFetched]);

  useEffect(() => {
    fetchData();
  }, [activeModal]);

  let ReservedList = [];
  let ReservingList = [];
  UserReservList.map((lst, idx) => {
    lst.APPLY ? ReservedList.push(lst) : ReservingList.push(lst);
  });

  const [Reviewparam, setReviewparam] = useState([]);

  const [PID, setPID] = useState()
  const [PRICE, setPRICE] = useState(0)
  const [bookid, setbookid] = useState();

  //  values = (pid, uid, rate, content, 0, today)
  return (
    <>
      <TabFrame>
        <TabLine content="진행중인 예약" />

        {ReservingList.map((rsv, idx) => {

    
          return (
            <>
              <div className={styles.Reserving}>
                <div className={styles.ReservingInfo}>
                  <span>{rsv.PARTNER_NAME} 트레이너</span>
                  <span>|</span>
                  <span>
                    {rsv.YEAR}.{rsv.MONTH}.{rsv.DAY} {rsv.TIME}
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ gap: "2rem" }}
                    />{" "}
                    {rsv.GYM_NAME}
                  </span>
                </div>
                <div style={{ flexGrow: "1" }}></div>
                <div className={styles.ReservingBtn}>
                  <span>예약확정</span>
                  <button
                    onClick={() => {
                      setPID(rsv.PID)
                      setbookid(rsv.BOOKID)
                      setPRICE(rsv.PRICE)
                      openModal(true);
                      setRcv2((prev) => rsv);
                      setSelectmodal("상세보기");
                    }}
                  >
                    상세보기
                  </button>
                </div>
              </div>

              {/* {activeModal && (
                <ReservUserModal
                  activeModal={activeModal}
                  closeModal={closeModal}
                  selectmodal={selectmodal}
                  completeReview={completeReview}
                  completeSub={completeSub}
                  bid={rsv.BOOKID}
                ></ReservUserModal>
              )} */}

            </>
          );
        })}

        <TabLine content="예약 내역" />

        {ReservedList.map((rsv, idx) => {
          
          return (
            <div div className={styles.Reserved}>
              <div className={styles.ReservedInfo}>
                <span>{rsv.PARTNER_NAME} 트레이너</span>
                <span>|</span>
                <span>
                  {rsv.YEAR}.{rsv.MONTH}.{rsv.DAY} {rsv.TIME}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ gap: "2rem" }}
                  />{" "}
                  {rsv.GYM_NAME}
                </span>
              </div>
              <div style={{ flexGrow: "1" }}></div>

              {/* 리뷰 작성은 Review 모달을 열기 */}
              <div className={styles.ReservedBtn}>
                <button
                  onClick={() => {
                    setPID(rsv.PID)
                    setbookid(rsv.BOOKID)
                    setPRICE(rsv.PRICE)
                    setReviewparam(rsv);
                    openReviewModal();
                  }}
                  style={
                    checkreview[idx]
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  {checkreview[idx] ? "리뷰 작성 완료" : "리뷰 작성"}
                </button>

                <button
                  onClick={() => {
                    setbookid(rsv.BOOKID)
                    setSelectmodal("구독신청");
                    setPID(rsv.PID)
                    setPRICE(rsv.PRICE)
                    openModal(true);
                  }}
                  style={
                    checkrsub[idx]
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  {checkrsub[idx] ? "구독 신청 완료" : "구독 신청"}
                </button>
              </div>

              {/* {activeModal && (
                <ReservUserModal
                  activeModal={activeModal}
                  closeModal={closeModal}
                  selectmodal={selectmodal}
                  completeReview={completeReview}
                  completeSub={completeSub}
                  bid={rsv.BOOKID}
                ></ReservUserModal>
              )} */}

            </div>
          );
        })}

        {/* map으로 받아와서 나중에 리스트 idx 추가하기 */}





        {openReview && (
          <Review
            openModal={openReview}
            closeModal={closeReviewModal}
            Reviewparam={Reviewparam}
          ></Review>
        )}
        {activeModal && (
          <ReservUserModal
            activeModal={activeModal}
            closeModal={closeModal}
            selectmodal={selectmodal}
            completeReview={completeReview}
            completeSub={completeSub}
            bid={bookid}
            pid={PID}
            Price={PRICE}
          ></ReservUserModal>
        )}
      </TabFrame>
    </>
  );
}
