import styles from '../CSS/PtCard.module.css'


function PtCard() {
    return (

        <div className={styles.card}>
            <div className={styles.cardimg}></div>

            <div className={styles.cardContent}>

                <h4 className={styles.cardName}>Name</h4>

                <div className={styles.cardCareer}>
                    <span>경력 : </span><span >10년</span>
                </div>

                <div className={styles.cardContent}>              
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolore quidem pariatur fugiat nisi rerum quisquam molestiae? Culpa rem excepturi, inventore quam neque porro nihil perferendis exercitationem accusamus animi laudantium!
                </div>

            </div>

        </div>
    );
}


export default PtCard