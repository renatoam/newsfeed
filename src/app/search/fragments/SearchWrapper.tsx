import { QueryProvider } from "@/components";
import { PropsWithChildren } from "react";
import { SearchContextProvider } from "./SearchContext";

export default function SearchWrapper({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <SearchContextProvider>
        <article className="container my-8 w-full lg:w-[1280px]">
          {children}
        </article>
      </SearchContextProvider>
    </QueryProvider>
  );
}
