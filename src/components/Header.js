import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#4a90e2", padding: "0.8rem 1rem", color: "white" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <h2 style={{ margin: 0 }}>Freelancer Amit</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
          <Link to="/price-details" style={{ color: "white", textDecoration: "none" }}>Pricing</Link>
          <Link to="/documents" style={{ color: "white", textDecoration: "none" }}>Documents</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/contact-us" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </div>
      </nav>
    </header>
  );
}
