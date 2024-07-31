import { useState } from "react";
import styles from "../CSS/PtCard.module.css";

function PtCard(props) {

    return (

        <div className={styles.card}>
            <div className={styles.cardimg}></div>
            <div className={styles.CardContainer}>

                <h2> 박석진 트레이너</h2>
                <p>회원님의 건강한 몸을 위해 최선을 다하겠습니다</p>

                <span class={styles.tag}>Tag</span>
                <span class={styles.tag}>Tag</span>
                <span class={styles.line}>|</span>
                <span className={styles.itemsContainer}>
                    ABC헬스짐
                </span>

                <span class={styles.line}>|</span>

                <span className={styles.itemsContainer}>
                    ⭐️ 4.8
                </span>

            </div>

            <div style={{marginLeft : '5px'}}>
                
                <div >
                    <span>50</span>%
                    <span className={styles.discount}>30,000원</span>
                </div>
                <div class={styles.nowprice}>15,000원</div>

            </div>
        </div>

    );
}

export default PtCard;
