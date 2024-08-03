import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../CSS/DetailModal.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DetailModal = ({ isOpen, onRequestClose }) => {
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleSelection = (e) => {
    setSelectedGoal(e.target.value);
  };

  let [level, setLevel] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedWeekday, setSelectedWeekday] = useState("");

  useEffect(() => {
    console.log(selectedDay, selectedMonth, selectedYear, selectedWeekday);
  }, [selectedDay, selectedMonth, selectedYear, selectedWeekday]);

  const handleDateChange = (date) => {
    setSelectedYear(date.getFullYear());
    setSelectedMonth(date.getMonth() + 1);
    setSelectedDay(date.getDate());
    setSelectedWeekday(
      date.toLocaleDateString("ko-KR", { weekday: "short" }).charAt(0)
    );
  };

  const tileDisabled = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return view === "month" && date < today;
  };

  const calendarMinDate = new Date();

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
              0: (
                <div className={styles.GoalContainer}>
                  <p className={styles.GoalTitle}>
                    1회 체험을 희망하는 날짜를 선택해주세요
                  </p>

                  <div className={styles.CalendarContainer}>
                    <Calendar
                      className={styles.Calendar}
                      onChange={handleDateChange}
                      tileDisabled={tileDisabled}
                      minDate={calendarMinDate}
                    />
                  </div>
                </div>
              ),

              1: (
                <div className={styles.GoalContainer}>
                  <p className={styles.GoalTitle}>희망하는 시간도 알려주세요</p>

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
                </div>
              ),
            }[level]
          }
        </div>

        <div className={styles.footer}>
          {level != 0 ? (
            <button
              onClick={() => {
                if (level >= 0) {
                  setLevel(level - 1);
                }
              }}
            >
              이전
            </button>
          ) : null}
          <button
            onClick={() => {
              setLevel(level + 1);
            }}
          >
            다음
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
