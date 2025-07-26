import { useState, useRef, useEffect } from "react";
import Button from "../../button";
import style from './pomodoro.module.css'

export default function Pomodoro({ initialMinutes, initialSeconds, handlePomodoroChange, pomodoroOptions }) {
  const [totalSeconds, setTotalSeconds] = useState(
    initialMinutes * 60 + initialSeconds
  );
  const timerRef = useRef(null);

  useEffect(() => {
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
    stopTimer();
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
    <div className={style.pomodoro}>
      <label htmlFor='time-select'>Work/Break time</label>
            <select onChange={handlePomodoroChange} id='time-select'>
                {pomodoroOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
      <h3>{displayMinutes}:{displaySeconds}</h3>
      <div className={style['buttons-container']}>
      <Button onClick={startTimer}>Start Timer</Button>
      <Button onClick={stopTimer}>Stop Timer</Button>
      <Button onClick={resetTimer}>Reset Timer</Button>
      </div>
    </div>
  );
}