
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const StickyBottomBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 42,
    seconds: 55
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
    <div className="fixed bottom-0 left-0 right-0 bg-zerobox-black border-t-2 border-neon-green/30 backdrop-blur-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Countdown Timer */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <Clock className="w-4 h-4 text-neon-green animate-pulse" />
          <span className="text-off-white font-montserrat font-semibold">
            ⏳ {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')} left
          </span>
        </div>
        
        {/* Right side - CTA Button */}
        <a
          href="https://spf.bio/DUdNU"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-green hover:bg-green-400 text-zerobox-black font-montserrat font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
        >
          Get Now for ₹199
        </a>
      </div>
    </div>
  );
};

export default StickyBottomBar;
