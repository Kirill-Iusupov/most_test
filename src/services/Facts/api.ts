import axios from "axios";
import { baseApiUrl } from "..";

//Get all facts
export const getFacts = async (currentPage: number) => {
  const response = await axios.get(`${baseApiUrl}/Facts`, {
    params: {
      pageSize: 15,
      pageIndex: currentPage,
    },
  });

  return response.data;
};
