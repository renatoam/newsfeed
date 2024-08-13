"use server"

import { categoriesApiService } from "../services"

export default async function getCategories() {
  const categories = await categoriesApiService()
  return categories
}
