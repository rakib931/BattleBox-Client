import { useEffect, useState } from "react";

const Countdown = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (!deadline) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endTime = new Date(deadline).getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        setEnded(true);
        setTimeLeft("Contest Ended");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="text-md font-semibold">
      {ended ? (
        <span className="text-red-500">🚫 Contest Ended</span>
      ) : (
        <span className="text-green-600">⏳ {timeLeft}</span>
      )}
    </div>
  );
};

export default Countdown;
