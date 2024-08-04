import TabFrame from "./TabFrame";
import TabLine from "./TabLine";
import styles from "../CSS/ManagePaper.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TimeDropdown from "./TimeDropdown";

const ManagePaper = () => {
  const [name] = useState(sessionStorage.getItem("name"));
  const [pid] = useState(sessionStorage.getItem("pid"));
  const [isInfo, setIsInfo] = useState(false);
  const [partnerInfo, setPartnerInfo] = useState({
    expert1: "",
    expert2: "",
    gname: "",
    intro: "",
    IG: "",
    eprice: "",
    price: "",
    closed_days: {
      MON: false,
      TUE: false,
      WED: false,
      THU: false,
      FRI: false,
      SAT: false,
      SUN: false,
    },
    weekday_start_time: "",
    weekday_end_time: "",
    weekend_start_time: "",
    weekend_end_time: "",
  });

  const [selectedExperts, setSelectedExperts] = useState([]);

  useEffect(() => {
    console.log(partnerInfo);
  }, [partnerInfo]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("back/api/partner/view_myinfo", {
          params: { pid },
        });
        const data = response.data.partner_info;

        console.log("공고: ", data, data.expert1);
        setIsInfo(data.expert1 ? true : false);
        setPartnerInfo({
          expert1: data.EXPERT1 || "",
          expert2: data.EXPERT2 || "",
          gname: data.GNAME || "",
          intro: data.INTRO || "",
          IG: data.IG || "",
          eprice: data.EPRICE || "",
          price: data.PRICE || "",
          closed_days: data.closed_days || {},
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const endpoint = isInfo
        ? "back/api/partner/update_myinfo"
        : "back/api/partner/write_myinfo";

      const response = await axios.post(
        endpoint,
        {
          intro: partnerInfo.intro,
          eprice: partnerInfo.eprice,
          price: partnerInfo.price,
          expert1: partnerInfo.expert1,
          expert2: partnerInfo.expert2,
          gname: partnerInfo.gname,
          start_time_weekday: partnerInfo.weekday_start_time,
          end_time_weekday: partnerInfo.weekday_end_time,
          start_time_weekend: partnerInfo.weekend_start_time,
          end_time_weekend: partnerInfo.weekend_end_time,
          closed_days: partnerInfo.closed_days,
          ig: partnerInfo.IG,
          img: null,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    let day = id;
    if (id === "월") day = "MON";
    else if (id === "화") day = "TUE";
    else if (id === "수") day = "WED";
    else if (id === "목") day = "THU";
    else if (id === "금") day = "FRI";
    else if (id === "토") day = "SAT";
    else if (id === "일") day = "SUN";

    setPartnerInfo((prevInfo) => ({
      ...prevInfo,
      closed_days: {
        ...prevInfo.closed_days,
        [day]: checked,
      },
    }));
  };

  const handleTimeChange = (name, value) => {
    setPartnerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleExpertChange = (e) => {
    const { id, checked } = e.target;
    const expertLabel = e.target.nextSibling.textContent;

    let updatedExperts = [...selectedExperts];

    setSelectedExperts(updatedExperts);

    if (updatedExperts.length > 0) {
      setPartnerInfo((prevInfo) => ({
        ...prevInfo,
        expert1: updatedExperts[0] || "",
        expert2: updatedExperts[1] || "",
      }));
    }
  };

  return (
    <TabFrame>
      <form onSubmit={handleSubmit}>
        <TabLine content="파트너 기본 정보" />
        <div className={styles.TabLineUnderContentContainer}>
          <div className={styles.rightBorder}>이름</div>
          <div style={{ padding: "0px 1rem" }}>
            <input
              type="text"
              id="name"
              aria-label="name"
              className={styles.cInput}
              value={name}
              disabled
              readOnly
            />
          </div>
          <div className={styles.rightBorder}>헬스장*</div>
          <div style={{ padding: "0px 1rem" }}>
            <input
              type="text"
              id="gname"
              name="gname"
              aria-label="gname"
              className={styles.cInput}
              value={partnerInfo.gname}
              onChange={handleInputChange}
              disabled
              readOnly
            />
            <button
              style={{
                marginLeft: "10px",
                padding: "0.25rem 0.75rem",
                border: "1px solid #979797",
                borderRadius: "5px",
              }}
            >
              선택
            </button>
          </div>
          <div className={styles.rightBorder}>인스타그램</div>
          <div style={{ padding: "0px 1rem" }}>
            <input
              type="text"
              name="IG"
              aria-label="IG"
              className={styles.cInput}
              value={partnerInfo.IG || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <TabLine content="파트너 소개글*" />
        <textarea
          name="intro"
          className={styles.cInput}
          style={{
            width: "100%",
            height: "150px",
            overflowY: "auto",
            border: "1px solid #979797",
            borderRadius: "10px",
          }}
          value={partnerInfo.intro || ""}
          onChange={handleInputChange}
        />
        <TabLine content="Expert" />
        <div className={styles.TabLineUnderContentContainer}>
          {[
            "다이어트",
            "체력증진",
            "근력강화",
            "벌크업",
            "체형교정",
            "재활",
          ].map((label, index) => (
            <label
              htmlFor={`cb_${index}`}
              key={index}
              style={{ paddingLeft: "1vw" }}
            >
              <input
                type="checkbox"
                id={`cb_${index}`}
                className={styles.checkbox}
                onChange={handleExpertChange}
              />
              {label}
            </label>
          ))}
        </div>
        <TabLine content="레슨 가능 시간*" />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
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
              <div
                style={{ padding: "0px 1rem", display: "flex", gap: "10px" }}
              >
                <TimeDropdown
                  content="시작"
                  name={`${dayType}_start_time`}
                  value={
                    partnerInfo[`${dayType.toLowerCase()}_start_time`] || ""
                  }
                  onChange={(e) =>
                    handleTimeChange(
                      `${dayType.toLowerCase()}_start_time`,
                      e.target.value
                    )
                  }
                />
                <TimeDropdown
                  content="종료"
                  name={`${dayType}_end_time`}
                  value={partnerInfo[`${dayType.toLowerCase()}_end_time`] || ""}
                  onChange={(e) =>
                    handleTimeChange(
                      `${dayType.toLowerCase()}_end_time`,
                      e.target.value
                    )
                  }
                />
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
                <div key={index} className={styles.cbContainer}>
                  <input
                    type="checkbox"
                    id={day}
                    className={styles.cb}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={day} className={styles.checkboxLabel}>
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TabLine content="가격 정보*" />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div className={styles.rightBorder}>정상가</div>
            <div style={{ padding: "0px 1rem" }}>
              <input
                type="text"
                name="price"
                value={partnerInfo.price || ""}
                className={styles.cInput}
                onChange={handleInputChange}
              />
              <span style={{ paddingLeft: "0.5rem" }}>원</span>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div className={styles.rightBorder}>1회 체험가</div>
            <div style={{ padding: "0px 1rem" }}>
              <input
                type="text"
                name="eprice"
                className={styles.cInput}
                value={partnerInfo.eprice || ""}
                onChange={handleInputChange}
              />
              <span style={{ paddingLeft: "0.5rem" }}>원</span>
              <small style={{ paddingLeft: "0.75rem" }}>
                *1회 체험가는 20,000원 이하로만 설정 가능합니다.
              </small>
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
        <div
          style={{ height: "150px", width: "100%", overflowY: "auto" }}
        ></div>
        {/* 버튼 */}
        <div
          style={{
            borderTop: "1px solid #979797",
            padding: "5vh 0px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {!isInfo ? (
            <button
              type="submit"
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
          ) : (
            <button
              type="button"
              style={{
                width: "21rem",
                height: "4rem",
                borderRadius: "0.5rem",
                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
              }}
              onClick={handleSubmit}
            >
              수정하기
            </button>
          )}
        </div>
      </form>
    </TabFrame>
  );
};

export default ManagePaper;
