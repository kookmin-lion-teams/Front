import { useLoginState } from "../store/StateLogin";
import { useFindState, useActions } from "../store/Statefind";
import styles from "../CSS/Nav_.module.css";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Nav_() {
  const navigate = useNavigate();
  // 전역상태 : 로그인
  const loginId = useLoginState();
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
          {loginId === "" ? (
            <>
              <div onClick={() => handleClicktoNav("signin")}>로그인</div>
              <div onClick={() => handleClicktoNav("signup")}>회원가입</div>
            </>
          ) : (
            <p>반갑습니다! {loginId}님!</p>
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
          매칭내역
        </div>
      </div>
    </nav>
  );
}
