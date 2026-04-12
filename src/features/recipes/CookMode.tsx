import { useState } from "react";
import { StepView } from "./StepView";
import type { Recipe } from "../../types/recipe";
import { IngredientsList } from "./IngredientsList";

type Props = {recipe: Recipe;};

export const CookMode = ({ recipe }: Props) => {  const [index, setIndex] = useState(0);
  const step = recipe.steps[index];
  const ingredients = recipe.ingredients;

  return (
    <div>
      <h1>{recipe.title}</h1>
        <IngredientsList ingredients={ingredients}/>

      <StepView step={step} />

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
        >
          Back
        </button>

        <button
          onClick={() => setIndex((i) => i + 1)}
          disabled={index === recipe.steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};