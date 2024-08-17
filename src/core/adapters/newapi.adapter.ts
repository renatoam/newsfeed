import { NewsAPIResponseDTO } from "../services/newsApi/newsapi.dto";

export default function newsApiAdapter(
  articles: NewsAPIResponseDTO["articles"]
): NewsCard[] {
  if (!articles) return []
  return articles.map(article => ({
    description: article.description,
    image: article.urlToImage,
    title: article.title,
    author: article.author,
    category: 'general',
    date: article.publishedAt,
    source: article.source.name
  }))
}
