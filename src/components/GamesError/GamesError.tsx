import styles from './GamesError.module.css';

const GamesError = () => {
  return (
    <div className={styles.error}>
      <h2>
        Произошла ошибка <span>😕</span>
      </h2>
      <p>
        К сожалению, не удалось получить игры. Попробуйте повторить попытку
        позже.
      </p>
    </div>
  );
};

export default GamesError;