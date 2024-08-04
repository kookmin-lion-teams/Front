import React from "react";

const TimeDropdown = ({ content }) => {
  return (
    <div style={{ display: "flex" }}>
      <span>{content} 시간</span>
      <select name="time" defaultValue="">
        <option value="" disabled>
          -
        </option>
        {Array.from({ length: 13 }, (_, i) => 10 + i).map((hour) => (
          <option key={hour} value={hour}>
            {`${hour}:00`}
          </option>
        ))}
      </select>
      <span>시</span>
    </div>
  );
};

export default TimeDropdown;
