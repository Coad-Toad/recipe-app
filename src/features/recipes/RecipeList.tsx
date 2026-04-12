import { Button } from "@mui/material";
import type { Recipe } from "../../types/recipe";
import "./cook-mode-module.css";

type Props = {
  recipes: Recipe[];
  onSelect: (id: string) => void;
};

export const RecipeList = ({ recipes, onSelect }: Props) => {
  return (
    <div>
      <h1 className="recipe-title">Recipe list</h1>

      {recipes.map((r) => (
        <Button
          key={r.id}
          onClick={() => onSelect(r.id)}
          sx={{ m: 4, textTransform: "none" }}
          size="large"
          variant="contained"
        >
          {r.title}
        </Button>
      ))}
    </div>
  );
};
