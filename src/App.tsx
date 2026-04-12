import { useState } from "react";
import { recipes } from "./data/recipes";
import { CookMode } from "./features/recipes/CookMode";
import { FloatingTimerBar } from "./FloatingTimerBar";
import { TimerCompleteModal } from "./TimerCompleteModal";
import { RecipeList } from "./features/recipes/RecipeList";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  const selectedRecipe = recipes.find((r) => r.id === selectedRecipeId);

  return (
    <>
      {!selectedRecipe ? (
        <RecipeList recipes={recipes} onSelect={setSelectedRecipeId} />
      ) : (
        <CookMode
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipeId(null)}
        />
      )}
      <FloatingTimerBar />
      <TimerCompleteModal />
    </>
  );
}

export default App;
