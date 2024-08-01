// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import styles from '../CSS/FilterModal.module.css';

const FilterModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.ModalContainer}
        >   
            <div className={styles.ModalForm}>
                <div className={styles.ModalHeader}>
                    <button onClick={onRequestClose}>ⅹ</button>
                    <div>필터</div>
                </div>
                <hr></hr>
                <div className={styles.ModalMain}>
                    <div>
                        <h3>지역</h3>
                    </div>


                </div>


            </div>

            {/* <h2>Hello, I'm a Modal</h2>
            <p>This is a simple modal example.</p>
            <button onClick={onRequestClose}>Close Modal</button> */}
        </Modal>
    );
};

export default FilterModal;

