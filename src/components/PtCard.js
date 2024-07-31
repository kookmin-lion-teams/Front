import styles from '../CSS/PtCard.module.css'


function PtCard() {
    return (

        <div className={styles.card}>
            <div className={styles.cardimg}></div>

            <div className={styles.cardContent}>

                <h4>Name</h4>
                <div></div>
                <p><span>경력 : </span>
        Lorem ipsum dolor
                </p>
                <p>자기소개란</p>

            </div>

        </div>
    );
}


export default PtCard