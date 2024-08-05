import { useEffect } from "react";
import styles from "../CSS/Review.module.css";
import Modal from "react-modal";
import React, { useState } from "react";
export default function Review({ openModal, closeModal, info }) {
  useEffect(() => {
    console.log("저옵: ", info);
  }, [info]);
  const [rating, setRating] = useState(0.0);
  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <Modal
      isOpen={openModal}
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
            <div className={styles.Content}>
              <div className={styles.title}>
                <div>
                  <span>파트너</span>
                  <span>{info.PARTNER_NAME} 트레이너</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>평점</span>
                  <div className={styles.starRating}>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <React.Fragment key={star}>
                        <input
                          type="radio"
                          id={`${star}-stars`}
                          name="rating"
                          value={star}
                          checked={rating === star}
                          onChange={() => handleRating(star)}
                          className={styles.starInput}
                        />
                        <label
                          htmlFor={`${star}-stars`}
                          className={styles.star}
                        >
                          &#9733;
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  <span style={{ marginLeft: "10px" }}> {rating}점 </span>
                </div>
              </div>

              <div className={styles.reviewcontent}>
                <textarea placeholder="내용을 입력해주세요."></textarea>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <button>리뷰 등록하기</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
