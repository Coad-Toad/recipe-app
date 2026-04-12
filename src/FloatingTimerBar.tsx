import { useTimerStore } from "./store/useTimerStore";
import { useEffect, useState } from "react";

export const FloatingTimerBar = () => {
  const timers = useTimerStore((s) => s.timers);
  const markComplete = useTimerStore((s) => s.markComplete);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    timers.forEach((t) => {
      if (!t.completed && t.endTime <= now) {
        markComplete(t.id);
      }
    });
  }, [now, timers, markComplete]);

  if (timers.length === 0) return null;

  const activeTimers = timers.filter((t) => !t.completed);

  if (activeTimers.length === 0) return null;

  return (
    <div style={barStyle}>
      {activeTimers.map((t) => {
        const remaining = Math.max(0, t.endTime - now);
        const seconds = Math.ceil(remaining / 1000);

        return (
          <div key={t.id} style={{ marginBottom: 4 }}>
             {t.label}: {seconds}s
          </div>
        );
      })}
    </div>
  );
};

const barStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#222",
  color: "white",
  padding: "10px",
  fontSize: "14px",
};
