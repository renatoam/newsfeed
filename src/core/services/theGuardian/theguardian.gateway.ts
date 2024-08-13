import 'server-only'

import { AxiosError } from "axios";
import axios from '@/core/configs/axios';

export default async function theGuardianApiGateway<Response>(endpoint: string): Promise<Response> {
  try {
    const response = await axios.get(process.env.THEGUARDIAN_HOST + endpoint)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    throw new Error(axiosError.message)
  }
}
