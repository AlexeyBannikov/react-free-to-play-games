import React from 'react';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import GameList from '@/components/GameList/GameList';

//TODO: save to url
//FIXME: remove scroll jumping
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
