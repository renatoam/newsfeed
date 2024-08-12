import { AxiosError } from "axios";
import axios from "../configs/axios";
import { NewAPIError, NewAPIRequestDTO, NewAPIResponseDTO } from "./newsapi.dto";


export default async function newsApiGateway(dto: NewAPIRequestDTO): Promise<NewAPIResponseDTO> {
  try {
    const response = await axios.get<NewAPIResponseDTO>(`/v2/everything?q=${dto.searchTerm}&searchIn=title&language=en&page=${dto.page}&pageSize=${dto.pageSize}`)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    const newApiError = axiosError.response?.data as NewAPIError
    throw new Error(newApiError.message ?? '')
  }
}
