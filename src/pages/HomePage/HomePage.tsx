import React from 'react';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import GameList from '@/components/GameList/GameList';

const HomePage: React.FC = () => {
  return (
    <>
      <FilterBlock />
      <GameList />
    </>
  );
};

export default HomePage;
