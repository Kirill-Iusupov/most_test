import { Link } from "react-router-dom";
import { IRecipe } from "../../types/RecipesTypes";

interface RecipeCardProps {
  recipe: IRecipe;
}
export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  console.log(recipe);

  return (
    <div className="w-[350px] my-[16px] p-[16px] border-[2px] border-red-200 rounded-[20px]">
      <p>{recipe.name}</p>
      <p>{recipe.description}</p>
      <p>Make: {recipe.makingAmount}</p>
      {recipe.totalTime && <p>Total time:{recipe.totalTime}</p>}
      <button>
        <Link to={`/recipe/${recipe.recipeId}`}>More details</Link>
      </button>
    </div>
  );
};
