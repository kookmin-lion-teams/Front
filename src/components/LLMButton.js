import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../CSS/LLMButton.module.css";
import axios from "axios";

Modal.setAppElement("#root"); // 모달의 접근성을 위해 root 요소를 설정

const LLMButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [myChat, setMyChat] = useState([]);
  const [LLMChat, setLLMChat] = useState([]);
  const [userInput, setUserInput] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setMyChat([]);
    setLLMChat([]);
    setUserInput([]);
    setModalIsOpen(false);
  };

  // 두 배열을 번갈아가며 섞는 함수
  const mergeChats = () => {
    const mergedChats = [];
    const maxLength = Math.max(myChat.length, LLMChat.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < myChat.length) mergedChats.push(myChat[i]);
      if (i < LLMChat.length) mergedChats.push(LLMChat[i]);
    }
    return mergedChats;
  };

  const invoke = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    setMyChat((prev) => [...prev, userInput]);

    try {
      const endpoint = "back/api/dubot";
      const response = await axios.post(endpoint, { user_input: userInput });
      const k = response.data.response;
      console.log(k);
      setLLMChat((prev) => [...prev, k]);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  return (
    <>
      <button type="button" className={styles.myButton} onClick={openModal}>
        듀봇에게 물어보기
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.LLMModal}
        shouldCloseOnOverlayClick={true}
      >
        <div className={styles.level_1}>
          <button
            onClick={closeModal}
            style={{ all: "unset", cursor: "pointer" }}
          >
            X
          </button>
        </div>
        <div className={styles.level_2}>
          <div className={styles.chatContainer}>
            <div className={styles.chatScrollContainer}>
              {mergeChats().map((chat, index) => (
                <div
                  key={index}
                  className={
                    index % 2 === 0 ? styles.myChatCon : styles.LLMChatCon
                  }
                >
                  <div
                    className={
                      index % 2 === 0 ? styles.myChatDiv : styles.LLMChatDiv
                    }
                  >
                    {chat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.level_3}>
          <form className={styles.formContainer} onSubmit={invoke}>
            <div className={styles.searchWrapper}>
              <input
                type="search"
                id="LLM"
                className={styles.searchInput}
                placeholder="안녕하세요 placeholder입니다..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required
              />
              <button type="submit" className={styles.searchButton}>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.38228 10.5688C6.95801 10.9224 6.90068 11.553 7.25425 11.9772C7.60781 12.4015 8.23838 12.4588 8.66265 12.1053L7.38228 10.5688ZM12 8.02247L12.6402 7.25425C12.2693 6.94521 11.7306 6.94521 11.3598 7.25425L12 8.02247ZM15.3373 12.1053C15.7616 12.4588 16.3921 12.4015 16.7457 11.9772C17.0993 11.553 17.0419 10.9224 16.6177 10.5688L15.3373 12.1053ZM11 15.9775C11 16.5298 11.4477 16.9775 12 16.9775C12.5523 16.9775 13 16.5298 13 15.9775H11ZM8.66265 12.1053L12.6402 8.79069L11.3598 7.25425L7.38228 10.5688L8.66265 12.1053ZM11.3598 8.79069L15.3373 12.1053L16.6177 10.5688L12.6402 7.25425L11.3598 8.79069ZM11 8.02247V15.9775H13V8.02247H11ZM17.6569 6.34315C20.781 9.46734 20.781 14.5327 17.6569 17.6569L19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893L17.6569 6.34315ZM17.6569 17.6569C14.5327 20.781 9.46734 20.781 6.34315 17.6569L4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711L17.6569 17.6569ZM6.34315 17.6569C3.21895 14.5327 3.21895 9.46734 6.34315 6.34315L4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711L6.34315 17.6569ZM6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315L19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893L6.34315 6.34315Z"
                    fill="black"
                  />
                </svg> */}
                go
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LLMButton;
