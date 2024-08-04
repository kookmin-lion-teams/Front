import styles from '../CSS/Review.module.css'
import Modal from 'react-modal'
export default function Review({ openModal, closeModal }) {
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
                                    <span>박석진 트레이너</span>
                                </div>
                                <div>
                                    <span>평점</span>
                                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                            </div>

                            <div className={styles.reviewcontent}><textarea placeholder='내용을 입력해주세요.'></textarea></div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <button>리뷰 등록하기</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}