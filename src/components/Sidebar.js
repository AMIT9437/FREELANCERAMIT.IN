import React from "react";
import { NavLink } from "react-router-dom";

const sidebarStyle = {
  width: "220px",
  background: "linear-gradient(135deg, #4a90e2, #9013fe)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "2rem 1rem",
  minHeight: "100vh",
  boxShadow: "2px 0 8px rgba(0,0,0,0.1)"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "1rem 0",
  fontSize: "1.1rem",
  fontWeight: "bold",
  borderRadius: "4px",
  padding: "0.5rem 1rem",
  transition: "background 0.2s"
};

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <NavLink style={linkStyle} to="/">Home</NavLink>
      <NavLink style={linkStyle} to="/services">Services</NavLink>
      <NavLink style={linkStyle} to="/price-details">Price Details</NavLink>
      <NavLink style={linkStyle} to="/documents">Documents</NavLink>
      <NavLink style={linkStyle} to="/contact-us">Contact Us</NavLink>
      <NavLink style={linkStyle} to="/about">About</NavLink>
      <NavLink style={linkStyle} to="/login">Login</NavLink>
      <NavLink style={linkStyle} to="/signup">Signup</NavLink>
    </div>
  );
}