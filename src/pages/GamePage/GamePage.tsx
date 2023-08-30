import GamesError from '@/components/GamesError/GamesError';
import Loader from '@/components/Loader';
import { fetchGame } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GamePage.module.css';
import { reverseDate } from '@/utils/reverseDate';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentGame, gameStatus } = useAppSelector(
    (state: RootState) => state.game
  );
  const { id } = useParams();
  const releaseDate = reverseDate(currentGame?.release_date ?? 'N/A');

  useEffect(() => {
    dispatch(fetchGame({ id: +id! }));
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
      {gameStatus === Status.ERROR && <GamesError />}
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
    </>
  );
};

export default GamePage;
