import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../CSS/DetailModal.module.css';

const DetailModal = ({ isOpen, onRequestClose }) => {
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.ModalContainer}
            shouldCloseOnOverlayClick={true}
        >

            <div className={styles.ModalForm}>
                <div className={styles.Header}></div>
                <div className={styles.main}></div>
                <div className={styles.footer}></div>
            </div>


        </Modal>
    )


}



export default DetailModal