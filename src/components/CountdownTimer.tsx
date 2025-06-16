
interface CountdownTimerProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const CountdownTimer = ({ timeLeft }: CountdownTimerProps) => {
  return (
    <span className="inline-flex items-center space-x-1 font-mono font-bold">
      <span className="bg-white/30 px-3 py-1 rounded-lg text-sm border border-white/20 animate-pulse">
        {String(timeLeft.hours).padStart(2, '0')}h
      </span>
      <span className="text-white/80">:</span>
      <span className="bg-white/30 px-3 py-1 rounded-lg text-sm border border-white/20 animate-pulse">
        {String(timeLeft.minutes).padStart(2, '0')}m
      </span>
      <span className="text-white/80">:</span>
      <span className="bg-white/30 px-3 py-1 rounded-lg text-sm border border-white/20 animate-bounce">
        {String(timeLeft.seconds).padStart(2, '0')}s
      </span>
    </span>
  );
};

export default CountdownTimer;
