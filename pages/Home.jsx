import React from "react";
import '../styles/Home.css';
import { FaHardHat, FaTools, FaTruck, FaUsers, FaPhoneAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Anand Nagar</div>
        <div className="contact-info">
          {/* <span>📞 +904 236 897 22</span>
          <span>📧 info@email.com</span> */}
          <span>📍 Juhu Tara Road Santacruz West</span>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">SERVICES</a>
        <a href="#">PAGES</a>
        <a href="#">PROJECTS</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Suraj Cooperative Society <br /> DREAM PROJECTS</h1>
          <p>
            Magna voluptatum dolorem! Dolorem! Sociosqu commodo nobis impedit locatio? Magni felis, elementum? Possimus suscipit ratione, molestiae porro, nisi consequatur dicta.
          </p>
          <button>LEARN MORE</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>WHY CHOOSE US FOR PROJECTS!</h2>
        <p>
          Magnam voluptatem dolorem! Soluta doloremque commodi magnam perferendis? Magni facilis, vero veniam!
        </p>
        <div className="features">
          <div className="feature-box">
            <FaTools className="icon" />
            <h3>MODERN TECHNIQUE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="feature-box">
            <FaTruck className="icon" />
            <h3>QUALITY MATERIALS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="feature-box">
            <FaUsers className="icon" />
            <h3>PROFESSIONAL TEAM</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="feature-box">
            <FaPhoneAlt className="icon" />
            <h3>24/7 SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <button className="view-services">VIEW ALL SERVICES</button>
      </section>

      {/* CEO Quote */}
      <section className="ceo-quote">
        <img src="/worker.png" alt="Worker" className="worker-img" />
        <blockquote>
          "We built Beautifully with the best possible materials and resources"
        </blockquote>
        <p className="ceo-name">– HENRY SCOTT, CEO</p>
      </section>

      {/* Logos */}
      <section className="logo-section">
        <img src="/logo1.png" alt="Logo1" />
        <img src="/logo2.png" alt="Logo2" />
        <img src="/logo3.png" alt="Logo3" />
        <img src="/logo4.png" alt="Logo4" />
      </section>

      {/* How We Became Best */}
      <section className="intro-section">
        <div className="intro-header">
          <h3>INTRODUCTION</h3>
          <h2>HOW WE BECAME BEST AMONG OTHERS?</h2>
        </div>
        <div className="intro-images">
          <img src="/construction1.jpg" alt="Construction Work" />
          <img src="/construction2.jpg" alt="Happy Worker" />
        </div>
      </section>
    </div>
  );
}