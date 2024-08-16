import { getCategories, getSources } from "@/core/actions";
import PreferencesControls from "./fragments/PreferencesControls";
import PreferencesSubmit from "./fragments/PreferencesSubmit";
import { extractCategoriesAndSources } from "@/shared/helpers";

export default async function Preferences() {
  const lists = await Promise.all([
    getCategories(),
    getSources()
  ])
  
  const [categories, sources] = extractCategoriesAndSources(lists)

  return (
    <section className="prose prose-h4:mt-2 prose-h4:mb-0">
      <form method="dialog">
        <PreferencesControls
          title="Set category"
          defaultOption={{
            value: 'default',
            display: 'Pick your favorite category'
          }}
          list={categories}
          id="category"
        />
        <PreferencesControls
          title="Set source"
          defaultOption={{
            value: 'default',
            display: 'Pick your favorite source'
          }}
          list={sources}
          id="source"
        />
        <PreferencesSubmit />
      </form>
    </section>
  );
}
