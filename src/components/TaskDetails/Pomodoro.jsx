import { useState, useRef, useEffect } from "react";
import Button from "../button";

export default function Pomodoro({ initialMinutes, initialSeconds }) {
  const [totalSeconds, setTotalSeconds] = useState(
    initialMinutes * 60 + initialSeconds
  );
  const timerRef = useRef(null);

  useEffect(() => {
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
    stopTimer(); // Optional: auto-stop timer when duration changes
  }, [initialMinutes, initialSeconds]);

  const startTimer = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTotalSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
  };

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div>
      <h3>{displayMinutes}:{displaySeconds}</h3>
      <Button onClick={startTimer}>Start Timer</Button>
      <Button onClick={stopTimer}>Stop Timer</Button>
      <Button onClick={resetTimer}>Reset Timer</Button>
    </div>
  );
}