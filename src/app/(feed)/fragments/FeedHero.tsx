"use client"

import { Card, NoResults, ResultError, SkeletonList } from "@/components";
import useFeed from "../Feed.hooks";

export default function FeedHero() {
  const { data, isLoading, isError } = useFeed()

  if (isLoading) return <SkeletonList count={2} />
  if (isError || !data) return <ResultError />
  if (data.length === 0) return <NoResults />

  return (
    <section className="flex flex-wrap lg:flex-nowrap gap-4">
      {data.map(article => (
        <Card
          key={article.title}
          categories={[article.category ?? '']}
          description={article.description}
          image={{
            src: article.image,
            alt: article.title,
            width: 400,
            height: 400,
            className: 'w-full'
          }}
          title={article.title}
          badge="Breaking"
          size="wide"
        />
      ))}
    </section>
  );
}
