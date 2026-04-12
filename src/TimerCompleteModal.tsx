import { useTimerStore } from "./store/useTimerStore";

export const TimerCompleteModal = () => {
  const timers = useTimerStore((s) => s.timers);
  const removeTimer = useTimerStore((s) => s.removeTimer);

  const completedTimers = timers.filter((t) => t.completed && !t.notified);

  const markNotified = useTimerStore((s) => s.markNotified);

  if (completedTimers.length === 0) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        {completedTimers.map((t) => (
          <div key={t.id} style={{ marginBottom: 10 }}>
            <p>{t.label} timer is done!</p>
            <button
              onClick={() => {
                markNotified(t.id);
                removeTimer(t.id);
              }}
            >
              Close
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modal: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
};
