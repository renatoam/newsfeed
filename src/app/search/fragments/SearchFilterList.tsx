import { ResultError, SkeletonFilter } from "@/components"
import { useFormReset } from "../Search.hooks"

type SearchFilterListProps = {
  isLoading: boolean
  isError: boolean
  visibleList: string[]
  remainingList: string[]
  label: string
  id: string
  activeFilter: boolean
  handleChange: (item: string) => void
}

export default function SearchFilterList(props: SearchFilterListProps) {
  const {
    isError,
    isLoading,
    visibleList,
    remainingList,
    label,
    id,
    activeFilter,
    handleChange
  } = props

  const form = useFormReset(activeFilter)

  if (!isLoading) return <SkeletonFilter />
  if (isError) return <ResultError />

  return (
    <form ref={form}>
      <section>
        {visibleList.map((item, index) => (
          <div key={`item-${item}-${index}`} className="flex gap-4">
            <div>
              <label
                className="sr-only"
                htmlFor={`visibleItem-${index}`}>{label} {index}</label>
              <input
                type="radio"
                id={`visibleItem-${index}`}
                name={`item-${id}`}
                className="radio radio-accent"
                onChange={() => handleChange(item)}
              />
            </div>
            <div>{item}</div>
          </div>
        ))}
      </section>
      <div className="collapse">
        <label className="sr-only" htmlFor={id}>Remaining items</label>
        <input id={id} type="checkbox" />
        <div className="collapse-title text-center font-medium underline underline-offset-8">See more</div>
        <div className="collapse-content px-0">
          {remainingList.map((item, index) => (
            <div key={`item-${index * 2}`} className="flex gap-4">
              <div>
                <label
                  className="sr-only"
                  htmlFor={`item-${index}`}>{label} {index}</label>
                <input
                  type="radio"
                  id={`item-${index}`}
                  name={`item-${id}`}
                  className="radio radio-accent"
                  onChange={() => handleChange(item)}
                />
              </div>
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
  </form>
  );
}
