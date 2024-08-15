import { ServiceResponse } from "@/core/services/shared/dto";
import { FormEvent, MouseEvent } from "react";

type TargetType = FormEvent<HTMLFormElement>["target"] & Record<"category" | "source", HTMLInputElement>

export function setPreferences(event: MouseEvent<HTMLButtonElement>) {
  const button = event.target as HTMLButtonElement
  const form = button.parentElement?.parentElement as unknown as TargetType
  const selectedCategory = form["category"].value
  const selectedSource = form["source"].value

  localStorage.setItem('selectedCategory', selectedCategory)
  localStorage.setItem('selectedSource', selectedSource)
}

export function createPreferenceOptions(lists: ServiceResponse<string[]>[]) {
  return lists.map(list => {
    if (list.status === "success") {
      return Array.from(new Set(list.data))
    }
    return []
  })
}
