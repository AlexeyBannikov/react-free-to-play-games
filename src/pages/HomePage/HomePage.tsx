import GameBlock from '@/components/GameBlock/GameBlock';
import GamesError from '@/components/GamesError/GamesError';
import Genres from '@/components/Genres/Genres';
import Loader from '@/components/Loader';
import Platforms from '@/components/Platforms/Platforms';
import Sort from '@/components/Sort/Sort';
import { fetchGames } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { Pagination } from 'antd';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state: RootState) => state.game);
  const { currentPlatform, currentGenre, currentSort } = useAppSelector(
    (state: RootState) => state.filter
  );
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const gamesData = items;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gamesData.slice(indexOfFirstGame, indexOfLastGame);

  useEffect(() => {
    dispatch(fetchGames({}));
  }, []);

  const games = currentGames.map((game) => (
    <GameBlock key={game.id} {...game} />
  ));

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
        <>
          <div className={styles.content}>{games}</div>
          <Pagination
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 16,
            }}
            current={currentPage}
            onChange={(page: number) => setCurrentPage(page)}
            total={items.length}
            pageSize={15}
            showSizeChanger={false}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
