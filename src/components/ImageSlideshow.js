// src/components/ImageSlideshow.js
import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';
import MyPhoto from '../imgs/my_photo.jpg';
import JaeNeungBongSa from '../imgs/재능봉사.jpg';

const images = [
  MyPhoto,
  JaeNeungBongSa,
];

function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="slideshow-arrow left" onClick={goToPrevious}>&lt;</button>
      <button className="slideshow-arrow right" onClick={goToNext}>&gt;</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default ImageSlideshow;
