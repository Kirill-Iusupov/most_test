import axios from "axios";
import { baseApiUrl } from "..";

//Get all combinations
export const getCombinations = async (pageIndex: number) => {
  const response = await axios.get(`${baseApiUrl}/combinations`, {
    params: {
      pageSize: 15,
      pageIndex: pageIndex,
    },
  });

  return response.data;
};
