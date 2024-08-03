import { useState } from "react";
import { Navigate, useNavigate, uselocation,location, useLocation } from 'react-router-dom';
import styles from "../CSS/PtCard.module.css";

function PtCard({ Key, partner }) {


    let navigate = useNavigate();
    
    let location = useLocation();




    return (
        <>
            <div className={styles.container} onClick={() => {

                navigate(`/detail/${Key}`, {state : {ptner : partner}})
            }}>

                <div className={styles.cardimg}></div>
                <div className={styles.CardContainer}>

                    <h2>{partner.trainer_name}트레이너</h2>
                    <p>{partner.trainer_intro}</p>

                    <span className={styles.tag}>{partner.expert1}</span>

                    <span className={styles.line}>|</span>
                    <span className={styles.tag}>{partner.expert1}</span>
                    <span className={styles.itemsContainer}>
                        {partner.IG}
                    </span>

                    <span className={styles.itemsCosntainer}>
                        ⭐️ {partner.avg_rate}
                    </span>

                </div>

                <div style={{ marginLeft: '5px' }}>

                    <div>
                        <span>{(100-(partner.eprice/partner.price)*100).toFixed(1)}</span>%
                        <span className={styles.discount}>{partner.price}원</span>
                    </div>
                    <div class={styles.nowprice}>{partner.eprice}</div>원

                </div>
            </div>
        </>
    );
}

export default PtCard;
