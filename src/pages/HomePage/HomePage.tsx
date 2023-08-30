import React from 'react';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import GameList from '@/components/GameList/GameList';

//TODO: local storage 5 min fetch game page
const HomePage: React.FC = () => {
  return (
    <>
      <FilterBlock />
      <GameList />
    </>
  );
};

export default HomePage;
