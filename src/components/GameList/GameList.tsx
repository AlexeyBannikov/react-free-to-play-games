import GameBlock from '@/components/GameBlock/GameBlock';
import GamesNotFound from '@/components/GamesNotFound/GamesNotFound';
import Loader from '@/components/Loader';
import { setCurrentPage } from '@/redux/filter/slice';
import { fetchGames } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { Pagination } from 'antd';
import React, { useEffect } from 'react';
import styles from './GameList.module.css';

const GameList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { games, gamesStatus } = useAppSelector(
    (state: RootState) => state.game
  );
  const { currentPage } = useAppSelector((state: RootState) => state.filter);
  const gamesPerPage = 15;
  const gamesData = games?.length > 0 ? games : [];
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

  const gameList = currentGames.map((game) => (
    <GameBlock key={game.id} {...game} />
  ));

  return (
    <>
      {gamesStatus === Status.ERROR && <GamesNotFound />}
      {gamesStatus === Status.LOADING && <Loader />}
      {gamesStatus === Status.SUCCESS && gamesData.length > 0 && (
        <>
          <div className={styles.wrapper}>{gameList}</div>
          <Pagination
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 16,
            }}
            current={currentPage}
            onChange={(page: number) => handlePageChange(page)}
            total={games.length}
            pageSize={gamesPerPage}
            showSizeChanger={false}
          />
        </>
      )}
      {gamesStatus === Status.SUCCESS && gamesData.length === 0 && (
        <GamesNotFound />
      )}
    </>
  );
};

export default GameList;
