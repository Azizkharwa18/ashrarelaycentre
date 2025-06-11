// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [countdown, setCountdown] = useState("Loading...");

  useEffect(() => {
    const targetDate = new Date("2025-06-26T05:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown("Ashara has begun!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://its52.com" target="_blank" rel="noopener noreferrer">ITS52</a></li>
            <li><a href="https://asharamubaraka.net" target="_blank" rel="noopener noreferrer">Ashara Website</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:help@ashararelaycenter.website" className="email-link">help@ashararelaycenter.website</a></p>
          <p>Phone: +91 8959706169</p>
          <p>Address: Burhani Guards Office, Ratlam, MP</p>
        </div>

        <div className="footer-column">
          <h3>Ashara 1447H Countdown</h3>
          <div className="countdown-timer">{countdown}</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Burhani Guards Ratlam. All rights reserved.</p>
        <p>Developed & Designed By : Murtaza Dawoodji & Aziz Kharwawala</p>
      </div>
    </footer>
  );
};

export default Footer;
