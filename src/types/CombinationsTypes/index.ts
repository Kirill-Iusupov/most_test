export interface ICombs {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: IComb[];
}

export interface IComb {
  combinationId: number;
  name: string;
  tag: string[];
}
