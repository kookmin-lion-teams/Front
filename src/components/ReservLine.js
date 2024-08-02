export default function ReservLine({ content }) {
  return (
    <div
      style={{
        padding: "1rem",
        borderBottom: "1px solid #d9d9d9",
        width: "100%",
        fontWeight: "bold",
      }}
    >
      {content}
    </div>
  );
}
