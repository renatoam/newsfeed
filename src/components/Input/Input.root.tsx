import { ComponentPropsWithoutRef, ElementType } from "react"

type InputProps = ComponentPropsWithoutRef<"input"> & {
  icon?: ElementType
}

export default function Input({ icon: Icon, ...props }: InputProps) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        {...props}
        className="grow"
      />
      {Icon && <Icon />}
    </label>
  )
}
