import { useActions } from "../store/Statefind";
import styles from "../CSS/Nav_.module.css";
import SearchBar from "./SearchBar";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavTab from "./NavTab";

export default function Nav_() {
  const navigate = useNavigate();
  const location = useLocation();
  // 세션스토리지 값 사용하기
  const [name] = useState(sessionStorage.getItem("name"));
  const [role] = useState(sessionStorage.getItem("role"));

  // 전역상태 : find
  const { changeState } = useActions();

  // role이 결정되면 기본 find값이 바뀝니다.
  useEffect(() => {
    changeState(role === "1" ? "공고 관리" : "파트너 찾기");
  }, [role, changeState]);

  // 클릭시 이동 :signup, signin
  const handleClicktoNav = (where) => {
    navigate(`/${where}`);
  };

  return (
    <nav className={styles.navFrame}>
      <div className={styles.navLevel1}>
        <div
          className={styles.logoBox}
          onClick={() => {
            navigate("/");
          }}
        ></div>
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
      {location.pathname === "/" && (
        <>
          {/* find 탭 관리 - role이 Partner일 때와 User일 때 보이는 메뉴가 다릅니다. */}
          {role === "1" ? (
            <div className={styles.navLevel2}>
              <NavTab content="공고 관리" />
              <NavTab content="내 고객 관리" />
            </div>
          ) : (
            <div className={styles.navLevel2}>
              <NavTab content="파트너 찾기" />
              <NavTab content="헬스장으로 찾기" />
              <NavTab content="예약 내역" />
              <NavTab content="구독 내역" />
            </div>
          )}
        </>
      )}
    </nav>
  );
}
