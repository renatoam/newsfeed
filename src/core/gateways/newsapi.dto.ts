export type NewAPIRequestDTO = {
  searchTerm: string
  page: number
  pageSize: number
}

export type NewAPIResponseDTO = {
  status: string
  totalResults: number
  articles: Article[]
}

export type NewAPIError = {
  status: string
  code: string
  message: string
}

export type Article = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type Source = {
  id: string
  name: string
}
