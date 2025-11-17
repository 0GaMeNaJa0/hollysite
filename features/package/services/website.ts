import axios from "@/config/api/axios";

export const getDataList = async (url: string, data?: object): Promise<any> => {
  const response = await axios.put(url, data);
  return response.data;
};
