import React from "react";
import { services } from "../data/services";

const topServiceIds = [1, 2, 3, 4, 5, 6]; // IDs of your top services

export default function TopServices() {
  const topServices = services.filter(s => topServiceIds.includes(s.id));
  return (
    <div>
      <h3>Our Top Services</h3>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {topServices.map(service => (
          <li key={service.id} style={{
            background: "#9013fe",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            <a href={`/services/${service.id}`} style={{ color: "#fff", textDecoration: "none" }}>{service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}