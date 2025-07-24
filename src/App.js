import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import PriceDetails from "./pages/PriceDetails";
import Documents from "./pages/Documents";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ✅ New Pages
import Inspiration from "./pages/Inspiration";
import InspirationDetails from "./pages/InspirationDetails";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", background: "#f7f7fa" }}>
        <Header />
        <div style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/price-details" element={<PriceDetails />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* ✅ New Inspiration Routes */}
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/inspiration/:id" element={<InspirationDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
