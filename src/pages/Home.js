import React from "react";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div style={{ padding: "1rem", fontFamily: "Segoe UI, sans-serif", lineHeight: 1.6 }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ color: "#1e90ff" }}>🌐 Welcome to Freelancer Amit's World</h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "auto", fontWeight: "500" }}>
          <strong>
            Your one-stop destination for Web Development and Business Legal Services —
            from stunning websites to GST, ITR, and company registration. <br />
            Affordable. Reliable. On Time. Every Time.
          </strong>
        </p>
      </header>

      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem"
      }}>
        <img
          src="/images/your-photo.jpg"
          alt="Amit's Photo"
          style={{
            width: "140px",
            borderRadius: "50%",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        />
        <div style={{ maxWidth: "900px", textAlign: "left" }}>
          <h2 style={{ marginBottom: "0.5rem", color: "#333" }}>👤 Amit Samal</h2>

          <h3 style={{ color: "#007acc" }}>🎓 My Qualifications</h3>
          <p>
            I hold a <strong>Bachelor of Commerce (B.Com)</strong> degree with a specialization in Accounting and Taxation, 
            which laid a strong foundation in finance, tax laws, and business principles. Currently, 
            I am pursuing the professional <strong>CMA (Cost and Management Accountancy)</strong> course, 
            where I’m gaining in-depth knowledge of cost accounting, financial management, strategic decision-making, and taxation.
          </p>
          <p>
            Additionally, I am certified in <strong>GST, Income Tax Return (ITR) Filing</strong>, and business compliance. 
            I also specialize in <strong>Web Development</strong> using HTML, CSS, Python (Flask), and graphic design with 
            Canva and Adobe Photoshop.
          </p>

          <h3 style={{ color: "#007acc" }}>👋 About Me</h3>
          <p>
            Hi! I'm Amit Samal, a passionate freelancer dedicated to helping individuals, startups, and small businesses grow —
            both digitally and financially. With a background in commerce and hands-on expertise in business compliance and 
            web development, I bridge the gap between professional accounting services and creative digital solutions.
          </p>
          <p>
            From GST registration to income tax filing, and from designing websites to custom graphic design —
            I do it all under one roof. I believe in simplifying complex processes for my clients.
            Whether you're an influencer needing a personal website or a small business needing compliance help —
            I’m here to make it easy.
          </p>
          <p>
            Let’s grow your brand, together.
          </p>
        </div>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <TopServices />
      </section>
    </div>
  );
}
