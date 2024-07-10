import axios from "axios";
import { baseApiUrl } from "..";

//Get all beans
export const getBeans = async (currentPage: number) => {
  const response = await axios.get(`${baseApiUrl}/Beans`, {
    params: {
      pageSize: 15,
      pageIndex: currentPage,
    },
  });

  return response.data;
};

//Get a single bean by ID
export const getBeanById = async (beanId: number | string) => {
  const response = await axios.get(`${baseApiUrl}/Beans/${beanId}`);

  return response.data;
};
