import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IRecipe } from "../../types/RecipesTypes";
import { getRecipeById } from "../../services/Recipes/api";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const RecipeDetailPage = () => {
  const { id } = useParams<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    id &&
      getRecipeById(id)
        .then((response) => setRecipe(response))
        .finally(() => setIsLoading(false));
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="w-[900px] bg-[white] border-2 border-red-200 rounded-[20px] p-[24px] m-auto my-[16px]">
          <h2>{recipe?.name}</h2>
          <p>{recipe?.description}</p>
          <p>Make: {recipe?.makingAmount}</p>
          {recipe?.prepTime && <p>Preparation time: {recipe?.prepTime}</p>}
          {recipe?.cookTime && <p>Cook time: {recipe?.cookTime}</p>}
          {recipe?.totalTime && <p>Total time: {recipe?.totalTime}</p>}
          <div className="flex items-center justify-center">
            <img
              src={recipe?.imageUrl}
              alt={recipe?.description}
              className="w-1/2 rounded-[16px] my-[16px]"
            />
          </div>
          <div className="border-b-2">
            <p>Ingredients:</p>
            <ul>
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {recipe?.additions1.length ? (
            <div className="my-[24px] border-b-2">
              <ul>
                {recipe?.additions1.map((addition, index) => (
                  <li key={index}>{addition}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {recipe?.additions2.length ? (
            <div className="my-[24px] border-b-2">
              <ul>
                {recipe?.additions2.map((addition, index) => (
                  <li key={index}>{addition}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {recipe?.additions3.length ? (
            <div className="my-[24px] border-b-2">
              <ul>
                {recipe?.additions3.map((addition, index) => (
                  <li key={index}>{addition}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <p>Directions:</p>
          {recipe?.directions.join().replace(/\.,/g, ". ")}
        </div>
      )}
    </Wrapper>
  );
};
