import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        <h1>Ничего не найдено</h1>
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует на нашем веб-сайте.
      </p>
    </div>
  );
};

export default NotFound;
