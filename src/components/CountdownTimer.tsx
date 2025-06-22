
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-sm md:text-base font-montserrat font-semibold">
        <Clock className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        <span>⚡ Limited Time Offer Ends In:</span>
        <div className="flex space-x-1 md:space-x-2">
          <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs md:text-sm">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs md:text-sm">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs md:text-sm">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
