import "./AboutUs.css";
import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaShieldAlt,
  FaHeadset,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Hero */}
        <div className="about-hero">
          <div className="about-hero-text">
            <p className="about-tag">About Our Platform</p>
            <h1>
              Making travel booking simple, smooth, and reliable
            </h1>
            <p className="about-subtext">
              We help travelers discover and book flights, hotels, and train
              journeys in one place. Our goal is to make every trip easier to
              plan, more affordable, and more enjoyable from start to finish.
            </p>

            <div className="about-hero-buttons">
              <button className="about-btn primary-btn">Explore Services</button>
              <button className="about-btn secondary-btn">Contact Us</button>
            </div>
          </div>

          <div className="about-hero-card">
            <h3>Travel smarter with us</h3>
            <p>
              Compare options, find better deals, and book with confidence
              through a platform designed for modern travelers.
            </p>

            <div className="hero-features">
              <div>
                <FaShieldAlt />
                <span>Secure Booking</span>
              </div>
              <div>
                <FaClock />
                <span>Fast Process</span>
              </div>
              <div>
                <FaHeadset />
                <span>Customer Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <div className="about-section">
          <div className="section-heading">
            <p className="section-tag">Who We Are</p>
            <h2>Your trusted travel booking companion</h2>
          </div>

          <div className="about-info-box">
            <p>
              Our platform was created to simplify the way people plan their
              trips. Instead of searching across multiple websites, users can
              explore transport and accommodation options in one convenient
              place.
            </p>
            <p>
              Whether you are booking a business trip, a family vacation, or a
              quick weekend escape, we aim to provide a smooth experience with
              clear choices, secure payments, and dependable service.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="about-section">
          <div className="section-heading">
            <p className="section-tag">What We Offer</p>
            <h2>Everything you need for your journey</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaPlane />
              </div>
              <h3>Flight Booking</h3>
              <p>
                Search and compare flights easily, with convenient booking
                options for local and international travel.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHotel />
              </div>
              <h3>Hotel Reservations</h3>
              <p>
                Discover comfortable stays, from budget-friendly hotels to
                premium accommodations for every type of traveler.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaTrain />
              </div>
              <h3>Train Tickets</h3>
              <p>
                Book train journeys with ease and enjoy a practical option for
                city-to-city and regional travel.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-section">
          <div className="section-heading">
            <p className="section-tag">Why Choose Us</p>
            <h2>Built around convenience and confidence</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <FaGlobe className="why-icon" />
              <h4>All-in-One Platform</h4>
              <p>
                Flights, hotels, and trains all together in one easy booking
                experience.
              </p>
            </div>

            <div className="why-card">
              <FaShieldAlt className="why-icon" />
              <h4>Secure & Reliable</h4>
              <p>
                Your booking process is designed with safety, clarity, and trust
                in mind.
              </p>
            </div>

            <div className="why-card">
              <FaClock className="why-icon" />
              <h4>Fast Booking Process</h4>
              <p>
                Save time with a simple interface that helps users find what
                they need quickly.
              </p>
            </div>

            <div className="why-card">
              <FaHeadset className="why-icon" />
              <h4>Support When Needed</h4>
              <p>
                We focus on making the travel experience smooth before, during,
                and after booking.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-strip">
          <div className="stat-box">
            <h3>10K+</h3>
            <p>Bookings Managed</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Hotel Options</p>
          </div>
          <div className="stat-box">
            <h3>100+</h3>
            <p>Destinations Covered</p>
          </div>
          <div className="stat-box">
            <h3>24/7</h3>
            <p>Customer Assistance</p>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Start planning your next trip with confidence</h2>
          <p>
            Discover better travel options and enjoy a smoother booking
            experience every step of the way.
          </p>
          <button className="about-btn primary-btn">Book Your Journey</button>
        </div>
      </div>
    </section>
  );
}