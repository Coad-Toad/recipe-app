import { useState } from "react";
import { StepView } from "./StepView";
import type { Recipe } from "../../types/recipe";
import { IngredientsList } from "./IngredientsList";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cook-mode-module.css";
import { Typography } from "@mui/material";

type Props = { recipe: Recipe; onBack: () => void };

export const CookMode = ({ recipe, onBack }: Props) => {
  const [index, setIndex] = useState(0);
  const step = recipe.steps[index];
  const ingredients = recipe.ingredients;

  return (
    <div>
      <h1 className="recipe-title">{recipe.title}</h1>
      <IngredientsList
        ingredients={ingredients}
        highlightedIngredients={step.usesIngredients}
      />

      <StepView step={step} />

      <div style={{ marginTop: 20 }}>
        <IconButton
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          color={"primary"}
        >
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </IconButton>

        <IconButton
          onClick={() => setIndex((i) => i + 1)}
          disabled={index === recipe.steps.length - 1}
          color={"primary"}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
      <IconButton onClick={onBack} color={"primary"}>
        <ArrowBackIcon></ArrowBackIcon>
        <Typography sx={{ ml: 2 }}>Back to recipes</Typography>
      </IconButton>
    </div>
  );
};
