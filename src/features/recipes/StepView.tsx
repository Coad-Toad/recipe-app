import { useTimerStore } from "../../store/useTimerStore";
import type { Step } from "../../types/recipe";
import "./step-view-module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

type Props = {
  step: Step;
};

export const StepView = ({ step }: Props) => {
  const addTimer = useTimerStore((s) => s.addTimer);

  const startTimer = () => {
    if (!step.timerMinutes) return;

    addTimer({
      id: crypto.randomUUID(),
      label: step.timerLabel || "Timer",
      endTime: Date.now() + step.timerMinutes * 60000,
    });
  };

  const timers = useTimerStore((s) => s.timers);

  console.log(timers);

  return (
    <div>
      <div className="step-area">
        <Typography sx={{ fontSize: 20, textAlign: "center" }}>{step.instruction}</Typography>

        {step.notes?.map((n, i) => (
          <div className="notes-area">
            <TipsAndUpdatesIcon sx={{ mr: 2, ml: 1 }} color="primary"></TipsAndUpdatesIcon>
            <Typography sx={{ textAlign: "left" }} key={i}>{n.text}</Typography>
          </div>
        ))}
      </div>
      {step.timerMinutes && (
        <Button
          size="large"
          sx={{ m: 4, textTransform: "none" }}
          variant="contained"
          onClick={startTimer}
        >
          Start {step.timerMinutes} minute timer
        </Button>
      )}
    </div>
  );
};
