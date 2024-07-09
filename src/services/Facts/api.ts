import axios from "axios";

//Get all facts
export const getFacts = async (currentPage: number) => {
  const response = await axios.get(
    "https://jellybellywikiapi.onrender.com/api/Facts",
    {
      params: {
        pageSize: 15,
        pageIndex: currentPage,
      },
    }
  );

  return response.data;
};

// Get a single fact by ID
