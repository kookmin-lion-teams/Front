import TabFrame from "./TabFrame";
import TabLine from "./TabLine";
import styles from "../CSS/ManagePaper.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ManagePaper = () => {
  const [pid] = useState(sessionStorage.getItem("pid"));
  const [expert1, setExpert1] = useState(); //expert1
  const [expert2, setExpert2] = useState(); //expert2
  const [gname, setGname] = useState(); //헬스장 이름
  const [intro, setIntro] = useState(); //소개
  const [IG, setIG] = useState(); //인스타
  const [eprice, setEprice] = useState(); //1회 가격
  const [price, setPrice] = useState(); //정기 가격
  const [closedDay, setClosedDay] = useState(); //안하는 요일
  const [weekday_start_time, setWeekday_start_time] = useState(); //평일 시작 시간
  const [weekday_end_time, setWeekday_end_time] = useState(); //평일 끝 시간
  const [weekend_start_time, setWeekend_start_time] = useState(); //주말 시작 시간
  const [weekend_end_time, setWeekend_end_time] = useState(); //주말 끝 시간
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("back/api/partner/myinfo", {
          params: { pid },
        });
        console.log(response.data.partner_info);
        setExpert1();
        setExpert2();
        setGname();
        setIntro();
        setIG();
        setEprice();
        setPrice();
        setClosedDay();
        setWeekday_start_time();
        setWeekday_end_time();
        setWeekend_start_time();
        setWeekend_end_time();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <TabFrame>
      <TabLine content="파트너 기본 정보" />
      <div className={styles.TabLineUnderContentContainer}>
        <div className={styles.rightBorder}>이름</div>
        <div style={{ padding: "0px 1rem" }}>
          {sessionStorage.getItem("name")}
        </div>
        <div className={styles.rightBorder}>헬스장*</div>
        <div style={{ padding: "0px 1rem" }}>{gname ? gname : "-"}</div>

        <div className={styles.rightBorder}>인스타그램</div>
        <div style={{ padding: "0px 1rem" }}>{IG ? IG : "-"}</div>
      </div>
      <TabLine content="파트너 소개글*" />
      <div
        style={{
          width: "100%",
          height: "150px",
          overflowY: "auto",
          border: "1px solid #979797",
          borderRadius: "10px",
        }}
      >
        {intro ? intro : "내용을 입력해주세요."}
      </div>
      <TabLine content="Expert" />
      <div className={styles.TabLineUnderContentContainer}>
        <label htmlFor="cb_diet">
          <input type="checkbox" id="cb_diet"></input>
          다이어트
        </label>
        <label htmlFor="cb_stamina">
          <input type="checkbox" id="cb_stamina"></input>
          체력증진
        </label>
        <label htmlFor="cb_strength">
          <input type="checkbox" id="cb_strength"></input>
          근력강화
        </label>
        <label htmlFor="cb_bulk">
          <input type="checkbox" id="cb_bulk"></input>
          벌크업
        </label>
        <label htmlFor="cb_bodyshape">
          <input type="checkbox" id="cb_bodyshape"></input>
          체형교정
        </label>
        <label htmlFor="cb_rehabilitation">
          <input type="checkbox" id="cb_rehabilitation"></input>
          재활
        </label>
      </div>
      <TabLine content="레슨 가능 시간" />
      <TabLine content="가격 정보" />
      <TabLine content="사진" />
    </TabFrame>
  );
};
export default ManagePaper;
