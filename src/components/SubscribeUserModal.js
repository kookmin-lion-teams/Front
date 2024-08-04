import Modal from 'react-modal'
import styles from '../CSS/SubscribeUserModal.module.css'
import Review from './Review'
import { useEffect, useState } from 'react';

export default function SubscribeUserModal({ openModal, closeModal ,setopenModal}) {

    const [openReview, setOpenReview] = useState(null);
    //review modal open
    const openReviewModal = () => {
        setOpenReview(true)
    }

    //review modal close
    const closeReviewModal = () => {
        setOpenReview(null);
    }



    return (
        <Modal isOpen={openModal}
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
                    <div className={styles.Content} style={{ marginTop: '0rem' }}>
                        <p>파트너 정보</p>
                        <div>
                            <span>이름</span>
                            <span className={styles.line}>|</span>
                            <span className={styles.MarginRight}>박석진</span>
                            <span>헬스장</span>
                            <span className={styles.line}>|</span>
                            <span>ABC헬스짐</span>
                        </div>
                    </div>

                    <div className={styles.Content}>
                        <p>PT 정보</p>
                        <div>
                            <span>횟수</span>
                            <span className={styles.line}>|</span>
                            <span className={styles.MarginRight}>10회</span>
                            <span>회당가격</span>
                            <span className={styles.line}>|</span>
                            <span>30000원</span>

                            <div></div>

                            <span>시작일</span>
                            <span className={styles.line}>|</span>
                            <span className={styles.MarginRight}>2024.08.02(금)</span>
                            <span>종료일</span>
                            <span className={styles.line}>|</span>
                            <span>2024.09.02(금)</span>

                            <div></div>

                            <span>총 결제 금액</span>
                            <span className={styles.line}>|</span>
                            <span>300,000원</span>
                        </div>
                    </div>

                    <div className={styles.Content}>
                        <p>PT 내역</p>
                        <div>
                            <span>잔여 횟수</span>
                            <span className={styles.line}>|</span>
                            <span>8회</span>
                            <div></div>
                            <span>No.1</span>
                            <span className={styles.line}></span>
                            <span>2024.08.04(금)</span>
                            <div></div>

                            <span>No.2</span>
                            <span className={styles.line}></span>
                            <span>2024.08.04(금)</span>
                            <div></div>

                            <span>No.3</span>
                            <span className={styles.line}></span>
                            <span>2024.08.04(금)</span>

                        </div>
                    </div>


                </div>

                <div className={styles.footer}>
                    <button style={{ backgroundColor: 'white', color: 'black' }}>구독 취소하기</button>
                    <button onClick={() => {
                        openReviewModal()
                        
                    }}>리뷰 작성하기</button>
                    <Review openModal={openReview} closeModal={closeReviewModal}></Review>
                </div>
            </div>

            


        <Review openModal={openReview} closeModal={closeModal}></Review>
        

        </Modal>
    )
}