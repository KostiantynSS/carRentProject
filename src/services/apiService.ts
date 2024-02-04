import axios from 'axios';
import { ApiServiceOptions } from './types';

const baseURL = 'https://65bcf658b51f9b29e932a831.mockapi.io/adverts/adverts/';

const axiosInstance = axios.create({
  baseURL,
});

const apiService = async (
  { method, url, data, config }: ApiServiceOptions,
  errorHandler = (error: any) => {
    return `An error occurred: ${error}`;
  }
) => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};


export default apiService;
