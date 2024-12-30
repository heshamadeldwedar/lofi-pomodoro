import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialValue: number;
  onExpire?: () => void;
  running?: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialValue, onExpire, running }) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    if (time > 0 && running) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      if (onExpire) {
        onExpire();
      }
    }
  }, [time, onExpire, running]);

  return (
    <div className="flex justify-center align-center text-8xl" >
      <p>{formatTime(time)}</p>
    </div>
  );
};

const formatTime = (time: number) => {
  return `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;
};

export default Timer;