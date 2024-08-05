import { useNavigate, useLocation } from "react-router-dom";
import styles from "../CSS/PtCard.module.css";
import { useEffect } from "react";

function PtCard({ cardKey, partner }) {
  let navigate = useNavigate();
  useEffect(() => {
  
  return (
    <>
      <div
        className={styles.container}
        onClick={() => {
          console.log("Navigating to:", `/detail/${cardKey}`);
          navigate(`/detail/${cardKey}`, { state: { ptner: partner } });
        }}
      >
        <div className={styles.cardimg}></div>
        <div className={styles.CardContainer}>
          <h2>
            {partner.trainer_name} <span>Partner</span>
          </h2>
          <p></p>
          <span className={styles.tag}>{partner.expert1}</span>
          <span className={styles.line}>|</span>
          <span className={styles.tag}>{partner.expert2}</span>
          <span className={styles.itemsContainer}>{partner.IG}</span>

          <span className={styles.itemsCosntainer}>⭐️ {partner.avg_rate}</span>
        </div>

        <div style={{ marginLeft: "5px" }}>
          <div>
            <div className={styles.user}>
              <div>1회 체험</div>
            </div>
            <span>
              {(100 - (partner.eprice / partner.price) * 100).toFixed(1)}
            </span>
            %<span className={styles.discount}>{partner.price}원</span>
          </div>
          <div className={styles.nowprice}>{partner.eprice}</div>원
        </div>
      </div>
    </>
  );
}

export default PtCard;
