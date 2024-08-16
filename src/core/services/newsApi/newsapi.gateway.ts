import 'server-only'

import { AxiosError } from "axios";
import axios from "../../configs/axios";

export default async function newsApiGateway<Response>(endpoint: string): Promise<Response> {
  try {
    const response = await axios.get<Response>(process.env.NEWSAPI_HOST + endpoint, {
      headers: {
        'X-Api-Key': process.env.NEWSAPI_APIKEY
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    
    if (axiosError.response?.status === 404) {
      return {} as Response
    }

    if (axiosError.response?.status === 401) {
      throw new Error('Unauthorized. Check your credentials.')
    }

    throw new Error('Something wrong with the request. Check it out and try again.')
  }
}
