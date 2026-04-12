import { useTimerStore } from "../../store/useTimerStore";
import type { Step } from "../../types/recipe";
import "./step-view-module.css";

type Props = {
  step: Step;
};

export const StepView = ({ step }: Props) => {
  const addTimer = useTimerStore((s) => s.addTimer);

  const startTimer = () => {
    if (!step.timerSeconds) return;

    addTimer({
      id: crypto.randomUUID(),
      label: step.timerLabel || "Timer",
      endTime: Date.now() + step.timerSeconds * 1000,
    });
  };

  const timers = useTimerStore((s) => s.timers);

  console.log(timers);

  return (
    <div>
      <p>{step.instruction}</p>

      {step.notes?.map((n, i) => (
        <div className="notes-area">
          <p key={i}>💡 {n.text}</p>
        </div>
      ))}

      {step.timerSeconds && (
        <button onClick={startTimer}>
          Start {step.timerSeconds} second timer
        </button>
      )}
    </div>
  );
};
