import { GenrePropertyEnum, IGenreItem } from '@/redux/filter/types';

export const genreList: IGenreItem[] = [
  { name: 'MMO', genreProperty: GenrePropertyEnum.MMO },
  { name: 'MMORPG', genreProperty: GenrePropertyEnum.MMORPG },
  { name: 'Shooter', genreProperty: GenrePropertyEnum.SHOOTER },
  { name: 'Strategy', genreProperty: GenrePropertyEnum.STRATEGY },
  { name: 'Moba', genreProperty: GenrePropertyEnum.MOBA },
  { name: 'Card Games', genreProperty: GenrePropertyEnum.CARD_GAMES },
  { name: 'Racing', genreProperty: GenrePropertyEnum.RACING },
  { name: 'Sports', genreProperty: GenrePropertyEnum.SPORTS },
  { name: 'Social', genreProperty: GenrePropertyEnum.SOCIAL },
  { name: 'Fighting', genreProperty: GenrePropertyEnum.FIGHTING },
];
