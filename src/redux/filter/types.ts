export enum SortPropertyEnum {
  RELEVANCE = 'relevance',
  POPULARITY = 'popularity',
  RELEASE_DATE = 'release_date',
  ALPHABETICAL = 'alphabetical',
}

export enum PlatformPropertyEnum {
  ALL = 'all',
  PC = 'pc',
  BROWSER = 'browser',
}

export enum GenrePropertyEnum {
  ALL = 'all',
  MMO = 'mmo',
  MMORPG = 'mmorpg',
  SHOOTER = 'shooter',
}

export interface IPlatformItem {
  name: string;
  platformProperty: PlatformPropertyEnum;
}

export interface IGenreItem {
  name: string;
  genreProperty: GenrePropertyEnum;
}

export interface ISortItem {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface IFilterSliceState {
  currentPlatform: IPlatformItem;
  currentGenre: IGenreItem;
  currentSort: ISortItem;
}
