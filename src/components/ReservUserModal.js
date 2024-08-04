import styles from '../CSS/ReservUserModal.module.css';
import { useEffect, useState } from "react";
import Modal from 'react-modal';

function ReservUserModal({ activeModal, closeModal, selectmodal }) {

    let [cnt, setCnt] = useState(0)

    return (

        <Modal
            isOpen={activeModal}
            onRequestClose={closeModal}
            className={styles.ModalContainer}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.ModalForm}>

                <div className={styles.Header}>
                    <button onClick={closeModal}>ⅹ</button>
                    {
                        {
                            '상세보기': <div>1회 체험 예약 정보</div>,
                            '예약확정': <div>1회 체험 예약 정보</div>,
                            '리뷰작성': <div>리뷰작성</div>,
                            '구독신청': <div>구독신청</div>
                        }[selectmodal]
                    }
                </div>
                <hr></hr>

                {/* main */}
                <div className={styles.main}>
                    {
                        {
                            '상세보기':
                                <div className={styles.MainContainer}>
                                    <div className={styles.Content} style={{ marginTop: '0rem' }}>
                                        <p>파트너 정보</p>
                                        <div>
                                            <span>이름</span>
                                            <span className={styles.line}>|</span>
                                            <span>박석진</span>
                                            <span>휴대폰 번호</span>
                                            <span className={styles.line}>|</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                    </div>

                                    <div className={styles.Content}>
                                        <p>예약자 정보</p>
                                        <div>
                                            <span>이름</span>
                                            <span className={styles.line}>|</span>
                                            <span>홍길동</span>
                                            <span>휴대폰 번호</span>
                                            <span className={styles.line}>|</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                    </div>

                                    <div className={styles.Content}>
                                        <p>예약 상세 정보</p>
                                        <div>
                                            <span>목적</span>
                                            <span className={styles.line}>|</span>
                                            <span>다이어트</span>
                                            <div></div>
                                            <span>헬스 경력</span>
                                            <span className={styles.line}>|</span>
                                            <span>입문 / 초급자</span>
                                            <div></div>
                                            <span>선호 시간대</span>
                                            <span className={styles.line}>|</span>
                                            <span>저녁(18시~20시)</span>
                                        </div>
                                    </div>

                                    <div className={styles.Content}>
                                        <p>1회 체험 일시</p>
                                        <div>
                                            <span>날짜</span>
                                            <span className={styles.line}>|</span>
                                            <span>2024.06.24(월)</span>
                                            <div></div>
                                            <span>시간</span>
                                            <span className={styles.line}>|</span>
                                            <span>18:00</span>
                                        </div>
                                    </div>
                                </div>,


                            '리뷰작성':
                                <div className={styles.MainContainer}>
                                    <div className={styles.Content} >

                                        <div className={styles.title}>
                                            <div>
                                                <span>파트너</span>
                                                <span>박석진 트레이너</span>
                                            </div>
                                            <div>
                                                <span>평점</span>
                                                <span>⭐️⭐️⭐️⭐️⭐️</span>
                                            </div>
                                        </div>

                                        <div className={styles.reviewcontent}><textarea placeholder='내용을 입력해주세요.'></textarea></div>
                                    </div>
                                </div>,


                            '구독신청':


                                <div className={styles.MainContainer}>
                                    {
                                        {
                                            0:
                                                <div className={styles.ApplyContent} >
                                                    <div>한달동안 진행할 PT 횟수를 입력해주세요</div>
                                                    <input placeholder='회'></input>
                                                    <p>* 최대 30일까지만 입력 가능합니다.</p>
                                                </div>,

                                            1:
                                                <div className={styles.ApplyContent} >
                                                    <div>PT를 시작할 날짜를 선택해주세요</div>
                                                    <div className={styles.calender}>캘린더</div>
                                                </div>,
                                            2:
                                                <div className={styles.ApplyContent} >
                                                    <div>구독 정보를 확인해주세요</div>
                                                    
                                                </div>,
                                        }[cnt]
                                    }
                                </div>


                        }[selectmodal]
                    }


                    {/* footer button */}
                    {
                        {
                            '상세보기':
                                <div className={styles.footer} style={
                                    selectmodal === '상세보기'
                                        ? { justifyContent: 'end' }
                                        : null
                                }>
                                    <button style={
                                        selectmodal === '상세보기'
                                            ? { backgroundColor: 'white', color: 'black' }
                                            : null
                                    }>예약 취소</button>
                                </div>,

                            '리뷰작성':
                                <div className={styles.footer}>
                                    <button>리뷰 등록하기</button>
                                </div>,


                            '구독신청':
                                <div className={styles.footer}>
                                    {
                                        0 < cnt && cnt < 4 ? <button
                                            style={{ backgroundColor: 'white', color: 'black' }}
                                            onClick={() => { setCnt(cnt - 1) }}>이전</button> : null
                                    }
                                    {
                                        cnt < 2 ? <button onClick={() => { setCnt(cnt + 1) }}>다음</button> : null
                                    }
                                    {
                                        cnt == 2 || cnt == 3 ? <button onClick={() => { setCnt(cnt + 1) }}>결제하기</button> : null
                                    }
                                    {
                                        cnt == 4 ? <button onClick={() => { closeModal() }}>확인</button> : null
                                    }
                                </div>


                        }[selectmodal]
                    }



                </div>
            </div>
        </Modal >


    )
}


export default ReservUserModal;