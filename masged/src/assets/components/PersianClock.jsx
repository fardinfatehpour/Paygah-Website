import React, { useState, useEffect } from "react";
import PersianDate from "persian-date";

function PersianClock() {
  const [time, setTime] = useState(new PersianDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new PersianDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function convertPersianNumbersToEnglish(persianNumber) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return persianNumber.replace(/[۰-۹]/g, function (match) {
      return englishNumbers[persianNumbers.indexOf(match)];
    });
  }

  return (
    <>
      <h2> {convertPersianNumbersToEnglish(time.format("HH:mm"))}</h2>
    </>
  );
}

export default PersianClock;
