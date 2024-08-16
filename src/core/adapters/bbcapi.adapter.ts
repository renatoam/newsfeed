import { News } from "../services/bbc/bbcapi.dto";

export default function bbcApiAdapter(articles: News[]): NewsCard[] {
  return articles.map(article => ({
    description: article.summary,
    image: article.image_link ?? '',
    title: article.title,
    author: 'BBC Editorial',
    category: 'general',
    date: new Date().toISOString().split('T')[0],
    source: 'BBC'
  }))
}
