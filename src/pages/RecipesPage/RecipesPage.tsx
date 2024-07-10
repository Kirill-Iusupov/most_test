import { useState, useEffect } from "react";

import { Wrapper } from "../../components/Wrapper/Wrapper";
import { getRecipes } from "../../services/Recipes/api";
import { IRecipe } from "../../types/RecipesTypes";
import { RecipeCard } from "../../components/RecipeCard";
import { Loader } from "../../components/Loader";

export const RecipesPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);

  const [fetching, setFetching] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (fetching) {
      getRecipes(currentPage)
        .then((response) => {
          setRecipes([...recipes, ...response.items]);
          setTotalCount(response.totalCount);
          setCurrentPage(currentPage + 1);
        })
        .finally(() => {
          setIsLoading(false);
          setFetching(false);
        });
    }
  }, [fetching]);

  console.log(recipes);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      recipes.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between items-start flex-wrap">
            {recipes?.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.recipeId} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};
