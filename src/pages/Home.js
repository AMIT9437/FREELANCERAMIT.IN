import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const services = [
  { name: "GST Registration", slug: "gst-registration", desc: "Register your business for GST quickly and easily." },
  { name: "ITR Filing (Individual)", slug: "itr-filing", desc: "Professional help with your income tax return filing." },
  { name: "PVT LTD Company Registration", slug: "pvt-ltd-registration", desc: "Start your private limited company hassle-free." },
  { name: "MSME Registration", slug: "msme-registration", desc: "Get your MSME certificate and avail government benefits." },
  { name: "Trademark Registration", slug: "trademark-registration", desc: "Protect your brand with trademark registration." },
  { name: "PAN Card Application (Business)", slug: "pan-card-business", desc: "Apply for a business PAN card online." },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Freelancer Amit</h1>
      <div className="profile-section">
        <img
          src="/profile.jpg"
          alt="Amit Kumar"
          className="profile-photo"
        />
        <div>
          <div className="profile-name">AMIT KUMAR</div>
          <div>Degree: <span>Your Degree Here</span></div>
          <div>Qualification: <span>Your Qualifications Here</span></div>
          <div>Details: <span>Short About You</span></div>
        </div>
      </div>
      <hr />
      <h2>Our Top Services</h2>
      <div className="top-services">
        {services.map((service) => (
          <div
            className="service-card"
            key={service.slug}
            onClick={() => navigate(`/services/${service.slug}`)}
            tabIndex={0}
            role="button"
            aria-pressed="false"
          >
            <div className="service-title">{service.name}</div>
            <div className="service-desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
