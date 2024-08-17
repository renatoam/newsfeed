export type Pagination = {
  page?: number
  pageSize?: number
}

export function applyPagination<Data>(data: Data[], pagination: Pagination): Data[] {
  const { page, pageSize } = pagination
  const DEFAULT_PAGESIZE = 10

  if (!page) return data

  if (page && !pageSize) {
    const pageIndex = page * DEFAULT_PAGESIZE
    return data.slice(pageIndex, pageIndex + DEFAULT_PAGESIZE + 1)
  }

  const pageIndex = page * pageSize!
  return data.slice(pageIndex, pageIndex + pageSize! + 1)
}
