import TabFrame from "./TabFrame";
import TabLine from "./TabLine";
const ManageUser = () => {
  return (
    <TabFrame>
      <TabLine content="파트너 기본 정보" />
      <TabLine content="파트너 소개글" />
      <TabLine content="Expert" />
      <TabLine content="레슨 가능 시간" />
      <TabLine content="가격 정보" />
      <TabLine content="사진" />
    </TabFrame>
  );
};
export default ManageUser;
