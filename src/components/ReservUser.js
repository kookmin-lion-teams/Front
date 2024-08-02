import styles from "../CSS/ReservUser.module.css";
import ReservLine from "./ReservLine";
export default function ReservUser() {
  return (
    <div className={styles.reservFrame}>
      <ReservLine content="확정된 예약" />
      <ReservLine content="대기 중인 예약" />
      <ReservLine content="이전 예약" />
    </div>
  );
}
