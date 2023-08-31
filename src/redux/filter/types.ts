export enum SortPropertyEnum {
  RELEVANCE = 'relevance',
  POPULARITY = 'popularity',
  RELEASE_DATE = 'release-date',
  ALPHABETICAL = 'alphabetical',
}

export enum PlatformPropertyEnum {
  ALL = 'all',
  PC = 'pc',
  BROWSER = 'browser',
}

export enum GenrePropertyEnum {
  MMO = 'mmo',
  MMORPG = 'mmorpg',
  SHOOTER = 'shooter',
  STRATEGY = 'strategy',
  MOBA = 'moba',
  CARD_GAMES = 'card',
  RACING = 'racing',
  SPORTS = 'sports',
  SOCIAL = 'social',
  FIGHTING = 'fighting',
}

export interface IPlatformItem {
  name: string;
  platformProperty: PlatformPropertyEnum;
}

export interface IGenreItem {
  name: string | null;
  genreProperty: GenrePropertyEnum | null;
}

export interface ISortItem {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface IFilterSliceState {
  currentPlatform: IPlatformItem;
  currentGenre: IGenreItem;
  currentSort: ISortItem;
  currentPage: number;
}
