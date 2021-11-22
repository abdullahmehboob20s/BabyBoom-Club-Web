import React, { useRef, useState, useEffect } from "react";

function CountDownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Nov 26, 2021 00:00:00 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timer ">
      <div className="time-wrap">
        <div className="teko timer-number fs-144px pink ">
          {/* {timer.hours} */}
          {timerHours}
        </div>
        <span className="fs-30px weight-6 dark-blue"> HRS</span>
      </div>
      <div className="timer-dot pink"></div>
      <div className="time-wrap">
        <span className="teko timer-number fs-144px pink ">{timerMinutes}</span>
        <span className="fs-30px weight-6 dark-blue">MIN</span>
      </div>
      <div className="timer-dot pink"></div>
      <div className="time-wrap">
        <span className="teko timer-number fs-144px pink ">{timerSeconds}</span>
        <span className="fs-30px weight-6 dark-blue">SEC</span>
      </div>
    </div>
  );
}

export default CountDownTimer;
