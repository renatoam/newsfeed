export type NewsAPIRequestDTO = {
  searchTerm: string
  page: number
  pageSize: number
  from: Date
}

export type NewsAPIResponseDTO = {
  status: string
  totalResults: number
  articles: Article[]
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

export type NewsAPIError = {
  status: string
  code: string
  message: string
}
