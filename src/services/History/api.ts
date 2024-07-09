import axios from "axios";

//Get all dates
export const getHistory = async (pageIndex: number) => {
  const response = await axios.get(
    "https://jellybellywikiapi.onrender.com/api/mileStones",
    {
      params: {
        pageSize: 15,
        pageIndex: pageIndex,
      },
    }
  );

  return response.data;
};
