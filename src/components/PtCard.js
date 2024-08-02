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

                    <h2>{partner.NAME}트레이너</h2>
                    <p>{partner.INTRO}</p>

                    <span className={styles.tag}>{partner.TAG}</span>

                    <span className={styles.line}>|</span>
                    <span className={styles.itemsContainer}>
                        {partner.IG}
                    </span>

                    <span className={styles.itemsCosntainer}>
                        ⭐️ {partner.AVG_RATE}
                    </span>

                </div>

                <div style={{ marginLeft: '5px' }}>

                    <div>
                        <span>{(partner.EPRICE/partner.PRICE)}</span>%
                        <span className={styles.discount}>{partner.PRICE}원</span>
                    </div>
                    <div class={styles.nowprice}>{partner.EPRICE}</div>원

                </div>
            </div>
        </>
    );
}

export default PtCard;
