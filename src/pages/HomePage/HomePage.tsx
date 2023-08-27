import GameBlock from '@/components/GameBlock/GameBlock';
import GamesError from '@/components/GamesError/GamesError';
import Genres from '@/components/Genres/Genres';
import Loader from '@/components/Loader';
import Platforms from '@/components/Platforms/Platforms';
import Sort from '@/components/Sort/Sort';
import { setCurrentPage } from '@/redux/filter/slice';
import { fetchGames } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { Pagination } from 'antd';
import { useEffect } from 'react';
import styles from './HomePage.module.css';

//TODO: save to url
//FIXME: remove scroll jumping
//TODO: убрать отсюда то, что можно вынести (фильтры, ошибки, список игр)

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state: RootState) => state.game);
  const { currentPlatform, currentGenre, currentSort, currentPage } =
    useAppSelector((state: RootState) => state.filter);
  const gamesPerPage = 15;
  const gamesData = items.length > 0 ? items : [];
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gamesData.slice(indexOfFirstGame, indexOfLastGame);

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
    <div className={styles.root}>
      <div className={styles.filters}>
        <Platforms currentPlatform={currentPlatform.name} />
        <Genres currentGenre={currentGenre.name} />
        <Sort currentSort={currentSort.name} />
      </div>
      {status === Status.ERROR && <GamesError />}
      {status === Status.LOADING && <Loader />}
      {status === Status.SUCCESS && gamesData.length > 0 && (
        <>
          <div className={styles.content}>{games}</div>
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
    </div>
  );
};

export default HomePage;
