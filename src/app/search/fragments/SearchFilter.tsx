import { extractCategoriesAndSources } from "@/shared/helpers";
import { useFetchCategories, useFetchSources } from "../Search.hooks";
import { NoResults, ResultError, SkeletonList } from "@/components";

export default function SearchFilters() {
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

  if (fetchCategoriesError && fetchSourcesError) return <ResultError />
  if (!categoriesList && !sourcesList) return <NoResults />
  
  const [categories, sources] = extractCategoriesAndSources([categoriesList!, sourcesList!])

  return (
    <aside className="prose row-span-5">
      <h3>Filters</h3>
      <section id="categories">
        <h4>Categories</h4>
        {fetchCategoriesLoading ? <SkeletonList /> :
        fetchCategoriesError ? <ResultError /> : (
          <section>
          {categories.map((category, index) => (
            <div key={`category-${index}`} className="flex gap-4">
              <div>
                <label
                  className="sr-only"
                  htmlFor={`category-${index}`}>Category {index}</label>
                <input
                  type="radio"
                  id={`category-${index}`}
                  name={`category-${index}`}
                  className="radio radio-accent"
                  defaultChecked={index === 0}
                />
              </div>
              <div>{category}</div>
            </div>
          ))}
        </section>
        )}
      </section>
      <section id="sources">
        <h4>Sources</h4>
        {fetchSourcesLoading ? <SkeletonList /> :
        fetchSourcesError ? <ResultError /> : (
          <section>
          {sources.map((source, index) => (
            <div key={`source-${index}`} className="flex gap-4">
              <div>
                <label
                  className="sr-only"
                  htmlFor={`source-${index}`}>Source {index}</label>
                <input
                  type="radio"
                  id={`source-${index}`}
                  name={`source-${index}`}
                  className="radio radio-accent"
                  defaultChecked={index === 0}
                />
              </div>
              <div>{source}</div>
            </div>
          ))}
        </section>
        )}
      </section>
    </aside>
  );
}
