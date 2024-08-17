"use client"

import { CardList } from "@/components";
import { useSearch } from "../Search.hooks";
import SearchFilters from "./SearchFilter";

export default function SearchList() {
  const { data, isLoading, isError } = useSearch()
  const baseClasses = 'container flex flex-wrap gap-4 [&>.card]:flex-auto [&>.card]:basis-64'
  const flexBehavior = '[&>section]:flex [&>section]:gap-4 [&>section>div]:w-auto [&>section>div]:flex-auto [&>section>div]:basis-64'
  const gridBehavior = isLoading ? flexBehavior : baseClasses

  return (
    <section className="container grid grid-cols-[250px,1fr]">
      <SearchFilters />
      <article className={gridBehavior}>
        <CardList {...{ data, isLoading, isError }} />
      </article>
    </section>
  );
}
