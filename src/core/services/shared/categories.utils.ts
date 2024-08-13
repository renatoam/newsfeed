import { BBCApiResponseDTO } from "../bbc/bbcapi.dto";
import { TheGuardianTagAPIResponseDTO } from "../theGuardian/theguardian.dto";

export function extractCategories(
  bbcResults: BBCApiResponseDTO,
  guardianResults: TheGuardianTagAPIResponseDTO
): string[] {
  const bbcCategories = []
  
  for (const key in bbcResults) {
    const index = key as keyof BBCApiResponseDTO
    if (!Array.isArray(bbcResults[index])) continue
    bbcCategories.push(key)
  }

  const guardianResponse = guardianResults?.response?.results ?? []
  const guardianCategories = guardianResponse.map(item => item.id)

  return [
    ...bbcCategories,
    ...guardianCategories,
  ]
}
