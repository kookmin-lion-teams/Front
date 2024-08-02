import { useState } from "react";
import { Navigate, useNavigate, uselocation } from 'react-router-dom';
import styles from "../CSS/PtCard.module.css";

function PtCard({ key, partner }) {

    let navigate = useNavigate();


    return (
        <>
            
            
            <div className={styles.container} onClick={() => {
                navigate(`/detail/${key}`, { state: { partner } })
            }}>

                <div className={styles.cardimg}></div>
                <div className={styles.CardContainer}>

                    <h2>{partner.name} 트레이너</h2>
                    <p>회원님의 건강한 몸을 위해 최선을 다하겠습니다</p>

                    <span className={styles.tag}>Tag</span>
                    <span className={styles.tag}>Tag</span>
                    <span className={styles.line}>|</span>
                    <span className={styles.itemsContainer}>
                        ABC헬스짐
                    </span>

                    <span className={styles.line}>|</span>

                    <span className={styles.itemsContainer}>
                        ⭐️ 4.8
                    </span>

                </div>

                <div style={{ marginLeft: '5px' }}>

                    <div >
                        <span>50</span>%
                        <span className={styles.discount}>30,000원</span>
                    </div>
                    <div class={styles.nowprice}>{partner.price}</div>원

                </div>
            </div>
        </>
    );
}

export default PtCard;
