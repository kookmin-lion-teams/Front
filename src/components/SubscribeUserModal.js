import Modal from "react-modal";
import styles from "../CSS/SubscribeUserModal.module.css";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useFindState } from "../store/Statefind";
import axios from "axios";


export default function SubscribeUserModal({
  openModal,
  closeModal,
  setopenModal,
  info,

}) {


  console.log(info, 'info');
  const [openReview, setOpenReview] = useState(null);
  //review modal open
  const openReviewModal = () => {
    setOpenReview(true);
  };

  //review modal close
  const closeReviewModal = () => {
    setOpenReview(null);
  };

  console.log(info, "sdfsdfsd");

  const [InfoList, setInfoList] = useState([]);

  const findState = useFindState();
  
  useEffect(() => {
    const fetchData = async () => {
      const rid = info.RID;
      try {
        const response = await axios.get("/back/api/reservation_detail", {
          params: { rid },
        });
        let CopyData = [...InfoList];

        CopyData = response.data.reservation_info;

        setInfoList(CopyData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [findState]);

  console.log(InfoList.PT_SESSIONS);
  useEffect(() => {
    console.log(InfoList, "ddds", info);
  }, [InfoList]);
  const handleCancleSubscribeButton = async () => {
    try {
      const rid = info.RID;
      const response = await axios.post("/back/api/user/cancel_reservation", {
        rid,
      });
      console.log("구독취소: ", response.data);
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      className={styles.ModalContainer}
      shouldCloseOnOverlayClick={true}
    >
      <div className={styles.ModalForm}>
        <div className={styles.Header}>
          <button onClick={closeModal}>ⅹ</button>
          <div>구독 상세 정보</div>
        </div>
        <hr></hr>

        <div className={styles.MainContainer}>
          <div className={styles.Content} style={{ marginTop: "0rem" }}>
            <p>파트너 정보</p>
            <div>
              <span>이름</span>
              <span className={styles.line}>|</span>
              <span className={styles.MarginRight}>
                {InfoList.PARTNER_NAME}
              </span>
              <span>헬스장</span>
              <span className={styles.line}>|</span>
              <span>{InfoList.GYM_NAME}</span>
            </div>
          </div>

          <div className={styles.Content}>
            <p>PT 정보</p>
            <div>
              <span>횟수</span>
              <span className={styles.line}>|</span>
              <span className={styles.MarginRight}>{InfoList.FCOUNT}회</span>
              <span>회당가격</span>
              <span className={styles.line}>|</span>
              <span>{InfoList.PRICE}원</span>

              <div></div>

              <span>시작일</span>
              <span className={styles.line}>|</span>
              <span className={styles.MarginRight}>{InfoList.FDATE}</span>
              <span>종료일</span>
              <span className={styles.line}>|</span>
              <span>{InfoList.EDATE}</span>

              <div></div>

              <span>총 결제 금액</span>
              <span className={styles.line}>|</span>
              <span>{InfoList.FCOUNT * InfoList.PRICE}원</span>
            </div>
          </div>

          <div className={styles.Content}>
            <p>PT 내역</p>
            <div>
              <span>잔여 횟수</span>
              <span className={styles.line}>|</span>
              <span>{InfoList.REMAINING_SESSIONS}회</span>
              <div></div>
              {InfoList.PT_SESSIONS &&
                InfoList.PT_SESSIONS.map((ss, idx) => {
                  return (
                    <>
                      <span>No.{ss.No}</span>
                      <span className={styles.line}></span>
                      <span>{ss.CHECK_DATE}</span>
                      <div></div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={handleCancleSubscribeButton}
          >
            {" "}
            구독 취소하기
          </button>
          <button
            onClick={() => {
              openReviewModal();
            }}
          >
            리뷰 작성하기
          </button>
        </div>
      </div>
      <Review
        openModal={openReview}
        closeModal={closeModal}
        Reviewparam={info}
      ></Review>
    </Modal>
  );
}
