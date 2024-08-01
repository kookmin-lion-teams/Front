import { useLoginState } from "../store/StateLogin";
import styles from "../CSS/Nav_.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { useNavigate } from "react-router-dom";

export default function Nav_() {
  const navigate = useNavigate();

  const loginId = useLoginState();
  const handleClick = (where) => {
    navigate(`/${where}`);
  };
  return (
    <nav className={styles.navFrame}>
      <div className={styles.navLevel1}>
        <div className={styles.logoBox}></div>
        <div className={styles.searchBox}>
          <SearchBar />
        </div>
        <div className={styles.registerBox}>
          <div onClick={() => handleClick("signin")}>로그인</div>
          <div onClick={() => handleClick("signup")}>회원가입</div>
        </div>
      </div>
      {/* 파트너 찾기 헬스장으로 찾기 매칭 내역 */}
      <div className={styles.navLevel2}>
        <div>파트너 찾기</div>
        <div>헬스장으로 찾기</div>
        <div>매칭내역</div>
      </div>
    </nav>
  );
}
