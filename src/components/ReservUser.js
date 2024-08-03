import styles from "../CSS/ReservUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
export default function ReservUser() {
  return (
    <>
      <TabFrame>
        <TabLine content="확정된 예약" />
        <TabLine content="대기 중인 예약" />
        <TabLine content="이전 예약" />
      </TabFrame>
    </>
  );
}
