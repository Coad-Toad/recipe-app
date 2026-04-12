import { recipes } from "./data/recipes";
import { CookMode } from "./features/recipes/CookMode";
import { FloatingTimerBar } from "./FloatingTimerBar";
import { TimerCompleteModal } from "./TimerCompleteModal";

function App() {
  return (
    <>
      <CookMode recipe={recipes[0]} />
      <FloatingTimerBar />
      <TimerCompleteModal />
    </>
  );
}

export default App;
