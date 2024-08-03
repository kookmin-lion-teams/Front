const TabLine = ({ content }) => {
  return (
    <div
      style={{
        marginTop: "8vh",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid #d9d9d9",
        width: "100%",
        fontWeight: "bold",
        marginBottom: "0.75rem",
      }}
    >
      {content}
    </div>
  );
};

export default TabLine;
