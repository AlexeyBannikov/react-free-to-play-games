import GamesError from '@/components/GamesError/GamesError';
import Loader from '@/components/Loader';
import { fetchGame } from '@/redux/game/asyncActions';
import { Status } from '@/redux/game/types';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentGame, gameStatus } = useAppSelector(
    (state: RootState) => state.game
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchGame({ id: +id }));
    }
  }, [id]);

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
        <>
          <div>Game</div>
        </>
      )}
    </>
  );
};

export default GamePage;
