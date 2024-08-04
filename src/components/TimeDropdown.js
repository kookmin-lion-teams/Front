import React from "react";

const TimeDropdown = ({ content }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <label
        htmlFor="time"
        style={{ marginRight: "10px", fontSize: "14px", color: "#333" }}
      >
        {content} 시간
      </label>
      <select
        name="time"
        id="time"
        defaultValue=""
        style={{
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "8px",
          fontSize: "14px",
          color: "#333",
          marginRight: "10px",
        }}
      >
        <option value="" disabled>
          -
        </option>
        {Array.from({ length: 13 }, (_, i) => 10 + i).map((hour) => (
          <option key={hour} value={hour}>
            {`${hour}:00`}
          </option>
        ))}
      </select>
      <span style={{ fontSize: "14px", color: "#333" }}>시</span>
    </div>
  );
};

export default TimeDropdown;
