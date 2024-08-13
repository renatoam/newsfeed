import 'server-only'

import { AxiosError } from "axios";
import axios from "../../configs/axios";
import { NewsAPIError } from "./newsapi.dto";

export default async function newsApiGateway<Response>(endpoint: string): Promise<Response> {
  try {
    const response = await axios.get<Response>(process.env.NEWSAPI_HOST + endpoint)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    const newApiError = axiosError.response?.data as NewsAPIError
    throw new Error(newApiError.message ?? '')
  }
}
