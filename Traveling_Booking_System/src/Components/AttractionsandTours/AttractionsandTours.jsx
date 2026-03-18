import "./AttractionsandTours.css";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSearch,
  FaTicketAlt,
  FaStar,
  FaUsers,
  FaClock,
  FaCamera,
  FaLandmark,
  FaGlobeEurope,
} from "react-icons/fa";

export default function AttractionandTours() {
  const [category, setCategory] = useState("attractions");

  return (
    <div className="at-page">
      <section className="at-hero">
        <div className="at-hero-overlay">
          <h1>Attractions & Tours</h1>
          <p>Discover top sights, unforgettable tours, and exciting experiences</p>

          <div className="at-search-card">

            <div className="at-form">
              <div className="at-form-group at-location-group">
                <label>Destination</label>
                <div className="at-input-box">
                  <FaMapMarkerAlt className="at-input-icon" />
                  <input type="text" placeholder="City or attraction" />
                </div>
              </div>

              <div className="at-form-group">
                <label>Date</label>
                <div className="at-input-box">
                  <FaCalendarAlt className="at-input-icon" />
                  <input type="date" />
                </div>
              </div>

              <div className="at-form-group">
                <label>Tickets</label>
                <div className="at-input-box">
                  <FaTicketAlt className="at-input-icon" />
                  <select>
                    <option>1 Ticket</option>
                    <option>2 Tickets</option>
                    <option>Family Package</option>
                    <option>Group Booking</option>
                  </select>
                </div>
              </div>

              <div className="at-form-group">
                <label>Type</label>
                <div className="at-input-box">
                  <FaCamera className="at-input-icon" />
                  <select>
                    <option>All Experiences</option>
                    <option>City Tours</option>
                    <option>Museums</option>
                    <option>Theme Parks</option>
                    <option>Cruises</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="at-form-footer">

              <button className="at-search-btn">
                <FaSearch />
                Search Experiences
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="at-offers-section">
        <h2>Top Experiences</h2>
        <div className="at-offers-grid">
          <div className="at-offer-card large">
            <div className="at-offer-text">
              <h3>Explore the world’s best attractions</h3>
              <p>Book iconic landmarks, guided tours, and unforgettable adventures.</p>
            </div>
          </div>

          <div className="at-offer-card small orange">
            <h4>City Tours</h4>
            <p>See the highlights with expert guides</p>
          </div>

          <div className="at-offer-card small green">
            <h4>Family Fun</h4>
            <p>Theme parks and interactive activities</p>
          </div>

          <div className="at-offer-card small purple">
            <h4>Culture & History</h4>
            <p>Museums, landmarks, and heritage sites</p>
          </div>
        </div>
      </section>

      <section className="at-popular-section">
        <h2>Popular Attractions</h2>
        <div className="at-popular-grid">
          <div className="at-card">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80"
              alt="London Eye"
            />
            <div className="at-card-info">
              <div className="at-card-top">
                <h3>London Eye Experience</h3>
                <span><FaStar /> 4.8</span>
              </div>
              <p><FaMapMarkerAlt /> London, UK</p>
              <p><FaClock /> 30 min ride</p>
              <strong>From $38</strong>
            </div>
          </div>

          <div className="at-card">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"
              alt="Eiffel Tower"
            />
            <div className="at-card-info">
              <div className="at-card-top">
                <h3>Eiffel Tower Guided Visit</h3>
                <span><FaStar /> 4.7</span>
              </div>
              <p><FaMapMarkerAlt /> Paris, France</p>
              <p><FaUsers /> Small group tour</p>
              <strong>From $45</strong>
            </div>
          </div>

          <div className="at-card">
            <img
              src="/Istanbul/istanbul.jpg"
              alt="Istanbul tour"
            />
            <div className="at-card-info">
              <div className="at-card-top">
                <h3>Istanbul Old City Tour</h3>
                <span><FaStar /> 4.9</span>
              </div>
              <p><FaMapMarkerAlt /> Istanbul, Türkiye</p>
              <p><FaLandmark /> Historic landmarks included</p>
              <strong>From $32</strong>
            </div>
          </div>

          <div className="at-card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
              alt="Dubai desert"
            />
            <div className="at-card-info">
              <div className="at-card-top">
                <h3>Dubai Desert Safari</h3>
                <span><FaStar /> 4.8</span>
              </div>
              <p><FaMapMarkerAlt /> Dubai, UAE</p>
              <p><FaCamera /> Adventure + dinner show</p>
              <strong>From $52</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="at-benefits-section">
        <div className="at-benefit-card">
          <FaTicketAlt className="at-benefit-icon" />
          <h4>Instant Confirmation</h4>
          <p>Book tickets and tours easily with quick confirmation and secure checkout.</p>
        </div>

        <div className="at-benefit-card">
          <FaGlobeEurope className="at-benefit-icon" />
          <h4>Worldwide Experiences</h4>
          <p>Discover activities and attractions in the world’s most popular destinations.</p>
        </div>

        <div className="at-benefit-card">
          <FaStar className="at-benefit-icon" />
          <h4>Top Rated Choices</h4>
          <p>Browse highly rated experiences loved by travelers from around the world.</p>
        </div>
      </section>
    </div>
  );
}