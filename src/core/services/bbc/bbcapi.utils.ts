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
    return article.summary.includes(term) || article.title.includes(term)
  })
}

type Pagination = Omit<Pick<RequestDTO, "search">["search"], "searchTerm">

export function handlePagination(data: News[], pagination: Pagination) {
  const { page, pageSize } = pagination
  const DEFAULT_PAGESIZE = 10

  if (!page) return data

  if (page && !pageSize) {
    const pageIndex = page * DEFAULT_PAGESIZE
    return data.slice(pageIndex, DEFAULT_PAGESIZE + 1)
  }

  const pageIndex = page * pageSize!
  return data.slice(pageIndex, pageSize! + 1)
}
