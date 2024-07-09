import axios from "axios";

//Get all recipes
export const getRecipes = async (pageIndex: number) => {
  const response = await axios.get(
    "https://jellybellywikiapi.onrender.com/api/recipes",
    {
      params: {
        pageIndex: pageIndex,
      },
    }
  );

  return response.data;
};

//Get recipe by ID
export const getRecipeById = async (recipeId: string) => {
  const response = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/recipes/${recipeId}`
  );

  return response.data;
};
