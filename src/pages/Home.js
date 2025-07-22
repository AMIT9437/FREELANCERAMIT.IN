import React from "react";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "1rem" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Welcome to Freelancer Amit's World</h1>
        <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#555" }}>
          Your one-stop destination for Web Development and Business Legal Services — from stunning websites to GST, ITR, and company registration.
          <br />
          <strong>Affordable. Reliable. On Time. Every Time.</strong>
        </p>
      </section>

      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
        <img
          src="/images/your-photo.jpg"
          alt="Amit's Photo"
          style={{ width: "130px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        />
        <h2>AMIT SAMAL</h2>
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          🎓 <strong>About My Qualifications:</strong> I hold a Bachelor of Commerce (B.Com) degree with specialization in Accounting and Taxation.
          I’m also pursuing the prestigious CMA (Cost and Management Accountancy) qualification for advanced finance and strategy knowledge.
          Additionally, I’m certified in GST, ITR filing, and compliance services.
          <br /><br />
          💻 On the tech side, I specialize in full-stack web development using HTML, CSS, and Python (Flask). I'm skilled in tools like Canva and Photoshop to create sleek, custom graphics and designs. From legal registration to online presence, I provide one-stop business support for freelancers, influencers, and MSMEs.
        </p>
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          👋 <strong>About Me:</strong> I'm Amit Samal — passionate freelancer, business consultant, and web designer. I help individuals and small businesses
          simplify legal processes like GST, ITR, and company registration while building powerful digital footprints through websites and design.
          Let’s grow your business — financially and digitally.
        </p>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <TopServices />
      </section>

      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        <p><strong>About:</strong> Freelancer Amit provides 50+ services to entrepreneurs, students, influencers, and MSMEs across India.</p>
        <p><strong>Contact Us:</strong> Email: freelanceramit@yourmail.com | Phone: +91-XXXXXXXXXX</p>
        <p>© 2025 Freelancer Amit. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
