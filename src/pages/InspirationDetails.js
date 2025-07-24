// src/pages/InspirationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const inspirationData = {
  ashim: {
    name: 'CMA Ashim Kumar Dhala',
    image: '/images/ashim.jpg',
    message: 'Ashim Bhai is not just a mentor but a true elder brother in my life...',
  },
  arijit: {
    name: 'Arijit Panda',
    image: '/images/arijit.jpg',
    message: 'Arijit Bhai is someone I admire deeply...',
  },
  deepak: {
    name: 'Deepak Kumar Sahoo',
    image: '/images/deepak.jpg',
    message: 'Deepak Bhai has always given me clarity...',
  },
  jaybrat: {
    name: 'Jaybrat Das (JD Bro)',
    image: '/images/jd.jpg',
    message: 'JD Bro has been full of positive energy...',
  },
  uma: {
    name: 'Umakanta Satpathy',
    image: '/images/uma.jpg',
    message: 'Uma Bhai is a calm and kind-hearted person...',
  },
  avinas: {
    name: 'Avinas Senapati',
    image: '/images/avinas.jpg',
    message: 'Avinas Bhai’s dedication and hard work are inspiring...',
  },
  sahil: {
    name: 'Sahil Sahoo',
    image: '/images/sahil.jpg',
    message: 'Sahil Bhai is very supportive and encouraging...',
  },
  anil: {
    name: 'Anil Paswan Sir',
    image: '/images/anil.jpg',
    message: 'Anil Sir is more than a teacher...',
  },
  friends: {
    name: 'Nikhil & Dipu',
    image: '/images/nikhil_dipu.jpg',
    message: 'These two are real friends and my emotional support...',
  },
};

const InspirationDetail = () => {
  const { id } = useParams();
  const person = inspirationData[id];

  if (!person) {
    return <div style={{ padding: '30px', color: 'red' }}>Inspiration not found.</div>;
  }

  return (
    <div style={{
      padding: '30px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
      minHeight: '100vh'
    }}>
      <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#2d2d2d' }}>{person.name}</h2>
      <img
        src={person.image}
        alt={person.name}
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          marginBottom: '20px'
        }}
      />
      <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '600px', margin: 'auto', color: '#333' }}>
        {person.message}
      </p>
    </div>
  );
};

export default InspirationDetail;
