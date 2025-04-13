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

const mama = [
  '/images/kumari_aadishree.jpg',
  '/images/kumari_mau.jpg',
];

const mavshi = [
  '/images/chiranjiv_aayansh.jpg',
];

const kaka = [
  '/images/parth dhanshree.jpg'
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
      <br/>
      <br/>
      <h3>मामाच्या लग्नाला यायचं ह..!<br/>कु. आदिश्री, कु. आदिती</h3>
      <div className="gallery-grid-kilbil">
        {mama.map((src, index) => (
          <img key={index} src={src} alt={`memory ${index + 1}`} />
        ))}
      </div>
      <br/>
      <br/>
      <h3>मावशी च्या लग्नाला यायचं ह..!<br/>चि . अयांश</h3>
      <div className="gallery-grid-kilbil">
        {mavshi.map((src, index) => (
          <img key={index} src={src} alt={`memory ${index + 1}`} />
        ))}
      </div>
      <br/>
      <br/>
      <h3>काका च्या लग्नाला यायच ह..!<br/> चि .पार्थ कु . धनश्री</h3>
      <div className="gallery-grid-kilbil">
        {kaka.map((src, index) => (
          <img key={index} src={src} alt={`memory ${index + 1}`} style={{width:"100%", height:"300px"}} />
        ))}
      </div>
    </div>
  );
}
