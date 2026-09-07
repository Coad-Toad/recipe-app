import { Button, IconButton } from "@mui/material";
import { useTimerStore } from "./store/useTimerStore";
import { useEffect, useState } from "react";

export const FloatingTimerBar = () => {
  const timers = useTimerStore((s) => s.timers);
  const markComplete = useTimerStore((s) => s.markComplete);
  const removeTimer = useTimerStore((s) => s.removeTimer);
  const clearAll = useTimerStore((s) => s.clearTimers);

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
    <div style={{ textAlign: "center" }}>
      {activeTimers.map((t) => {
        const remaining = Math.max(0, t.endTime - now);
        const minutes = Math.ceil(remaining / 60000);

        return (
          <div
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <div>
              {t.label}: {minutes} minutes
            </div>

            <IconButton
              onClick={() => removeTimer(t.id)}
              aria-label={`Remove ${t.label} timer`}
            >
              ×
            </IconButton>
          </div>
        );
      })}
    </div>

    <Button onClick={clearAll}>Clear timers</Button>
  </div>
);
};

const barStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: "#222",
  color: "white",
  padding: "10px",
  fontSize: "14px",
};
