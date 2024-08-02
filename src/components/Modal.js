// ModalComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../CSS/FilterModal.module.css';

const FilterModal = ({ isOpen, onRequestClose }) => {

    const [selectedDistrict, setSelectedDistrict] = useState('seongbuk');

    const neighborhoods = {
        seongbuk: ['가동', '나동', '나동', '나동', '나동', '가동', '나동', '나동', '가동', '둥둥'],
        gwanak: ['나동', '나동', '나동', '나동', '나동', '나동', '나동', '나동'],
    };

    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.ModalContainer}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.ModalForm}>
                <div className={styles.ModalHeader}>
                    <button onClick={onRequestClose}>ⅹ</button>
                    <div>필터</div>
                </div>

                <hr></hr>

                <div className={styles.ModalMain}>

                    <h3>지역</h3>
                    <div className={styles.Regionfilter}>
                        <label className={styles.Formlabel}>
                            <input type="radio" name="district" value="seongbuk"  onChange={() => handleDistrictChange('seongbuk')} />
                            성북구
                            <span></span>
                        </label>
                        <label className={styles.Formlabel}>
                            <input type="radio" name="district" value="gwanak" defaultChecked onChange={() => handleDistrictChange('gwanak')} />
                            관악구
                        </label>
                    </div>

                    <div className={styles.Regionfilter}>

                        {selectedDistrict && neighborhoods[selectedDistrict].map((neighborhood, index) => (
                            <button key={index} className={styles.Formbutton}>
                                {neighborhood}
                            </button>
                        ))}
                    </div>

                    <h3>성별</h3>
                    <div className={styles.Genderfilter}>
                        <button className={styles.Formbutton}>전체</button>
                        <button className={styles.Formbutton}>남성</button>
                        <button className={styles.Formbutton}>여성</button>
                    </div>

                    <h3>가격</h3>
                    <div className={styles.Pricefilter}>
                        <button className={styles.Formbutton}>전체</button>
                        <button className={styles.Formbutton}>2만원 이하</button>
                        <button className={styles.Formbutton}>2~4만원</button>
                        <button className={styles.Formbutton}>4~5만원</button>
                        <button className={styles.Formbutton}>5만원 이상</button>
                    </div>

                    <h3>1회 체험가격</h3>
                    <div className={styles.Pricefilter}>
                        <button className={styles.Formbutton}>전체</button>
                        <button className={styles.Formbutton}>5천원 이하</button>
                        <button className={styles.Formbutton}>5천~1만원</button>
                        <button className={styles.Formbutton}>1~2만원</button>
                    </div>

                    <h3>태그</h3>
                    <div className={styles.Pricefilter}>
                        <button className={styles.Formbutton}>전체</button>
                        <button className={styles.Formbutton}>다이어트</button>
                        <button className={styles.Formbutton}>체력증진</button>
                        <button className={styles.Formbutton}>근력성장</button>
                        <button className={styles.Formbutton}>벌크업</button>
                        <button className={styles.Formbutton}>체형교정</button>
                        <button className={styles.Formbutton}>재활</button>
                    </div>
                </div>

                <hr style={{marginTop : '50px'}}></hr>

                <div className={styles.Modalfooter}>
                    <button className={styles.Reset}>전체 초기화</button>
                    <div style={{flexGrow : '1'}}></div>
                    <button className={styles.Applyfilter}>필터 적용</button>
                </div>

            </div>



        </Modal>
    );
};

export default FilterModal;

