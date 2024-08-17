"use client"

import { SearchContextProvider } from "@/app/search/fragments/SearchContext";
import SearchFilters from "@/app/search/fragments/SearchFilter";
import Drawer from "../Drawer/Drawer.root";
import QueryProvider from "../QueryProvider/QueryProvider.root";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname()

  if (pathname !== '/search') return

  return (
    <div className="btm-nav md:hidden">
      <button type="button" className="active">
        <span className="sr-only">Filters</span>
        <QueryProvider>
          <SearchContextProvider>
            <Drawer>
              <SearchFilters />
            </Drawer>
          </SearchContextProvider>
        </QueryProvider>
      </button>
    </div>
  );
}
