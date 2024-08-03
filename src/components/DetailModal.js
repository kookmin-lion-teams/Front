import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../CSS/DetailModal.module.css';

const DetailModal = ({ isOpen, onRequestClose }) => {
    const [selectedGoal, setSelectedGoal] = useState('');

    const handleSelection = (e) => {
        setSelectedGoal(e.target.value);
    };
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.ModalContainer}
            shouldCloseOnOverlayClick={true}
        >

            <div className={styles.ModalForm}>

                <div className={styles.Header}>
                <button onClick={onRequestClose}>ⅹ</button>
                    <div>1회 체험 예약</div>
                </div>

                <hr></hr>

                <div className={styles.main}>

                    <div className={styles.GoalContainer}>
                        <p className={styles.GoalTitle}>
                            1회 체험을 희망하는 날짜를 선택해주세요
                        </p>

                        <div className={styles.Calendar}>
                        </div>


                    </div>

                </div>



                <div className={styles.footer}>

                    <button>다음</button>
                </div>

            </div>

        </Modal >
    )


}



export default DetailModal