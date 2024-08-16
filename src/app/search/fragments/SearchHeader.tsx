"use client"

import { Search } from "@/components";
import { useSearch } from "./SearchContext";

export default function SearchHeader() {
  const { handleSearch } = useSearch()
  return (
    <section className="container">
      <header className="prose w-full my-8 text-center max-w-full">
        <h1>Find News</h1>
      </header>
      <section className="my-8">
        <Search onChange={handleSearch} />
      </section>
    </section>
  );
}
