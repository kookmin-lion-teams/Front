import Nav_ from './Nav_'
import styles from "../CSS/Detail.module.css";
import { useState } from "react";
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

function Detail() {
    const loaction = useLocation();
    const { partner } = loaction.state;


    let [imgurl, setImg] = useState()



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
                                <p style={{ fontSize: '1.5rem' }}>{partner.name} 트레이너</p>
                                <p>남성 <span className={styles.line}>|</span> 30세</p>
                                <p>성북구 정릉동 <span className={styles.line}>|</span> 웰니스</p>
                                <p>⭐️⭐️⭐️⭐️⭐️ <span>4.8 (28)</span></p>

                            </div>

                            <div className={styles.Partnerprice}>
                                <div className={styles.price}>
                                    <div>
                                        <p>정상가 (회당)</p>
                                        <span className={styles.Pricefont}>30000</span>
                                        <span className={styles.Pricefont}>원</span>
                                    </div>
                                    <span className={styles.line}>|</span>
                                    <div>
                                        <p>1회 체험가</p>
                                        <span className={styles.Pricefont}>20000</span>
                                        <span className={styles.Pricefont}>원</span>
                                    </div>
                                </div>
                                <button>1회 체험 예약하기</button>
                            </div>

                        </div>



                    </div>
                </div>

                <div className={styles.Introduce}>
                    <h4>파트너 소개</h4>
                    <hr></hr>
                    <div>안녕하세요 박석진입니다. 여러분의 건강한 몸을 책임지겠습니다</div>
                </div>


                <div className={styles.InfoContainer}>

                    <div className={styles.left}>
                        <div className={styles.Expert}>
                            <h4>Expert</h4>
                            <hr></hr>
                            <ul>
                                <li>다이어트</li>
                                <li>근력강화</li>
                                <li>재활</li>
                            </ul>
                        </div>

                        <div className={styles.LessonTime}>
                            <h4>레슨 가능 시간</h4>
                            <hr></hr>
                            <ul>
                                <li>평일 : 10:00 ~ 22:00</li>
                                <li>주말 : 10:00 ~ 18:00</li>
                                <li>휴무일 : 화요일</li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.right}>
                        <div className={styles.Gyminformation}>
                            <h4>헬스장 정보</h4>
                            <hr></hr>
                            <div>
                                <span style={{ fontSize: '1.5rem' }}>ABC 헬스장</span>
                                <span className={styles.line}>|</span>
                                <span>서울시 성북구 정릉로 48</span>
                            </div>


                        </div>
                        <div className={styles.GymMap}>
                            123
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

                        <div className={styles.ReviewDetail}>
                            <div className={styles.ReviewItem}>
                                <div>User Name</div>
                                <div >남성</div>
                                <div>⭐️⭐️⭐️⭐️⭐️</div>
                                <div style={{ flexGrow: '1' }}></div>
                                <div>2024.07.14</div>
                            </div>

                            <div className={styles.ReviewContent}>
                                안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요

                            </div>

                        </div>

                        <div className={styles.ReviewDetail}>
                            <div className={styles.ReviewItem}>
                                <div>User Name</div>
                                <div >남성</div>
                                <div>⭐️⭐️⭐️⭐️⭐️</div>
                                <div style={{ flexGrow: '1' }}></div>
                                <div>2024.07.14</div>
                            </div>

                            <div className={styles.ReviewContent}>
                                안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요

                            </div>

                        </div>
                        <div className={styles.ReviewDetail}>
                            <div className={styles.ReviewItem}>
                                <div>User Name</div>
                                <div >남성</div>
                                <div>⭐️⭐️⭐️⭐️⭐️</div>
                                <div style={{ flexGrow: '1' }}></div>
                                <div>2024.07.14</div>
                            </div>

                            <div className={styles.ReviewContent}>
                                안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </>
    )


}


export default Detail