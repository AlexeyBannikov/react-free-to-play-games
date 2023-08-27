import { ISortItem, SortPropertyEnum } from '@/redux/filter/types';

export const sortList: ISortItem[] = [
  { name: 'Relevance', sortProperty: SortPropertyEnum.RELEVANCE },
  { name: 'Popularity', sortProperty: SortPropertyEnum.POPULARITY },
  { name: 'Release Date', sortProperty: SortPropertyEnum.RELEASE_DATE },
  { name: 'Alphabetical', sortProperty: SortPropertyEnum.ALPHABETICAL },
];
