import Genres from '@/components/Genres/Genres';
import Platforms from '@/components/Platforms/Platforms';
import Sort from '@/components/Sort/Sort';
import { fetchGames } from '@/redux/game/asyncActions';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames({}));
  }, []);

  return (
    <>
      <div className={styles.filters}>
        <Platforms />
        <Genres />
        <Sort />
      </div>
      MainPage
    </>
  );
};

export default MainPage;
