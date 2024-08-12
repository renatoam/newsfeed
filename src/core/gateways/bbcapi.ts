import { AxiosError } from "axios";
import axios from "../configs/axios";
import { BBCApiResponseDTO } from "./bbcapi.dto";

export default async function bbcApiGateway(): Promise<BBCApiResponseDTO> {
  try {
    const response = await axios.get<BBCApiResponseDTO>('/news?lang=english')
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    throw new Error(axiosError.message)
  }
}
