export interface IHistory {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: IDate[];
}

export interface IDate {
  mileStoneId: number;
  year: number;
  description: string;
}
