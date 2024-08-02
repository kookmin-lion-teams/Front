import React, { useState } from "react";
import styles from "../CSS/Toggle.module.css"; // CSS 모듈 파일

function Toggle({ left, right, onToggle }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked); // 토글 상태 변경 시 콜백 함수 호출
  };

  return (
    <label className={styles.toggleLabel}>
      <input
        type="checkbox"
        className={styles.toggleCheckbox}
        checked={isChecked}
        onChange={handleChange}
      />
      <div className={styles.toggleSwitch}></div>
      <span className={styles.toggleText}>{isChecked ? left : right}</span>
    </label>
  );
}

export default Toggle;
