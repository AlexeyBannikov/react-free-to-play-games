import React from 'react';
import { Select, Space } from 'antd';
import { setCurrentGenre } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { GenrePropertyEnum, IGenreItem } from '@/redux/filter/types';

interface IGenresProps {
  currentGenre: string;
}

const genreList: IGenreItem[] = [
  { name: 'All Genres', genreProperty: GenrePropertyEnum.ALL },
  { name: 'MMO', genreProperty: GenrePropertyEnum.MMO },
  { name: 'MMORPG', genreProperty: GenrePropertyEnum.MMORPG },
  { name: 'Shooter', genreProperty: GenrePropertyEnum.SHOOTER },
];

const Genres: React.FC<IGenresProps> = ({ currentGenre }) => {
  const dispatch = useAppDispatch();

  const onChangeGenre = (value: number) => {
    dispatch(setCurrentGenre(genreList[value]));
  };

  return (
    <Space size='middle' align='baseline'>
      <span>Genre:</span>
      <Select
        defaultValue={currentGenre}
        onChange={(value: string) => onChangeGenre(+value)}
        style={{ width: 140 }}
      >
        {genreList.map((genre, idx) => (
          <Select.Option key={idx}>{genre.name}</Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default Genres;
