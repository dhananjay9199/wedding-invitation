// src/Gallery.js
import React from 'react';
import "./App.css";


export default function Map() {
  return (
    <div className="location-section">
        <h2>📍 विवाह स्थळ : </h2>
        <p>राधाकृष्ण मंगलकार्यालय, ग्रीन पार्क - २, जिंतुर</p>
        <p>Click below to open in Google Maps:</p>
        <iframe
          title="Wedding location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.602914359189!2d76.69185287467785!3d19.601505535266174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd06f0a4552b4c5%3A0x5ac85b4f330bdf8a!2sRadha%20Krishna%20Mangal%20Karyalaya!5e0!3m2!1sen!2sin!4v1744036991326!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  );
}
