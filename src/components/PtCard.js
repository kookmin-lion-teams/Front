import { useState } from "react";
import styles from "../CSS/PtCard.module.css";

function PtCard(props) {

    return (
        <div className={styles.card}>
            <div className={styles.cardimg}></div>
            <div className={styles.cardContent}>
                <h4 className={styles.cardName}>{props.partner.name}</h4>
                <div className={styles.cardCareer}>
                    <span>경력 : </span>
                    <span>{props.partner.career}</span>
                </div>
                <div className={styles.cardContent}>
                    {props.partner.content}
                </div>
            </div>
        </div>
    );
}

export default PtCard;
