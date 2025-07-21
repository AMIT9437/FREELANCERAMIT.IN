import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} Freelancer Amit. All rights reserved.
      </span>
    </footer>
  );
}
