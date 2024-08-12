import { AxiosError } from "axios";
import axios from "../configs/axios";
import { TheGuardianAPIRequestDTO, TheGuardianAPIResponseDTO } from "./theguardian.dto";

export default async function theGuardianApiGateway(dto: TheGuardianAPIRequestDTO): Promise<TheGuardianAPIResponseDTO> {
  try {
    const response = await axios.get(`/search?q=${dto.searchTerm}&lang=en&tag=${dto.tag}&page=${dto.page}&page-size=${dto.pageSize}&query-fields=headline,body`)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.request) {
      throw new Error('Something wrong with the request. Check it out and try again.')
    }

    throw new Error(axiosError.message)
  }
}
