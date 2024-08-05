import React from "react";

const TimeDropdown = ({ content, name, value, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <label
        htmlFor={name}
        style={{ marginRight: "10px", fontSize: "14px", color: "#333" }}
      >
        {content} 시간
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
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
          <option key={hour} value={`${hour}:00`}>
            {`${hour}:00`}
          </option>
        ))}
      </select>
      <span style={{ fontSize: "14px", color: "#333" }}>시</span>
    </div>
  );
};

export default TimeDropdown;
