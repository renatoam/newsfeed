import { ServiceResponse } from "@/core/services/shared/dto"

export function extractCategoriesAndSources(lists: ServiceResponse<string[]>[]) {
  return lists.map(list => {
    if (list?.status === "success") {
      return Array.from(new Set(list.data))
    }
    return []
  })
}
