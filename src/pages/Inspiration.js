import React from 'react';
import { useNavigate } from 'react-router-dom';

const inspirations = [
  {
    name: 'ASHIM BHAI',
    id: 'ashim',
    image: '/images/ashim.jpg',
  },
  {
    name: 'ARIJIT BHAI',
    id: 'arijit',
    image: '/images/arijit.jpg',
  },
  {
    name: 'DEEPAK BHAI',
    id: 'deepak',
    image: '/images/deepak.jpg',
  },
  {
    name: 'JAYBRAT BHAI',
    id: 'jaybrat',
    image: '/images/jd.jpg',
  },
  {
    name: 'UMAKANTA BHAI',
    id: 'uma',
    image: '/images/uma.jpg',
  },
  {
    name: 'AVINAS BHAI',
    id: 'avinas',
    image: '/images/avinas.jpg',
  },
  {
    name: 'SAHIL BHAI(PUSHPA RAJ)',
    id: 'sahil',
    image: '/images/sahil.jpg',
  },
  {
    name: 'ANIL PASWAN SIR',
    id: 'anil',
    image: '/images/anil.jpg',
  },
  {
    name: 'NIKHIL BHAI & CHIKU',
    id: 'friends',
    image: '/images/nikhil_dipu.jpg',
  },
];

const Inspiration = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Inspiration & Strength 💖</h2>
      <div style={styles.gridContainer}>
        {inspirations.map((person) => (
          <div
            key={person.id}
            style={styles.card}
            onClick={() => navigate(`/inspiration/${person.id}`)}
          >
            <img
              src={person.image}
              alt={person.name}
              style={styles.image}
            />
            <h3 style={styles.name}>{person.name}</h3>
            <button style={styles.button}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px 20px',
    background: 'linear-gradient(to right, #c2e9fb, #f9fafe)',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '40px',
    color: '#333',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '4px solid #4e9af1',
    marginBottom: '15px',
  },
  name: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4e9af1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};

export default Inspiration;
