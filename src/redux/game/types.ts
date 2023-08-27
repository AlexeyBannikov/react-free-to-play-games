export interface TGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
}

export interface SearchGameParams {
  platform?: string;
  genre?: string | null;
  sortBy?: string;
  page?: number;
}

export interface IGameSliceState {
  items: TGame[];
  status: Status;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}