import { RequestDTO } from "../shared/dto"

export function makeFilters(dto: RequestDTO) {
  const { category, date } = dto.filter
  const { searchTerm, page, pageSize } = dto.search
  const today = new Date().toISOString().split('T')[0]

  const filters = [
    searchTerm ? `q=${searchTerm}` : '',
    '&lang=en',
    category ? `&tag=${category}` : '',
    page ? `&page=${page}` : '',
    pageSize ? `&page-size=${pageSize}` : '',
    date ? `&from-date=${date}&to-date=${today}` : '',
    '&query-fields=headline,body'
  ].join('')

  return filters
}
