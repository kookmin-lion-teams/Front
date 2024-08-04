import TabFrame from "./TabFrame";
import TabLine from "./TabLine";
import styles from "../CSS/ManagePaper.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TimeDropdown from "./TimeDropdown";

const ManagePaper = () => {
  const [pid] = useState(sessionStorage.getItem("pid"));
  const [partnerInfo, setPartnerInfo] = useState({
    expert1: "",
    expert2: "",
    gname: "",
    intro: "",
    IG: "",
    eprice: "",
    price: "",
    closedDay: [],
    weekday_start_time: "",
    weekday_end_time: "",
    weekend_start_time: "",
    weekend_end_time: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("back/api/partner/myinfo", {
          params: { pid },
        });
        const data = response.data.partner_info;
        setPartnerInfo({
          expert1: data.expert1 || "",
          expert2: data.expert2 || "",
          gname: data.gname || "",
          intro: data.intro || "",
          IG: data.IG || "",
          eprice: data.eprice || "",
          price: data.price || "",
          closedDay: data.closedDay || [],
          weekday_start_time: data.weekday_start_time || "",
          weekday_end_time: data.weekday_end_time || "",
          weekend_start_time: data.weekend_start_time || "",
          weekend_end_time: data.weekend_end_time || "",
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pid]);

  const name = sessionStorage.getItem("name");

  return (
    <TabFrame>
      <TabLine content="파트너 기본 정보" />
      <div className={styles.TabLineUnderContentContainer}>
        <div className={styles.rightBorder}>이름</div>
        <div style={{ padding: "0px 1rem" }}>{name}</div>
        <div className={styles.rightBorder}>헬스장*</div>
        <div style={{ padding: "0px 1rem" }}>{partnerInfo.gname || "-"}</div>
        <div className={styles.rightBorder}>인스타그램</div>
        <div style={{ padding: "0px 1rem" }}>{partnerInfo.IG || "-"}</div>
      </div>
      <TabLine content="파트너 소개글*" />
      <input
        type="textarea"
        style={{
          width: "100%",
          height: "150px",
          overflowY: "auto",
          border: "1px solid #979797",
          borderRadius: "10px",
        }}
        value={`${partnerInfo.intro || "내용을 입력해주세요."}`}
      ></input>
      <TabLine content="Expert" />
      <div className={styles.TabLineUnderContentContainer}>
        {["다이어트", "체력증진", "근력강화", "벌크업", "체형교정", "재활"].map(
          (label, index) => (
            <label htmlFor={`cb_${index}`} key={index}>
              <input type="checkbox" id={`cb_${index}`} />
              {label}
            </label>
          )
        )}
      </div>
      <TabLine content="레슨 가능 시간*" />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {["평일", "주말"].map((dayType, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div className={styles.rightBorder}>{dayType}</div>
            <div style={{ padding: "0px 1rem", display: "flex", gap: "10px" }}>
              <TimeDropdown content="시작" />
              <TimeDropdown content="종료" />
            </div>
          </div>
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className={styles.rightBorder}>휴무일</div>
          <div style={{ padding: "0px 1rem", display: "flex", gap: "10px" }}>
            {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
              <label htmlFor={`cb_${day}`} key={index}>
                <input type="checkbox" id={`cb_${day}`} />
                {day}
              </label>
            ))}
          </div>
        </div>
      </div>
      <TabLine content="가격 정보*" />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", display: "flex" }}>
          <div className={styles.rightBorder}>정상가</div>
          <div style={{ padding: "0px 1rem" }}>
            <input type="text"></input>원
          </div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div className={styles.rightBorder}>1회 체험가</div>
          <div style={{ padding: "0px 1rem" }}>
            <input type="text"></input>원{" "}
            <small>*1회 체험가는 20,000원 이하로만 설정 가능합니다.</small>
          </div>
        </div>
      </div>
      <TabLine content="사진" />
      <div className={styles.fileInputContainer}>
        <label className={styles.fileInputLabel} htmlFor="small_size">
          사진 추가 하기
        </label>
        <input className={styles.fileInput} id="small_size" type="file" />
      </div>
      <div style={{ height: "150px", width: "100%", overflowY: "auto" }}></div>
      {/* ~버튼~ */}

      <div
        style={{
          borderTop: "1px solid #979797",
          padding: "5vh 0px",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{
            width: "21rem",
            height: "4rem",
            borderRadius: "0.5rem",
            backgroundColor: "white",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          수정하기
        </button>
        <button
          style={{
            width: "21rem",
            height: "4rem",
            borderRadius: "0.5rem",
            backgroundColor: "black",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          등록하기
        </button>
      </div>
    </TabFrame>
  );
};

export default ManagePaper;
