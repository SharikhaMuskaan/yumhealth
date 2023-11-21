import React from 'react';
import './Rectangle.css';
import reactRectangle from '../assets/img/Rectangle.svg';

export const Rectangle_1 = () => {
  return (
    <div className="Rectangle_1" style={{ backgroundImage: `url(${reactRectangle})`, width: '100vw', position: 'absolute', top: '0' }}>
    </div>
  );
};
