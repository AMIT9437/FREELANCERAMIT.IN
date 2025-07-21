import React from "react";
import TopServices from "../components/TopServices";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Freelancer Amit's World
Your one-stop destination for Web Development and Business Legal Services – from stunning websites to GST, ITR, and company registration.
Affordable. Reliable. On Time. Every Time.</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <img
          src="/images/your-photo.jpg"
          alt="Amit's Photo"
          style={{ width: "120px", borderRadius: "60px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
        <div>
          <h2>AMIT SAMAL</h2>
          <p><strong>🎓 About My Qualifications:</strong> [I hold a Bachelor of Commerce (B.Com) degree with a specialization in Accounting and Taxation, which laid a strong foundation in finance, tax laws, and business principles. Currently, I am pursuing the professional CMA (Cost and Management Accountancy) course, where I’m gaining in-depth knowledge of cost accounting, financial management, strategic decision-making, and taxation. In addition to my academic journey, I am certified in GST, Income Tax Return (ITR) filing, and various aspects of business compliance.

On the technical side, I specialize in web development using HTML, CSS, and Python (Flask), and have hands-on experience in designing responsive, user-friendly websites. My design skills extend to tools like Canva and Adobe Photoshop, which I use to create compelling graphics for businesses, influencers, and creators. With this combined expertise in finance and tech, I help individuals and small enterprises build a strong digital and professional presence]</p>
          <p><strong>👋 About Me:</strong> [Hi! I'm Amit Samal, a passionate freelancer dedicated to helping individuals, startups, and small businesses grow — both digitally and financially. With a background in commerce and hands-on expertise in business compliance and web development, I bridge the gap between professional accounting services and creative digital solutions.

From GST registration to income tax filing, and from designing personalized websites to crafting custom graphics — I do it all under one roof. I believe in simplifying complex processes, whether it's launching a business legally or building a beautiful online presence.

Currently pursuing my CMA (Cost and Management Accountancy), I stay updated with the latest in finance and technology to deliver value-driven results for every client. Whether you're an influencer needing a personal website or a business looking for registration and compliance help — I’m here to make it easy for you.

Let’s grow your brand, together.]</p>
        </div>
      </div>
      <hr style={{ margin: "2rem 0" }} />
      <TopServices />
    </div>
  );
}
