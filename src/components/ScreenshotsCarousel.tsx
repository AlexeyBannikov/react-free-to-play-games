import React from 'react';
import { Carousel, Image } from 'antd';
import { IScreenshot } from '@/redux/game/types';
import styles from '@/pages/GamePage/GamePage.module.css';

const carouselStyle: React.CSSProperties = {
  maxWidth: '80vw',
};

interface ICarousel {
  screenshots: IScreenshot[];
}

const ScreenshotsCarousel = ({ screenshots }: ICarousel) => {
  return (
    <div className={styles.carousel}>
      <Carousel autoplay style={carouselStyle}>
        {screenshots.map((screenshot) => (
          <li key={screenshot.id}>
            <Image
              src={screenshot.image}
              alt='game screenshot'
              style={{
                width: '100%',
              }}
            />
          </li>
        ))}
      </Carousel>
    </div>
  );
};

export default ScreenshotsCarousel;
