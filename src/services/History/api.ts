import axios from "axios";
import { baseApiUrl } from "..";

//Get all dates
export const getHistory = async (pageIndex: number) => {
  const response = await axios.get(`${baseApiUrl}/mileStones`, {
    params: {
      pageSize: 15,
      pageIndex: pageIndex,
    },
  });

  return response.data;
};
