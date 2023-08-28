export interface TGame {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  };
}

export interface SearchGameParams {
  platform?: string;
  genre?: string | null;
  sortBy?: string;
  page?: number;
}

export interface IGameSliceState {
  games: TGame[];
  gamesStatus: Status;
  currentGame: TGame | undefined;
  gameStatus: Status | undefined;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
