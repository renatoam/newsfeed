"use client"

import { CardList } from "@/components";
import { useSearch } from "../Search.hooks";
import SearchFilters from "./SearchFilter";

export default function SearchList() {
  const { data, isLoading, isError } = useSearch()
  const baseClasses = 'md:container flex flex-wrap gap-4 md:[&>.card]:flex-auto md:[&>.card]:basis-64 w-full md:w-auto'
  const flexBehavior = '[&>section]:flex [&>section]:gap-4 [&>section>div]:w-auto [&>section>div]:flex-auto [&>section>div]:basis-64'
  const gridBehavior = isLoading ? flexBehavior : baseClasses

  return (
    <section className="container grid md:grid-cols-[250px,1fr]">
      <div className="hidden md:block">
        <SearchFilters />
      </div>
      <article className={gridBehavior}>
        <CardList {...{ data, isLoading, isError }} />
      </article>
    </section>
  );
}
