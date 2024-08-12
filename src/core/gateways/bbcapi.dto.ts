export type BBCApiResponseDTO = {
  status: number
  "elapsed time": string
  timestamp: number
} & {
  [source: string]: News[]
}

export type News = {
  title: string
  summary: string
  image_link?: string
  news_link: string
}
