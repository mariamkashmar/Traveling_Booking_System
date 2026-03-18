import React, { useState } from "react";
import "./BookNow.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPlane,
  FaHotel,
  FaTrain,
  FaCar,
  FaUsers,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

export default function BookNow() {
  const [travelers, setTravelers] = useState(2);
  const [tourType, setTourType] = useState("Private Tour");

  return (
    <section className="booknow-page">
      <div className="booknow-hero">
        <div className="booknow-hero-text">
          <span className="booknow-tag">Secure your journey</span>
          <h1>Book Your Travel Package</h1>
          <p>
            Complete your booking with flights, hotel stay, transport,
            experiences, and guided tours all in one place.
          </p>
        </div>
      </div>

      <div className="booknow-layout">
        <div className="booknow-form-card">
          <h2>Traveler Information</h2>

          <form className="booknow-form">
            <div className="form-grid">
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-box">
                  <FaUser />
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <div className="input-box">
                  <FaEnvelope />
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <div className="input-box">
                  <FaPhoneAlt />
                  <input type="text" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="input-group">
                <label>Destination</label>
                <div className="input-box">
                  <FaMapMarkerAlt />
                  <input type="text" placeholder="Choose destination" />
                </div>
              </div>

              <div className="input-group">
                <label>Departure Date</label>
                <div className="input-box">
                  <FaCalendarAlt />
                  <input type="date" />
                </div>
              </div>

              <div className="input-group">
                <label>Return Date</label>
                <div className="input-box">
                  <FaCalendarAlt />
                  <input type="date" />
                </div>
              </div>

              <div className="input-group">
                <label>Number of Travelers</label>
                <div className="input-box">
                  <FaUsers />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                  >
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5">5 Travelers</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Tour Type</label>
                <div className="input-box">
                  <FaUsers />
                  <select
                    value={tourType}
                    onChange={(e) => setTourType(e.target.value)}
                  >
                    <option>Private Tour</option>
                    <option>Group Tour</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-group full-width">
              <label>Special Requests</label>
              <textarea
                rows="5"
                placeholder="Add any special requests, notes, or preferences"
              ></textarea>
            </div>

            <h2 className="section-title">Payment Information</h2>

            <div className="form-grid">
              <div className="input-group">
                <label>Cardholder Name</label>
                <div className="input-box">
                  <FaCreditCard />
                  <input type="text" placeholder="Name on card" />
                </div>
              </div>

              <div className="input-group">
                <label>Card Number</label>
                <div className="input-box">
                  <FaCreditCard />
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
              </div>

              <div className="input-group">
                <label>Expiry Date</label>
                <div className="input-box">
                  <FaCalendarAlt />
                  <input type="text" placeholder="MM/YY" />
                </div>
              </div>

              <div className="input-group">
                <label>CVV</label>
                <div className="input-box">
                  <FaCreditCard />
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Booking
            </button>
          </form>
        </div>

        <div className="booknow-summary-card">
          <h2>Booking Summary</h2>

          <div className="summary-package">
            <h3>Paris Luxury Escape</h3>
            <p>5 Days / 4 Nights</p>
            <span className="summary-price">$1,480</span>
          </div>

          <div className="summary-includes">
            <div className="summary-item">
              <FaPlane />
              <span>Round-trip flight</span>
            </div>
            <div className="summary-item">
              <FaHotel />
              <span>4-star hotel stay</span>
            </div>
            <div className="summary-item">
              <FaTrain />
              <span>Train pass included</span>
            </div>
            <div className="summary-item">
              <FaCar />
              <span>Private car transfer</span>
            </div>
            <div className="summary-item">
              <FaUsers />
              <span>{tourType}</span>
            </div>
            <div className="summary-item">
              <FaCheckCircle />
              <span>{travelers} traveler(s)</span>
            </div>
          </div>

          <div className="price-box">
            <div className="price-row">
              <span>Package Price</span>
              <span>$1,480</span>
            </div>
            <div className="price-row">
              <span>Taxes & Fees</span>
              <span>$120</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>$1,600</span>
            </div>
          </div>

          <button className="reserve-btn">Reserve Now</button>
        </div>
      </div>
    </section>
  );
}