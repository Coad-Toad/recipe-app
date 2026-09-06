import { Button } from "@mui/material";
import type { Recipe } from "../../types/recipe";
import DogogieSvg from "../../assets/dogogie.svg?react";
import "./cook-mode-module.css";

type Props = {
  recipes: Recipe[];
  onSelect: (id: string) => void;
};

export const RecipeList = ({ recipes, onSelect }: Props) => {
  return (
    <div>
      <div className="recipe-header">
        <DogogieSvg className="recipe-dogogie" />
      </div>

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
