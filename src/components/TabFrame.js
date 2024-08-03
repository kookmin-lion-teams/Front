const TabFrame = ({ children }) => {
  return (
    <div
      style={{
        margin: "0vh 6vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default TabFrame;
