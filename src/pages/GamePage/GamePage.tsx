import GamesError from '@/components/GamesError/GamesError';
import Loader from '@/components/Loader';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';
import { fetchGame } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GamePage.module.css';
import { reverseDate } from '@/utils/reverseDate';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentGame, gameStatus } = useAppSelector(
    (state: RootState) => state.game
  );
  const { id } = useParams();
  const releaseDate = reverseDate(currentGame?.release_date ?? '');

  useEffect(() => {
    dispatch(fetchGame({ id: +id! }));
  }, []);

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Button icon={<ArrowLeftOutlined />} onClick={navigateToHome}>
        Back to game list
      </Button>
      {gameStatus === Status.ERROR && <GamesError />}
      {gameStatus === Status.LOADING && <Loader />}
      {gameStatus === Status.SUCCESS && currentGame && (
        <div className={styles.wrapper}>
          <div className={styles.upper}>
            <div className={styles.leftBlock}>
              <img src={currentGame.thumbnail} alt='game photo' />
              <div className={styles.details}>
                <span className={styles.title}>{currentGame.title}</span>
                <span>Release date: {releaseDate}</span>
                <span>Publisher: {currentGame.publisher}</span>
                <span>Developer: {currentGame.developer}</span>
                <span>Genre: {currentGame.genre}</span>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <h2>Description: </h2>
              <p>{currentGame.description}</p>
              <div className={styles.requirements}>
                <h2>Minimum system requirements: </h2>
                <span>
                  Graphics: {currentGame.minimum_system_requirements.graphics}
                </span>
                <span>OS: {currentGame.minimum_system_requirements.os}</span>
                <span>
                  Memory: {currentGame.minimum_system_requirements.memory}
                </span>
                <span>
                  Processor: {currentGame.minimum_system_requirements.processor}
                </span>
                <span>
                  Storage: {currentGame.minimum_system_requirements.storage}
                </span>
              </div>
              <h2>Screenshots Gallery: </h2>
              <ScreenshotsCarousel>
                {currentGame.screenshots.map((screenshot) => (
                  <li key={screenshot.id}>
                    <img src={screenshot.image} alt='game screenshot' />
                  </li>
                ))}
              </ScreenshotsCarousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GamePage;
