import axios from "axios";
import { baseApiUrl } from "..";

//Get all recipes
export const getRecipes = async (pageIndex: number) => {
  const response = await axios.get(`${baseApiUrl}/recipes}`, {
    params: {
      pageIndex: pageIndex,
    },
  });

  return response.data;
};

//Get recipe by ID
export const getRecipeById = async (recipeId: string) => {
  const response = await axios.get(`${baseApiUrl}/recipes/${recipeId}`);

  return response.data;
};
