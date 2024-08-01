import Nav_ from "./Nav_";
import FilterModal from './Modal';
import styles from "../CSS/main.module.css";
import InfiniteScroll from "./InfiniteScroll";
import OptimizedKakaoMap from "./OptimizedKakaoMap";
import Modal from 'react-modal';
import { useState } from "react";

function Main() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Nav_></Nav_>

      {/* 필터 */}
      <div className={styles.filterContainer}>
        {/* 필터버튼 */}
        <button className={styles.filter} onClick={openModal}>
          <span style={{ width: '1.5rem' }}>►</span>
          <span>필터</span>
        </button>

        {/* Filter Modal */}
        <FilterModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        <div style={{ flexGrow: '1' }}></div>

        {/* 정렬버튼 */}
        <select className={styles.sort}>
          <option value={'기본순'}>기본순</option>
          <option value={'가격순'}>가격순</option>
          <option value={'최신순'}>최신순</option>
        </select>
      </div>

      {/* main 전체 프레임 */}
      <div className={styles.mainFrame}>
        <InfiniteScroll />
      </div>
    </>
  );
}

export default Main;
