import { Link } from "react-router-dom";
import { IRecipe } from "../../types/RecipesTypes";

interface RecipeCardProps {
  recipe: IRecipe;
}
export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  console.log(recipe);

  return (
    <div className="w-[350px] box-border overflow-scroll text-red-400 h-[250px] my-[16px] p-[16px] border-[2px] border-red-200 rounded-[20px] flex flex-col justify-between bg-white">
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="text-red-500 text-[20px] hover:text-[red] hover:text-[22px] hover:underline transition-all duration-75"
      >
        {recipe.name}
      </Link>
      <p className="text-[13px]">{recipe.description}</p>
      <div className="border-t-2 border-red-300">
        {recipe.makingAmount && <p>Make: {recipe.makingAmount}</p>}
        {recipe.totalTime && <p>Total time:{recipe.totalTime}</p>}
      </div>
    </div>
  );
};
