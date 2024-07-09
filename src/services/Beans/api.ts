import axios from "axios";

//Get all beans
export const getBeans = async (currentPage: number) => {
  const response = await axios.get(
    "https://jellybellywikiapi.onrender.com/api/Beans",
    {
      params: {
        pageSize: 15,
        pageIndex: currentPage,
      },
    }
  );

  return response.data;
};

//Get a single bean by ID
export const getBeanById = async (beanId: number | string) => {
  const response = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/Beans/${beanId}`
  );

  return response.data;
};
