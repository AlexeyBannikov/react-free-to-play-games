import GameNotFound from '@/components/GamesNotFound/GameNotFound';
import Loader from '@/components/Loader';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { reverseDate } from '@/utils/reverseDate';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GamePage.module.css';
import { fetchGame } from '@/redux/game/asyncActions';
import { setCurrentGame, setGameStatus } from '@/redux/game/slice';

const GamePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentGame, gameStatus } = useAppSelector(
    (state: RootState) => state.game
  );
  const { id } = useParams();
  const releaseDate = reverseDate(currentGame?.release_date ?? 'N/A');

  useEffect(() => {
    if (localStorage.getItem(String(id))) {
      dispatch(setGameStatus(Status.SUCCESS));
      dispatch(
        setCurrentGame(
          JSON.parse(localStorage.getItem(String(id))!).currentGame
        )
      );
    } else {
      dispatch(fetchGame({ id: +id! }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentGame) {
      if (!localStorage.getItem(String(currentGame.id))) {
        localStorage.setItem(
          String(currentGame.id),
          JSON.stringify({ time: Date.now(), currentGame: currentGame })
        );
      }
    }
  }, [currentGame]);

  useEffect(() => {
    function checkExpire() {
      const now = Date.now();
      const keys = Object.keys(localStorage);

      for (const key of keys) {
        if (now - JSON.parse(localStorage.getItem(key)!).date >= 300000) {
          localStorage.removeItem(key);
        }
      }
    }

    setInterval(checkExpire, 60000);
  }, []);

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Button
        type='primary'
        icon={<ArrowLeftOutlined />}
        onClick={navigateToHome}
      >
        Back to game list
      </Button>
      {gameStatus === Status.ERROR && <GameNotFound />}
      {gameStatus === Status.LOADING && <Loader />}
      {gameStatus === Status.SUCCESS && currentGame && (
        <div className={styles.wrapper}>
          <div className={styles.gameImages}>
            <img src={currentGame.thumbnail} alt='game image' />
            <ScreenshotsCarousel screenshots={currentGame.screenshots} />
          </div>
          <div className={styles.gameDetails}>
            <h1>{currentGame.title}</h1>
            <span>Release date: {releaseDate}</span>
            <span>Publisher: {currentGame.publisher ?? 'N/A'}</span>
            <span>Developer: {currentGame.developer ?? 'N/A'}</span>
            <span>Genre: {currentGame.genre ?? 'N/A'}</span>
            <div className={styles.requirements}>
              <h2>Minimum system requirements: </h2>
              <span>
                Graphics:{' '}
                {currentGame.minimum_system_requirements?.graphics ?? 'N/A'}
              </span>
              <span>
                OS: {currentGame.minimum_system_requirements?.os ?? 'N/A'}
              </span>
              <span>
                Memory:{' '}
                {currentGame.minimum_system_requirements?.memory ?? 'N/A'}
              </span>
              <span>
                Processor:{' '}
                {currentGame.minimum_system_requirements?.processor ?? 'N/A'}
              </span>
              <span>
                Storage:{' '}
                {currentGame.minimum_system_requirements?.storage ?? 'N/A'}
              </span>
            </div>
            <h2>Description</h2>
            <span>{currentGame.description ?? 'N/A'}</span>
          </div>
        </div>
      )}
      {gameStatus === Status.SUCCESS && !currentGame && <GameNotFound />}
    </>
  );
};

export default GamePage;
