"use client"

import CardList from "@/components/CardList/CardList.root";
import SkeletonList from "@/components/SkeletonList/SkeletonList.root";
import { getNews } from "@/core/actions";
import { useQuery } from "@tanstack/react-query";

export default function FeedList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => await getNews({
      search: { searchTerm: 'business' }
    })
  })

  if (isLoading) return <SkeletonList />
  if (isError || !data) return <p>Something wrong...</p>

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,384px),1fr))] gap-4 my-8 justify-items-center">
      <CardList data={data} />
    </section>
  );
}
