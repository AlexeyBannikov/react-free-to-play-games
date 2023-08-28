import React from 'react';
import { Carousel } from 'antd';

const carouselStyle: React.CSSProperties = {
  width: 600,
  height: 300,
  boxShadow: '0 0 10px #000',
};

interface ICarousel {
  children: React.ReactNode;
}

const ScreenshotsCarousel = ({ children }: ICarousel) => {
  return (
    <Carousel autoplay style={carouselStyle}>
      {children}
    </Carousel>
  );
};

export default ScreenshotsCarousel;
