export interface IFacts {
  totalCount: number
  pageSize: number
  currentPage: number
  totalPages: number
  items: IFact[]
}

export interface IFact {
  factId: number
  title: string
  description: string
}
