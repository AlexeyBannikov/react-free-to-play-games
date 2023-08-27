import { fetchGames } from '@/redux/game/asyncActions';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames({}));
  }, []);

  return <div>MainPage</div>;
};

export default MainPage;
