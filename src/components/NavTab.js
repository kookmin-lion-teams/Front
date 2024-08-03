import { useFindState, useActions } from "../store/Statefind";
import styles from "../CSS/Nav_.module.css";
const NavTab = ({ content }) => {
  const findState = useFindState();
  const { changeState } = useActions();
  // 클릭시 find 전역 상태 변경
  const clickHandler = (find) => {
    changeState(find);
  };

  return (
    <div
      className={`${findState === `${content}` ? styles.matchActive : ""}`}
      onClick={() => clickHandler(`${content}`)}
    >
      {content}
    </div>
  );
};

export default NavTab;
