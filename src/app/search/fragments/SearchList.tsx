"use client"

import { CardList, NoResults, ResultError, SkeletonList } from "@/components";
import { useSearch } from "../Search.hooks";
import SearchFilters from "./SearchFilter";

export default function SearchList() {
  const { data, isLoading, isError } = useSearch()

  if (isLoading) return <SkeletonList />
  if (isError) return <ResultError />
  if (!data) return <NoResults />

  return (
    <article className="container grid grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))] gap-4">
      <SearchFilters />
      <CardList data={data} />
    </article>
  );
}
