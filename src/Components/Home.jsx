import React, { useState,useEffect } from 'react';
import './Home.css';
import { FaBullhorn } from 'react-icons/fa';
const faqs = [
  {
    question: "How can I update my Arrival Scanning if I am unable to do so at the airport?",
    answer: "You can update your Arrival Scanning at the Mumineen Help Desk located at the venue. Please bring your ITS card and travel documents."
  },
  {
    question: "Where is the Mumineen Help Desk located?",
    answer: "The Mumineen Help Desk is located near the main entrance of the Ratlam Relay Centre."
  },
  {
    question: "Can I use international credit/debit cards in Sri Lanka?",
    answer: "Yes, most international credit/debit cards are accepted at major hotels and stores. However, it is advisable to carry some local currency for small purchases."
  },
  {
    question: "What should I do if I have lost my ITS card?",
    answer: "Please report to the Mumineen Help Desk immediately. They will assist you with the necessary steps to get a replacement."
  }
];


const Home = () => {
  useEffect(() => {
  const targetDate = new Date("2025-06-27T00:00:00"); // 🔁 Update with real Ashara start date

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").textContent = "Ashara has begun!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const interval = setInterval(updateCountdown, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <div>

    <div className="image-container">
        <img
          src="/ahlan.png" // 🔄 Replace with your actual image name & path
          alt="Ashara 1447H"
          className="centered-image"
        />
      </div>

      <section className="announcement-container">
        {/* Flex container with two columns */}
        <div className="announcement-section">
          {/* English Message (Left Column) */}
          <div className="left-announcement">
            <div className="announcement-header">
              <FaBullhorn />
              <span>Announcement </span>
            </div>
            <p>
              Mumineen must make travel arrangements only after receiving Raza for <strong>Ashara Mubaraka 1447H</strong> at <span className="highlight">Ratlam Relay Centre</span>.
            </p>
          </div>
          {/* Urdu Message (Right Column) */}
          {/* <div className="right-announcement">
            <div className="announcement-header">
              <FaBullhorn />
              <span>اعلان</span>
            </div>
            <p>
              سگلا مہمانوں سی التماس چھے کہ رتلام <br />
              ریلیے سینٹر واسطے رضا فضل قائی اہنا <br />
              بعد ے سفر کرواں نی تیاری کرے۔
            </p>
          </div> */}
        </div>
      </section>
      <section className="announcement-container">
        {/* Flex container with two columns */}
        <div className="announcement-section">
          {/* English Message (Left Column) */}
          <div className="left-announcement">
            <div className="announcement-header">
              <FaBullhorn />
              <span> </span>
            </div>
            <p>
             

            </p>
          </div>
        </div>
      </section>
{/* Footer Section */}
<footer className="footer-container">
  <div className="footer-content">
    {/* Quick Links */}
    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="https://its52.com">ITS52</a></li>
        <li><a href="https://asharamubaraka.net">Ashara Website</a></li>
        {/* <li><a href="#calendar">Hijri Calendar</a></li> */}
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-column">
  <h3>Contact Us</h3>
  <p>
    Email: <a href="mailto:help@ashararelaycenter.website" className="email-link">help@ashararelaycenter.website</a>
  </p>
  <p>Phone: +91 99999 99999</p>
  <p>Address: Burhani Guards, Ratlam, MP</p>
</div>


    {/* Countdown */}
    <div className="footer-column">
      <h3>Ashara 1447H Countdown</h3>
      <div id="countdown" className="countdown-timer">Loading...</div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Burhani Guards Ratlam. All rights reserved.</p>
    <p>Developed & Designed By : Murtaza Dawoodji & Aziz Kharwawala </p>
  </div>
</footer>


    </div>
  );
};




export default Home;
