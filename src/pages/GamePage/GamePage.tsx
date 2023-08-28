import { http } from '@/api/config';
import Loader from '@/components/Loader';
import { TGame } from '@/redux/game/types';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GamePage: React.FC = () => {
  const [game, setGame] = React.useState<TGame>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await http.get('/game', {
          params: { id },
        });
        setGame(data);
      } catch (error) {
        navigate('/');
      }
    }
    fetchGame();
  }, []);

  if (!game) {
    return <Loader />;
  }

  return <div></div>;
};

export default GamePage;
