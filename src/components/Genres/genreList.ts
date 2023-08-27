import { GenrePropertyEnum, IGenreItem } from '@/redux/filter/types';

export const genreList: IGenreItem[] = [
  { name: 'All Genres', genreProperty: GenrePropertyEnum.ALL },
  { name: 'MMO', genreProperty: GenrePropertyEnum.MMO },
  { name: 'MMORPG', genreProperty: GenrePropertyEnum.MMORPG },
  { name: 'Shooter', genreProperty: GenrePropertyEnum.SHOOTER },
];
