import { useTimerStore } from "./store/useTimerStore";
import { useEffect, useState } from "react";

export const TimerList = () => {
  const timers = useTimerStore((s) => s.timers);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Timers</h3>

      {timers.map((t) => {
        const remaining = Math.max(0, t.endTime - now);
        const seconds = Math.ceil(remaining / 1000);

        return (
          <div key={t.id}>
            {t.label}: {seconds}s
          </div>
        );
      })}
    </div>
  );
};