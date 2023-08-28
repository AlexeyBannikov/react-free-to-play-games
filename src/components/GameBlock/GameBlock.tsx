import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameBlock.module.css';
import { reverseDate } from '@/utils/reverseDate';

interface IGameBlockProps {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  genre: string;
  thumbnail: string;
}

const GameBlock: React.FC<IGameBlockProps> = ({
  id,
  title,
  release_date,
  publisher,
  genre,
  thumbnail,
}) => {
  const releaseDate = reverseDate(release_date);

  return (
    <div className={styles.wrapper}>
      <Link to={`/game/${id}`} className={styles.block}>
        <img src={thumbnail} alt='game photo' />
        <div className={styles.description}>
          <div className={styles.upper}>
            <span>{title}</span>
            <span>{genre}</span>
          </div>
          <div className={styles.bottom}>
            <span className={styles.publisher}>{publisher}</span>
            <span>{releaseDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameBlock;
