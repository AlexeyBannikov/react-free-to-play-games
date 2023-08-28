import React from 'react';
import styles from './GamesNotFound.module.css';

const GamesNotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Игры не найдены <span>😕</span>
      </h2>
    </div>
  );
};

export default GamesNotFound;
