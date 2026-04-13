import { useState } from "react";
import type { Ingredient } from "../../types/recipe";
import "./ingredient-list-module.css";
import { Collapse } from "react-collapse";
import { IconButton, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

type Props = {
  ingredients: Ingredient[] | undefined;
  highlightedIngredients?: string[];
};

export const IngredientsList = ({
  ingredients,
  highlightedIngredients,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)} color={"primary"}>
        {!isOpen ? (
          <>
            <ExpandMore></ExpandMore>
            <Typography sx={{ ml: 2 }}>Expand ingredients list</Typography>
          </>
        ) : (
          <>
            <ExpandLess></ExpandLess>
            <Typography sx={{ ml: 2 }}>Hide ingredients list</Typography>
          </>
        )}
      </IconButton>
      <div className="ingredients-list-area">
        <Collapse isOpened={isOpen}>
          <div className="ingredients-list">
            {ingredients?.map((n) => {
              const isHighlighted = highlightedIngredients?.includes(n.name);
              return (
                <div key={n.name}>
                  <p
                    style={{
                      fontWeight: isHighlighted ? "bold" : "normal",
                      color: isHighlighted ? "var(--accent)" : "var(--text)"
                    }}
                  >
                    {n.quantity}
                    {n.unit} {n.name}
                  </p>
                </div>
              );
            })}
          </div>
        </Collapse>
      </div>
    </>
  );
};
