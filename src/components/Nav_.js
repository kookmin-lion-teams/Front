import { useFindState, useActions } from "../store/Statefind";
import styles from "../CSS/Nav_.module.css";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Nav_() {
  const navigate = useNavigate();
  const [name] = useState(sessionStorage.getItem("name"));
  useEffect(() => {
    console.log(name);
  }, [name]);
  // 전역상태 : find
  const { changeState } = useActions();
  const findState = useFindState();
  // 클릭시 이동 :signup, signin
  const handleClicktoNav = (where) => {
    navigate(`/${where}`);
  };
  // 클릭시 find 전역 상태 변경

  const clickHandler = (find) => {
    changeState(find);
  };
  return (
    <nav className={styles.navFrame}>
      <div className={styles.navLevel1}>
        <div className={styles.logoBox}></div>
        <div className={styles.searchBox}>
          <SearchBar />
        </div>
        <div className={styles.registerBox}>
          {name ? (
            <p>반갑습니다! {name}님!</p>
          ) : (
            <>
              <div onClick={() => handleClicktoNav("signin")}>로그인</div>
              <div onClick={() => handleClicktoNav("signup")}>회원가입</div>
            </>
          )}
        </div>
      </div>
      {/* 파트너 찾기 , 헬스장으로 찾기 , 매칭 내역 */}
      <div className={styles.navLevel2}>
        <div
          className={`${findState === "파트너 찾기" ? styles.matchActive : ""}`}
          onClick={() => clickHandler("파트너 찾기")}
        >
          파트너 찾기
        </div>
        <div
          className={`${
            findState === "헬스장으로 찾기" ? styles.matchActive : ""
          }`}
          onClick={() => clickHandler("헬스장으로 찾기")}
        >
          헬스장으로 찾기
        </div>
        <div
          className={`${findState === "매칭 내역" ? styles.matchActive : ""}`}
          onClick={() => clickHandler("매칭 내역")}
        >
          매칭 내역
        </div>
      </div>
    </nav>
  );
}
