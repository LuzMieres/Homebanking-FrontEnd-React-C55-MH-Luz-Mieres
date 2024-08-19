import React, { useState, useEffect } from 'react';
import '../styles/style.css';

const Carrousel = () => {
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
    <div>
      <div className="carousel">
        {images.map((image, index) => (
          <img className='carousel-image'
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