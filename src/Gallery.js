// src/Gallery.js
import React from 'react';
import './Gallery.css';

const images = [
  '/images/img_1.jpg',
  '/images/img_2.jpg',
  '/images/img_3.jpg',
  '/images/img_4.jpg',
  '/images/img_5.jpg',
  '/images/img_6.jpg',
  // Add more as needed
];

export default function Gallery() {
  return (
    <div className="gallery">
      <h2>New Journey Begins 💕</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`memory ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
