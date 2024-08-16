import 'server-only'

import { AxiosError } from "axios";
import axios from '@/core/configs/axios';

export default async function bbcApiGateway<Response>(endpoint: string): Promise<Response> {
  try {
    const response = await axios.get<Response>('https://' + process.env.BBC_RAPIDAPI_HOST + endpoint, {
      headers: {
        'X-Rapidapi-Key': process.env.BBC_RAPIDAPI_APIKEY,
        'X-RapidAPI-Host': process.env.BBC_RAPIDAPI_HOST
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    throw new Error(axiosError.message)
  }
}
