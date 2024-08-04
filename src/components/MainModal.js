// ModalComponent.js
import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../CSS/MainModal.module.css";
import { useFindState } from "../store/Statefind";
const MainModal = ({ isOpen, onRequestClose }) => {
  const find = useFindState();
  const [selectRegion, setSelectRegion] = useState();
  const [selectDong, setSelectDong] = useState();
  const [selectGender, setSelectGender] = useState('');
  const [selectPrice, setSelectPrice] = useState();
  const [selectExperiencePrice, setSelectExperiencePrice] = useState();
  const [selectTag, setSelectTag] = useState();

  const regionlist = ["성북구", '관악구']
  const neighborhoods = {
    '성북구': ["가동", "나동", "다동", "라동", "마동", "바동", "사동", "아동", "자동", "차둥"],
    '관악구': ["나동", "나동", "나동", "나동", "나동", "나동", "나동", "나동"],
  };
  const list = {
    'genderlist': ['남성', '여성'],
    'pricelist': ['2만원 이하', '2~4만원', '4~5만원', '5만원 이상'],
    'experiencelist': ['5천원 이하', '5천원~1만원', '1~2만원'],
    'taglist': ['다이어트', '체력증진', '근력성장', '벌크업', '체형교정', '재활'],
  }
  const gender = 'Gender';

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
          <hr></hr>
        </div>


        <div className={styles.ModalMain}>
          {find === "헬스장으로 찾기" ? (
            <></>
          ) : (
            <>
              {" "}
              <h3>지역</h3>
              <div className={styles.Regionfilter}>
                {
                  regionlist.map((region, idx) => {
                    return (
                      <div className={styles.Region}
                        onClick={() => {
                          setSelectRegion(region)
                          setSelectDong('')
                        }}
                        style={
                          selectRegion == region
                            ? { border: '3px solid black' }
                            : null
                        }
                      >{region}</div>
                    )
                  })
                }
              </div>

              <div className={styles.Regionfilter}>
                {selectRegion && neighborhoods[selectRegion].map((neighborhood, index) => (
                  <button key={index} className={styles.Formbutton}
                    onClick={() => { setSelectDong(index) }}
                    style={selectDong === index
                      ? { border: '3px solid black' }
                      : null
                    }
                  >
                    {neighborhood}
                  </button>
                ))}
              </div>

            </>
          )}



          <h3>성별</h3>
          <div className={styles.Genderfilter}>
            <button className={styles.Formbutton} onClick={() => { setSelectGender('전체') }} style={
              selectGender === '전체'
                ? { border: '3px solid black' } : null
            }>전체</button>
            {

              list.genderlist.map((gender, idx) => {
                return (
                  <button className={styles.Formbutton} onClick={() => { setSelectGender(gender) }} style={
                    selectGender === gender
                      ? { border: '3px solid black' } : null
                  }>{gender}</button>
                )
              })
            }
          </div>



          <h3>가격</h3>
          <div className={styles.Pricefilter}>
            <button className={styles.Formbutton} onClick={() => { setSelectPrice('전체') }} style={
              selectPrice === '전체'
                ? { border: '3px solid black' } : null
            }>전체</button>
            {

              list.pricelist.map((price, idx) => {
                return (
                  <button className={styles.Formbutton} onClick={() => { setSelectPrice(price) }} style={
                    selectPrice === price
                      ? { border: '3px solid black' } : null
                  }>{price}</button>
                )
              })
            }
          </div>



          <h3>1회 체험가격</h3>
          <div className={styles.Pricefilter}>
            <button className={styles.Formbutton} onClick={() => { setSelectExperiencePrice('전체') }} style={
              selectExperiencePrice === '전체'
                ? { border: '3px solid black' } : null
            }>전체</button>
            {

              list.experiencelist.map((experienceprice, idx) => {
                return (
                  <button className={styles.Formbutton} onClick={() => { setSelectExperiencePrice(experienceprice) }} style={
                    selectExperiencePrice === experienceprice
                      ? { border: '3px solid black' } : null
                  }>{experienceprice}</button>
                )
              })
            }
          </div>





          <h3>태그</h3>
          <div className={styles.Pricefilter}>
            <button className={styles.Formbutton} onClick={() => { setSelectTag('전체') }} style={
              selectTag === '전체'
                ? { border: '3px solid black' } : null
            }>전체</button>
            {

              list.taglist.map((tag, idx) => {
                return (
                  <button className={styles.Formbutton} onClick={() => { setSelectTag(tag) }} style={
                    selectTag === tag
                      ? { border: '3px solid black' } : null
                  }>{tag}</button>
                )
              })
            }
          </div>



        </div>

        <hr style={{ marginTop: "50px" }}></hr>

        <div className={styles.Modalfooter}>
          <button className={styles.Reset}>전체 초기화</button>
          <div style={{ flexGrow: "1" }}></div>
          <button className={styles.Applyfilter}>필터 적용</button>
        </div>
      </div>
    </Modal>
  );
};

export default MainModal;
