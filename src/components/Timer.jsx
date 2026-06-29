import { useState, useEffect } from "react";

function Timer({ onTimeUp, resetTimer, stopped }) {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    setSeconds(15);
  }, [resetTimer]);

  useEffect(() => {
    if (stopped) return;
    if (seconds === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, stopped]);

  return (
    <div className={`timer ${seconds <= 5 && !stopped ? "danger" : ""}`}>
      <span>{seconds}s</span>
    </div>
  );
}

export default Timer;
