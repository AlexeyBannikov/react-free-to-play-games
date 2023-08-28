import React from 'react';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import GameList from '@/components/GameList/GameList';

//TODO: save to url
//TODO: abort controller
//TODO: unit tests
//TODO: local storage 5 min fetch game page
//FIXME: проверить ошибки

const HomePage: React.FC = () => {
  return (
    <>
      <FilterBlock />
      <GameList />
    </>
  );
};

export default HomePage;
