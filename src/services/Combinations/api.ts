import axios from "axios";

//Get all combinations
export const getCombinations = async (pageIndex: number) => {
  const response = await axios.get(
    "https://jellybellywikiapi.onrender.com/api/combinations",
    {
      params: {
        pageSize: 15,
        pageIndex: pageIndex,
      },
    }
  );

  return response.data;
};
