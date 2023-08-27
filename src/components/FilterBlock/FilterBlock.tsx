import React from 'react';
import Platforms from '@/components/Platforms/Platforms';
import Sort from '@/components/Sort/Sort';
import Genres from '@/components/Genres/Genres';
import styles from './FilterBlock.module.css';
import { RootState, useAppSelector } from '@/redux/store';

const FilterBlock: React.FC = () => {
  const { currentPlatform, currentGenre, currentSort } = useAppSelector(
    (state: RootState) => state.filter
  );

  return (
    <div className={styles.filters}>
      <Platforms currentPlatform={currentPlatform.name} />
      <Genres currentGenre={currentGenre.name} />
      <Sort currentSort={currentSort.name} />
    </div>
  );
};

export default FilterBlock;
