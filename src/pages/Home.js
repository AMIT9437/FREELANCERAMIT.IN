import React from 'react';
import './Home.css'; // create this CSS file for styling
import TopServices from '../components/TopServices';
import profilePhoto from '../../public/images/your-photo.jpg';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Header/Nav */}
      <header className="navbar">
        <div className="logo">Freelancer Amit</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/price-details">Pricing</a>
          <a href="/documents">Documents</a>
          <a href="/about">About</a>
          <a href="/contact-us">Contact</a>
        </nav>
      </header>

      {/* Welcome Message */}
      <section className="welcome-section">
        <h1>Welcome to <span>Freelancer Amit's World</span></h1>
        <p>Your trusted destination for Web Development and Business Legal Services.</p>
      </section>

      {/* Profile Photo */}
      <section className="photo-section">
        <img src={profilePhoto} alt="Freelancer Amit" className="profile-photo" />
      </section>

      {/* About Me */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a B.Com graduate specializing in Accounting & Taxation and currently pursuing CMA. 
          I'm certified in GST, ITR Filing, and Business Compliance, with strong experience in 
          Web Development (HTML, CSS, Python/Flask) and Graphic Design using Canva and Photoshop. 
          I create high-impact solutions for startups, influencers, and small businesses.
        </p>
      </section>

      {/* Top Services */}
      <section className="services-section">
        <h2>Top Services</h2>
        <TopServices /> {/* already in your components */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About</a> | 
          <a href="/contact-us">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Freelancer Amit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
