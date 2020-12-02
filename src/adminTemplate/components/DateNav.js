import React, { useState, useEffect } from "react";
import "../../App.css";

const DateNav = () => {
  const [clickCount, setClickCount] = useState(0);
  const formatDate = (count) => {
    const dateObj = new Date(),
      dayNames = ["Ned", "Pon", "Uto", "Sri", "Cet", "Pet", "Sub"];
    if (clickCount !== 0) {
      console.log("dohvaceno");
      dateObj.setDate(new Date().getDate() + count);
    }

    return {
      day: dateObj.getDate(),
      month: dateObj.getMonth() + 1,
      dayName: dayNames[dateObj.getDay()],
    };
  };

  const [selectedDay, setSelectedDay] = useState(formatDate());

  useEffect(() => {
    setSelectedDay(formatDate(clickCount));
  }, [clickCount]);

  const dayFoward = () => {
    setClickCount((count) => count + 1);
  };

  const dayBack = () => {
    setClickCount((count) => count - 1);
  };
  return (
    <div className="dateNav">
      <span className="material-icons timeArrow" onClick={dayBack}>
        arrow_back_ios
      </span>
      {`${selectedDay.dayName}, ${selectedDay.day}/${selectedDay.month}`}
      <span className="material-icons timeArrow" onClick={dayFoward}>
        arrow_forward_ios
      </span>
    </div>
  );
};

export default DateNav;
