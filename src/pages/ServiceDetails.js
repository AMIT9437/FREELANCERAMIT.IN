import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find(s => String(s.id) === serviceId);

  if (!service) return <div>Service not found.</div>;

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: "2rem 1rem" }}>
      <h2 style={{ color: "#4A90E2", fontWeight: "bold" }}>{service.name}</h2>
      <p style={{ margin: "1rem 0", fontSize: "1.05rem" }}>{service.about}</p>
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          borderRadius: "1rem",
          background: "linear-gradient(90deg, #81C784, #4FC3F7)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.13)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "bounceIn 0.7s",
        }}
      >
        <span style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "#fff",
          marginBottom: "0.3rem"
        }}>
          {service.name}
        </span>
        <span style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#fff",
          animation: "pricePop 1.2s",
        }}>
          {service.price}
        </span>
      </div>
      <style>
        {`
          @keyframes bounceIn {
            0% { transform: scale(0.7); opacity: 0; }
            60% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); }
          }
          @keyframes pricePop {
            0% { opacity: 0; transform: scale(0.7); }
            70% { opacity: 1; transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}