export interface IBeansState {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: IBean[];
}

export interface IBean {
  beanId: number;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
}
