import { Input } from "@/components"

type PreferencesControlsProps<List extends Array<string>> = {
  title: string
  list: List
  defaultOption: {
    value: string
    display: string
  }
  id: string
}

export default function PreferencesControls<List extends Array<string>>(
  props: PreferencesControlsProps<List>
) {
  const { title, list, defaultOption, id } = props
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <h4 className="label-text">{title}</h4>
      </div>
      {list.length === 0 ? (
        <Input id={id} name={id} />
      ) : (
        <select id={id} name={id} className="select select-bordered" defaultValue={defaultOption.value}>
          <option value={defaultOption.value}>{defaultOption.display}</option>
          {list.map(item => (
            <option
              key={item}
              value={item.toLowerCase()}
            >{item}</option>
          ))}
        </select>
      )}
    </label>
  );
}
