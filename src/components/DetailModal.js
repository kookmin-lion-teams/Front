import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../CSS/DetailModal.module.css";
import Calendar from "react-calendar";
import PaymentButton from './Checkout'
import "react-calendar/dist/Calendar.css";

const DetailModal = ({ isOpen, onRequestClose }) => {
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleSelection = (e) => {
    setSelectedGoal(e.target.value);
  };


    const [level, setLevel] = useState(0);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedWeekday, setSelectedWeekday] = useState("");
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedgoal, setSelectedgoal] = useState('');
    const [selectedCareer, setSelectedCareer] = useState('');
    const [selectedTimeslot, setSelectedTimeslot] = useState('');

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

    const TimeList = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
    const [checktimebutton, setChecktimebutton] = useState(0);


    const GoalList = ['다이어트', '기초 체력 증진', '근력 강화', '벌크업', '체형 교정', '재활'];
    const [checkgoalbutton, setCheckgoalbutton] = useState(0);

    const CareerList = ['입문자/초급자', '중급자', '체형 교정'];
    const [checkcareerbutton, setCheckcareerbutton] = useState(0);


    const Timeslot = ['오전(10시 ~ 12시)', '오후(12시 ~ 18시)', '저녁(18시 ~ 22시)']
    const [checkTimeslot, setCheckTimeslot] = useState(0);

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

                                    <div className={styles.CalendarContainer}>
                                        <Calendar
                                            className={styles.Calendar}
                                            onChange={handleDateChange}
                                            tileDisabled={tileDisabled}
                                            minDate={calendarMinDate}
                                        />

                                    </div>
                                </div>,

                            1:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        희망하는 시간도 알려주세요
                                    </p>

                                    <p>{selectedYear}년 {selectedMonth}월 {selectedDay}일 ({selectedWeekday})</p>


                                    <div className={styles.TimeGrid}>
                                        {
                                            TimeList.map((t, idx) => {
                                                return (
                                                    <div onClick={() => {
                                                        setSelectedTime(t)
                                                        setChecktimebutton(idx);

                                                        console.log(checktimebutton)
                                                    }} style={{

                                                        border: checktimebutton == idx
                                                            ? 'solid 3px black' : null
                                                    }}> {t}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>,

                            2:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        어떤 목적으로 운동하시나요?
                                    </p>

                                    <div className={styles.WhichGoalGrid}>
                                        {
                                            GoalList.map((t, idx) => {
                                                return (
                                                    <div onClick={() => {
                                                        setSelectedGoal(t)
                                                        setCheckgoalbutton(idx);
                                                    }} style={{

                                                        border: checkgoalbutton == idx
                                                            ? 'solid 3px black' : null
                                                    }}> {t}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>,

                            3:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        헬스 경력은 어느 정도신가요?
                                    </p>

                                    <div className={styles.CareerGrid}>
                                        {
                                            CareerList.map((t, idx) => {
                                                return (
                                                    <div onClick={() => {
                                                        setSelectedCareer(t)
                                                        setCheckcareerbutton(idx);
                                                    }} style={{
                                                        border: checkcareerbutton == idx
                                                            ? 'solid 3px black' : null
                                                    }}> {t}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>,

                            4:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        어느 시간대에 운동하시길 원하시나요?
                                    </p>

                                    <div className={styles.TimeslotGrid}>
                                        {
                                            Timeslot.map((t, idx) => {
                                                return (
                                                    <div onClick={() => {
                                                        setSelectedTimeslot(t)
                                                        setCheckTimeslot(idx);
                                                    }} style={{
                                                        border: checkTimeslot == idx
                                                            ? 'solid 3px black' : null
                                                    }}> {t}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>,

                            5:
                                <div className={styles.GoalContainer}>
                                    <p className={styles.GoalTitle}>
                                        예약정보를 다시 한 번 확인해주세요
                                        <p>파트너가 예약 일정을 위해 연락드릴거에요</p>
                                    </p>
                                    <div className={styles.Content}>
                                        <p>예약자 정보</p>
                                        <div>
                                            <span>이름</span>
                                            <span>|</span>
                                            <span>홍길동</span>
                                            <span>휴대폰 번호</span>
                                            <span>|</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                    </div>

                                    <div className={styles.Content}>
                                        <p>예약 일시</p>
                                        <div>
                                            <span>날짜</span>
                                            <span>|</span>
                                            <span>{selectedYear}.{selectedMonth}.{selectedDay}</span>
                                            <span>예약시간</span>
                                            <span>|</span>
                                            <span>{selectedTime}</span>
                                        </div>
                                    </div>

                                    <div className={styles.payment}>
                                        <div>결제금액</div>
                                        <div>20000원</div>
                                    </div>
                                </div>


                        }[level]
                    }
                </div>



                <div className={styles.footer}>
                    {
                        level != 0
                            ?
                            <button onClick={() => {
                                if (level >= 0) {
                                    setLevel(level - 1)
                                }
                            }} style={{background : 'white', color : 'black'}}>이전</button>
                            : null
                    }
                    {
                        level < 5
                            ? <button onClick={() => {
                                setLevel(level + 1) 
                            }}>다음</button>

                            : null
                    }
                    {
                        level == 5
                            ? <PaymentButton></PaymentButton>
                            : null
                    }
                </div>
            </div>
        </Modal >
    );

};

export default DetailModal;
