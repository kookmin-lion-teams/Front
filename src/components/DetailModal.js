import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../CSS/DetailModal.module.css';

const DetailModal = ({ isOpen, onRequestClose }) => {
    const [selectedGoal, setSelectedGoal] = useState('');

    const handleSelection = (e) => {
        setSelectedGoal(e.target.value);
    };


    let [level, setLevel] = useState(0);


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


                    {
                        {
                            0:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        1회 체험을 희망하는 날짜를 선택해주세요
                                    </p>

                                    <div className={styles.Calendar}>
                                    </div>
                                </div>,

                            1:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        희망하는 시간도 알려주세요
                                    </p>

                                    <p>2024년 08월 02일 (금)</p>
                                    

                                    <div className={styles.Grid}>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                        <div>dd</div>
                                    </div>
                                </div>,

                        }[level]
                    }
                </div>



                <div className={styles.footer}>
                    {
                        level != 0
                            ?
                            <button onClick={() => { 
                                if(level >= 0){
                                    setLevel(level - 1) 
                                }
                            }}>이전</button> 
                            : null
                    }
                    <button onClick={() => { setLevel(level + 1) }}>다음</button>
                </div>

            </div>

        </Modal >
    )


}



export default DetailModal