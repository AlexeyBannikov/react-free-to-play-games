import { setCurrentPage } from '@/redux/filter/slice';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
import GameBlock from '@/components/GameBlock/GameBlock';
import { Pagination } from 'antd';
import styles from './GameList.module.css';
import { Status } from '@/redux/game/types';
import GamesError from '@/components/GamesError/GamesError';
import Loader from '@/components/Loader';
import { fetchGames } from '@/redux/game/asyncActions';

const GameList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state: RootState) => state.game);
  const { currentPage } = useAppSelector((state: RootState) => state.filter);
  const gamesPerPage = 15;
  const gamesData = items.length > 0 ? items : [];
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gamesData.slice(indexOfFirstGame, indexOfLastGame);
  const { currentPlatform, currentGenre, currentSort } = useAppSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const platform = currentPlatform.platformProperty;
    const genre = currentGenre.genreProperty;
    const sortBy = currentSort.sortProperty;

    dispatch(fetchGames({ platform, genre, sortBy }));
  }, [
    currentPlatform.platformProperty,
    currentGenre.genreProperty,
    currentSort.sortProperty,
  ]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const games = currentGames.map((game) => (
    <GameBlock key={game.id} {...game} />
  ));

  return (
    <>
      {status === Status.ERROR && <GamesError />}
      {status === Status.LOADING && <Loader />}
      {status === Status.SUCCESS && gamesData.length > 0 && (
        <>
          <div className={styles.wrapper}>{games}</div>
          <Pagination
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 16,
            }}
            current={currentPage}
            onChange={(page: number) => handlePageChange(page)}
            total={items.length}
            pageSize={gamesPerPage}
            showSizeChanger={false}
          />
        </>
      )}
      {status === Status.SUCCESS && gamesData.length === 0 && (
        <div>Игры не найдены</div>
      )}
    </>
  );
};

export default GameList;
