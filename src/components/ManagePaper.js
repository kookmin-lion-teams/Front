import TabFrame from "./TabFrame";
import styles from "../CSS/ManagePaper.module.css";
import React, { useState } from "react";
import TabLine from "./TabLine";
const ManagePaper = () => {
  const [manage, setManage] = useState();

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.manageTab}>
        <div
          className={`${manage === `구독` ? styles.matchActive : ""}`}
          onClick={() => setManage("구독")}
        >
          구독 관리
        </div>
        <div
          className={`${manage === `예약` ? styles.matchActive : ""}`}
          onClick={() => setManage("예약")}
        >
          예약 관리
        </div>
      </div>
      <TabFrame>
        {manage === "구독" ? (
          <>
            <TabLine content="구독 중인 고객" />
          </>
        ) : (
          <>
            <TabLine content="확정된 예약" />
            <TabLine content="대기 중인 예약" />
            <TabLine content="이전 예약" />
          </>
        )}
      </TabFrame>
    </div>
  );
};
export default ManagePaper;
