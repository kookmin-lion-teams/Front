import Nav_ from "./Nav_";
import styles from "../CSS/Detail.module.css";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useLocation, location } from "react-router-dom";
import DetailModal from "../components/DetailModal";
import axios from "axios";
import { useFindState } from "../store/Statefind";
import DetailMap from "./DetailMap";
import ReservUser from "./ReservUser";
import ReservUserModal from "./ReservUserModal";

function Detail() {
  // 모달 상태를 관리하는 state
  const [activeModal, setActiveModal] = useState(null);


  // 모달을 열기 위한 함수
  const OpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  // 모달을 닫기 위한 함수
  const CloseModal = () => {
    setActiveModal(false);
  };
  const [one, setone] = useState();

  const findState = useFindState();
  const [partner, setPartner] = useState([
    {
      EPRICE: null,
      EXPERT1: null,
      EXPERT2: null,
      GNAME: null,
      IG: null,
      IMG: null,
      INTRO: null,
      PID: null,
      PRICE: null,
      closed_days: {},
      partner_dong: null,
      partner_gender: null,
      partner_gu: null,
      partner_name: null,
      weekday_end_time: null,
      weekday_start_time: null,
      weekend_end_time: null,
      weekend_start_time: null,
    },
  ]);

  const [Review, setReview] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const location = useLocation();

  const ptner = location.state.ptner;


  console.log(partner, 'fdfdf')
  let partner_id;

  useEffect(() => {
    const fetchData = async () => {
      partner_id = location.state.ptner.PID;

      try {
        const [Partnerresponse, Reviewresponse] = await Promise.all([
          axios.get("/back/api/user/partner_detail", {
            params: { partner_id },
          }),
          axios.get("/back/api/user/partner_reviews", {
            params: { partner_id },
          }),
        ]);

        let copypt = [...partner];
        copypt = Partnerresponse.data.partner_info;
        setPartner(copypt);

        let copyreview = [...Review];
        copyreview = Reviewresponse.data.reviews;
        setReview(copyreview);
      } catch (err) {
        console.log(123, err.message);
      }
    };
    fetchData();
  }, [findState]);




  return (
    <>
      <Nav_></Nav_>
      <div className={styles.container}>
        <div className={styles.Detailinformation}>
          <h4>파트너 상세정보</h4>
          <div className={styles.Item}>
            <div className={styles.Itemimg}></div>

            <div className={styles.Partnercontainer}>
              <div className={styles.PartnerInfo}>
                <p style={{ fontSize: "1.5rem" }}>
                  {partner.partner_name} 트레이너
                </p>
                <p>
                  {partner.partner_gender == 1 ? "남성" : "여성"}{" "}
                  <span className={styles.line}>|</span> 30세
                </p>
                <p>
                  {partner.partner_gu} {partner.partner_dong}{" "}
                  <span className={styles.line}>|</span> {partner.GNAME}
                </p>
                <p>
                  {`평점:  `}
                  <span>
                    {ptner.avg_rate} ({partner.review_count})
                  </span>
                </p>
              </div>

              <div className={styles.Partnerprice}>
                <div className={styles.price}>
                  <div>
                    <p>정상가 (회당)</p>
                    <span className={styles.Pricefont}>{partner.PRICE}</span>
                    <span className={styles.Pricefont}>원</span>
                  </div>
                  <span className={styles.line}>|</span>
                  <div>
                    <p>1회 체험가</p>
                    <span className={styles.Pricefont}>{partner.EPRICE}</span>
                    <span className={styles.Pricefont}>원</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignContent: "space-around", gap: '4rem', alignItems: 'center' }}>

                  {/* 구독 신청 */}
                  <button onClick={OpenModal} style={{ width: '10rem' }}>구독 신청하기</button>
                  <button onClick={openModal} style={{ width: '10rem' }}>1회 체험 예약하기</button>
                </div>
                {/* DetailModal */}
                <DetailModal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  pid={partner_id}
                  eprice={partner.EPRICE}
                />

                {/* SUBSCRIBMODAL */}
                {activeModal && (
                  <ReservUserModal
                    activeModal={activeModal}
                    closeModal={CloseModal}
                    selectmodal={'구독신청'}
                    completeReview={[]}
                    completeSub={[]}
                    bid={0}
                    pid={location.state.ptner.PID}
                    Price={partner.EPRICE}
                  ></ReservUserModal>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Introduce}>
          <h4> 파트너 소개 </h4>
          <hr></hr>
          <div>{partner.INTRO}</div>
        </div>

        <div className={styles.InfoContainer}>
          <div className={styles.left}>
            <div className={styles.Expert}>
              <h4>Expert</h4>
              <hr></hr>
              <ul>
                <li>{partner.EXPERT1}</li>

                <li>{partner.EXPERT2}</li>
              </ul>
            </div>

            <div className={styles.LessonTime}>
              <h4>레슨 가능 시간</h4>
              <hr></hr>
              <ul>
                <li>
                  평일 : {partner.weekday_start_time} ~{" "}
                  {partner.weekday_end_time}
                </li>
                <li>
                  주말 : {partner.weekend_start_time} ~{" "}
                  {partner.weekend_end_time}
                </li>


              </ul>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.Gyminformation}>
              <h4>헬스장 정보</h4>
              <hr></hr>
              <div>
                <span style={{ fontSize: "1.5rem" }}>{partner.GNAME}</span>
                <span className={styles.line}>|</span>
                <span>{partner.gym_address}</span>
              </div>
            </div>

            <div className={styles.GymMap}>
              <DetailMap
                gu={partner.partner_gu}
                dong={partner.partner_dong}
                address={partner.gym_address}
              />
            </div>
          </div>
        </div>

        <div className={styles.PartnerImg}>
          <h4>파트너 사진</h4>
          <hr></hr>
          <div className={styles.Imgwrap}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>

        <div className={styles.ReviewContainer}>
          <h4>리뷰</h4>
          <hr></hr>
          <div className={styles.Review}>
            <select className={styles.ReviewFilter}>
              <option>평점 높은 순</option>
              <option>평점 낮은 순</option>
              <option>최신순</option>
              <option>오래된 순</option>
            </select>

            {Review.map((review, idx) => {
              return (
                <div className={styles.ReviewDetail}>
                  <div className={styles.ReviewItem}>
                    <div>{review.user_name}</div>
                    <div>{review.user_gender ? "여자" : "남자"}</div>
                    <div>{review.RATE}</div>
                    <div style={{ flexGrow: "1" }}></div>
                    <div>{review.DATE}</div>
                  </div>
                  <div className={styles.ReviewContent}>{review.CONTENT}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
