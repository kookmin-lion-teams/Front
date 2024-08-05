import { useEffect, useState } from 'react'
import styles from '../CSS/Review.module.css'
import Modal from 'react-modal'
import axios from 'axios'
import { useFindState } from '../store/Statefind'
export default function Review({ openModal, closeModal, Reviewparam }) {



    //  values = (pid, uid, rate, content, 0, today)

    let [content, setcontent] = useState('')
    const findState = useFindState();

    let rate = 2;


    const submitReview = async () => {
        const pid = Reviewparam.PID;
        try {
            const response = await axios.post("/back/api/review/one_time", {
                pid,
                rate,
                content

            });
        } catch (err) {
            console.log(err.message);
        }
    };
    






    return (


        <Modal isOpen={openModal}
            onRequestClose={closeModal}
            className={styles.ModalContainer}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.ModalForm}>

                <div className={styles.Header}>
                    <button onClick={closeModal}>ⅹ</button>

                    <div>리뷰작성</div>

                </div>
                <hr></hr>

                {/* main */}
                <div className={styles.main}>
                    <div className={styles.MainContainer}>
                        <div className={styles.Content} >

                            <div className={styles.title}>
                                <div>
                                    <span>파트너</span>
                                    <span>{Reviewparam.PARTNER_NAME} 트레이너</span>
                                </div>
                                <div>
                                    <span>평점</span>
                                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                            </div>

                            <div className={styles.reviewcontent}><textarea placeholder='내용을 입력해주세요.' value={content} onChange={(e) => {
                                setcontent(e.target.value);
                            }}></textarea></div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <button onClick={() => {
                            submitReview()
                        }}>리뷰 등록하기</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}