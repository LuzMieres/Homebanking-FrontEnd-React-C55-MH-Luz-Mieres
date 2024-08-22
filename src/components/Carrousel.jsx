import React, { useState, useEffect } from 'react';
import '../styles/style.css';

const Carrousel = ({ showNav }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'homebanking-banner3.jpg',
    'banner.jpg',
    'homebanking-banner2.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  return (
    <div className="w-full flex justify-center items-center">
    <div className={`carousel ${showNav ? 'carousel-small' : 'carousel-large'}`}>
      {images.map((image, index) => (
        <img className="carousel-image"
          key={index}
          src={image}
          alt={`Imagen ${index}`}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
    </div>
  </div>
  );
};

export default Carrousel;