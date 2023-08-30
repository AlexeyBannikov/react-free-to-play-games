import React from 'react';
import styles from './GamesNotFound.module.css';

const GameNotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Игра не найдена <span>😕</span>
      </h2>
    </div>
  );
};

export default GameNotFound;
