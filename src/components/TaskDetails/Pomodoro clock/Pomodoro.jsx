import { useState, useRef, useEffect } from "react";
import Button from "../../button";
import style from './pomodoro.module.css'

export default function Pomodoro({ initialMinutes, initialSeconds, handlePomodoroChange, pomodoroOptions }) {
  // Total time in seconds for the timer
  const [totalSeconds, setTotalSeconds] = useState(
    initialMinutes * 60 + initialSeconds
  );
  // Ref to store the interval ID
  const timerRef = useRef(null);

  // Reset timer when initial time props change
  useEffect(() => {
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
    stopTimer();
  }, [initialMinutes, initialSeconds]);

  // Start the countdown timer
  const startTimer = () => {
    // Prevent multiple timers running
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTotalSeconds(prev => {
        // Stop timer when it reaches 0
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Stop the timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Reset timer to initial time
  const resetTimer = () => {
    stopTimer();
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
  };

  // Calculate display values
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // Add leading zeros for display
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className={style.pomodoro}>
      {/* Dropdown to select timer duration */}
      <label htmlFor='time-select'>Work/Break time</label>
            <select onChange={handlePomodoroChange} id='time-select'>
                {pomodoroOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
      {/* Timer display */}
      <h3>{displayMinutes}:{displaySeconds}</h3>
      {/* Timer control buttons */}
      <div className={style['buttons-container']}>
      <Button onClick={startTimer}>Start Timer</Button>
      <Button onClick={stopTimer}>Stop Timer</Button>
      <Button onClick={resetTimer}>Reset Timer</Button>
      </div>
    </div>
  );
}
