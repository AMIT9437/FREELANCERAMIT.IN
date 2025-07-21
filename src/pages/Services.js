import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";

const colors = [
  "#FFB74D", "#81C784", "#64B5F6", "#BA68C8", "#FFD54F", "#4FC3F7", "#E57373", "#A1887F"
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginBottom: "1rem", fontWeight: "bold" }}>All Services</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            style={{
              background: colors[idx % colors.length],
              color: "#fff",
              padding: "1.5rem 1rem",
              borderRadius: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
              cursor: "pointer",
              transition: "transform 0.2s",
              minHeight: "130px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{service.name}</span>
            <span style={{ marginTop: "0.4rem", fontSize: "0.95rem", fontWeight: "normal" }}>
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}