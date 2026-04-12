import type { Ingredient } from "../../types/recipe";
import "./ingredient-list-module.css";

type Props = {
  ingredients: Ingredient[] | undefined;
};

export const IngredientsList = ({ ingredients }: Props) => {
  return (
    <div className="ingredients-list-area">
      <div className="ingredients-list">
        {ingredients?.map((n) => (
          <div>
            <p>
              {n.quantity}
              {n.unit} {n.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
