import styles from "../CSS/Filter.module.css";
import { useState } from "react";
import MainModal from "./MainModal";

const Filter = () => {
  //Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <button className={styles.filter} onClick={openModal}>
        <svg
          width="27"
          height="36"
          viewBox="0 0 27 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_192_1967)">
            <path
              d="M4.39999 26.4H22C22.605 26.4 23.1 25.74 23.1 24.9333C23.1 24.1267 22.605 23.4667 22 23.4667H4.39999C3.79499 23.4667 3.29999 24.1267 3.29999 24.9333C3.29999 25.74 3.79499 26.4 4.39999 26.4ZM4.39999 19.0667H22C22.605 19.0667 23.1 18.4067 23.1 17.6C23.1 16.7933 22.605 16.1333 22 16.1333H4.39999C3.79499 16.1333 3.29999 16.7933 3.29999 17.6C3.29999 18.4067 3.79499 19.0667 4.39999 19.0667ZM3.29999 10.2667C3.29999 11.0733 3.79499 11.7333 4.39999 11.7333H22C22.605 11.7333 23.1 11.0733 23.1 10.2667C23.1 9.46 22.605 8.8 22 8.8H4.39999C3.79499 8.8 3.29999 9.46 3.29999 10.2667Z"
              fill="#979797"
            />
          </g>
          <circle cx="16.5" cy="9.89986" r="3.3" fill="#979797" />
          <circle cx="8.8" cy="17.5999" r="3.3" fill="#979797" />
          <circle cx="16.5" cy="25.2999" r="3.3" fill="#979797" />
          <defs>
            <clipPath id="clip0_192_1967">
              <rect width="26.4" height="35.2" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ paddingBottom: "3px" }}>필터</span>
        </div>
      </button>
      {/* Main Modal */}
      <MainModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <div style={{ flexGrow: "1" }}></div>
    </>
  );
};
export default Filter;
