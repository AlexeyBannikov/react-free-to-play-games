import React from 'react';
import { Select, Space } from 'antd';
import { setCurrentGenre } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { genreList } from './genreList';
import styles from '@/components/FilterBlock/FilterBlock.module.css';

interface IGenresProps {
  currentGenre: string | null;
}

const Genres: React.FC<IGenresProps> = ({ currentGenre }) => {
  const dispatch = useAppDispatch();

  const onChangeGenre = (value: number) => {
    dispatch(setCurrentGenre(genreList[value]));
  };

  return (
    <Space size='middle' align='baseline' className={styles.filterBlock}>
      <span>Genre:</span>
      <Select
        defaultValue={currentGenre ?? 'All Genres'}
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
