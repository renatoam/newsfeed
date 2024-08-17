import { extractCategoriesAndSources } from "@/shared/helpers";
import { useFetchCategories, useFetchSources, useSearch } from "../Search.hooks";
import SearchFilterList from "./SearchFilterList";

export default function SearchFilters() {
  const { setCategoryFilter, setSourceFilter, activeFilter } = useSearch()
  const {
    data: categoriesList,
    isLoading: fetchCategoriesLoading,
    isError: fetchCategoriesError
  } = useFetchCategories()
  const {
    data: sourcesList,
    isLoading: fetchSourcesLoading,
    isError: fetchSourcesError
  } = useFetchSources()
  
  const [categories, sources] = extractCategoriesAndSources([categoriesList!, sourcesList!])

  return (
    <aside className="prose row-span-5">
      <h3>Filters</h3>
      <section id="categories">
        <h4>Categories</h4>
        <SearchFilterList
          id="category"
          isError={fetchCategoriesError}
          isLoading={fetchCategoriesLoading}
          label="Category"
          visibleList={categories.slice(0, 8)}
          remainingList={categories.slice(8)}
          handleChange={setCategoryFilter}
          activeFilter={activeFilter}
        />
      </section>
      <section id="sources">
        <h4>Sources</h4>
        <SearchFilterList
          id="source"
          isError={fetchSourcesError}
          isLoading={fetchSourcesLoading}
          label="Source"
          visibleList={sources.slice(0, 8)}
          remainingList={sources.slice(8)}
          handleChange={setSourceFilter}
          activeFilter={activeFilter}  
        />
      </section>
    </aside>
  );
}
