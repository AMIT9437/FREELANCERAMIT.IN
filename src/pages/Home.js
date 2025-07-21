import React from "react";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Freelancer Amit</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <img
          src="/images/your-photo.jpg"
          alt="Amit's Photo"
          style={{ width: "120px", borderRadius: "60px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
        <div>
          <h2>AMIT KUMAR</h2>
          <p><strong>Degree:</strong> [Your Degree Here]</p>
          <p><strong>Qualification:</strong> [Your Qualifications Here]</p>
          <p><strong>Details:</strong> [Short About You]</p>
        </div>
      </div>
      <hr style={{ margin: "2rem 0" }} />
      <TopServices />
    </div>
  );
}