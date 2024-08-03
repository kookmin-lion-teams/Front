const TabLine = ({ content }) => {
  return (
    <div
      style={{
        marginTop: "6vh",
        padding: "1rem",
        borderBottom: "1px solid #d9d9d9",
        width: "100%",
        fontWeight: "bold",
      }}
    >
      {content}
    </div>
  );
};

export default TabLine;
