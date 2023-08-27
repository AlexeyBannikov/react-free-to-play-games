import GameBlock from '@/components/GameBlock/GameBlock';
import GamesError from '@/components/GamesError/GamesError';
import Genres from '@/components/Genres/Genres';
import Loader from '@/components/Loader';
import Platforms from '@/components/Platforms/Platforms';
import Sort from '@/components/Sort/Sort';
import { fetchGames } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state: RootState) => state.game);
  const { currentPlatform, currentGenre, currentSort } = useAppSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    dispatch(fetchGames({}));
  }, []);

  const games = items.map((game) => <GameBlock key={game.id} {...game} />);

  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <Platforms currentPlatform={currentPlatform.name} />
        <Genres currentGenre={currentGenre.name} />
        <Sort currentSort={currentSort.name} />
      </div>
      {status === Status.ERROR && <GamesError />}
      {status === Status.LOADING ? (
        <Loader />
      ) : (
        <div className={styles.content}>{games[0]}</div>
      )}
    </div>
  );
};

export default HomePage;
