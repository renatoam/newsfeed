import { RequestDTO } from "../shared/dto";
import { BBCApiResponseDTO, News } from "./bbcapi.dto";

export function filterByCategory(data: BBCApiResponseDTO, category?: string) {
  let results: News[] = []

  for (const key in data) {
    const index = key as keyof BBCApiResponseDTO
    if (!Array.isArray(data[index])) continue
    if (category && key !== category) break
    
    results = [
      ...results,
      ...data[index]
    ]
  }

  return results
}

export function filterByTerm(data: News[], term: string) {
  return data.filter((article: News) => {
    return article?.summary?.includes(term) || article?.title?.includes(term)
  })
}
