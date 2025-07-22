import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual backend POST request
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif", color: "#2c3e50" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>📞 Contact Us</h1>

      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <p><strong>📍 Address:</strong> Rasulgar, Bhubaneswar, Odisha-751010, India</p>
        <p><strong>📞 Phone:</strong> +91-8480927094</p>
        <p><strong>📧 Email:</strong> amitfreelance.services@gmail.com</p>
        <p><strong>🌐 Website:</strong> www.freelanceramit.in</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "1rem",
  width: "100%",
};

export default Contact;
