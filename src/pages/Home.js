import React from "react";
import TopServices from "../components/TopServices";

export default function Home() {
  const containerStyle = {
    maxWidth: "960px",
    margin: "auto",
    padding: "1rem",
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: 1.6,
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem 0",
    borderBottom: "1px solid #ddd",
  };

  const navItemStyle = {
    margin: "0.5rem",
    fontSize: "1rem",
    color: "#333",
    textDecoration: "none",
    fontWeight: "600",
  };

  const imageStyle = {
    width: "120px",
    borderRadius: "60px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    margin: "1rem 0",
  };

  const footerStyle = {
    marginTop: "2rem",
    paddingTop: "1rem",
    borderTop: "1px solid #ccc",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#4a90e2" }}>
          Freelancer Amit
        </div>
        <div>
          <a href="/" style={navItemStyle}>Home</a>
          <a href="/services" style={navItemStyle}>Services</a>
          <a href="/about" style={navItemStyle}>About</a>
          <a href="/contactus" style={navItemStyle}>Contact</a>
        </div>
      </nav>

      {/* Welcome */}
      <section style={{ marginTop: "1.5rem" }}>
        <h1 style={{ fontSize: "1.6rem", color: "#222" }}>
          Welcome to Freelancer Amit's World
        </h1>
        <p style={{ fontWeight: "500", color: "#444" }}>
          Your one-stop destination for Web Development & Business Legal Services — from stunning websites to GST, ITR, and Company Registration.
          <br />
          <span style={{ color: "#4a90e2" }}>Affordable. Reliable. On Time. Every Time.</span>
        </p>
      </section>

      {/* Profile Photo */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/images/your-photo.jpg" alt="Amit Samal" style={imageStyle} />
      </div>

      {/* About Me */}
      <section>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>👋 About Me</h2>
        <p>
          Hi! I'm <strong>Amit Samal</strong>, a passionate freelancer helping individuals, startups, and small businesses grow — both digitally and financially.
          I bridge the gap between professional accounting services and creative digital solutions.
        </p>
        <p>
          From GST registration to Income Tax filing, and from designing websites to crafting custom graphics —
          I simplify complex processes with professional care and creative energy.
        </p>
      </section>

      {/* Qualifications */}
      <section>
        <h2 style={{ fontSize: "1.3rem", marginTop: "2rem" }}>🎓 My Qualifications</h2>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Bachelor of Commerce (B.Com) – Accounting & Taxation</li>
          <li>Currently pursuing CMA (Cost and Management Accountancy)</li>
          <li>Certified in GST, ITR Filing & Business Compliance</li>
          <li>Skilled in Web Development (HTML, CSS, Python/Flask)</li>
          <li>Proficient in Canva & Adobe Photoshop</li>
        </ul>
      </section>

      {/* Top Services */}
      <hr style={{ margin: "2rem 0" }} />
      <TopServices />

      {/* Footer */}
      <footer style={footerStyle}>
        <p><a href="/about">About</a> | <a href="/contactus">Contact Us</a></p>
        <p>© 2025 Freelancer Amit. All rights reserved.</p>
      </footer>
    </div>
  );
}
