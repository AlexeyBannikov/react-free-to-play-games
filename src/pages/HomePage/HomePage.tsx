import React from 'react';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import GameList from '@/components/GameList/GameList';

//TODO: save to url
//FIXME: remove scroll jumping
//TODO: three axios request on game page
//TODO: abort controller
//TODO: unit tests
//FIXME: убрать возникновение курсора у текста

const HomePage: React.FC = () => {
  return (
    <>
      <FilterBlock />
      <GameList />
    </>
  );
};

export default HomePage;
