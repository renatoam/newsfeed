"use client"

import { CardList, NoResults, ResultError, SkeletonList } from "@/components";
import { useFeedList } from "../Feed.hooks";

export default function FeedList() {
  const { data, isLoading, isError } = useFeedList()

  if (isLoading) return <SkeletonList />
  if (isError) return <ResultError />
  if (!data) return <NoResults />

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,384px),1fr))] gap-4 my-8 justify-items-center">
      <CardList data={data} />
    </section>
  );
}
