"use client"

import { CardList } from "@/components";
import { useFeedList } from "../Feed.hooks";

export default function FeedList() {
  const { data, isLoading, isError } = useFeedList()

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-4 my-8 justify-items-center [&>.card]:w-full">
      <CardList {...{ data, isError, isLoading }} />
    </section>
  );
}
