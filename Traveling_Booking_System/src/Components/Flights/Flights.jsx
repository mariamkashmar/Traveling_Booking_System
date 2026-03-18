import "./Flights.css";
import { useState } from 'react';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserFriends,
  FaExchangeAlt,
  FaSearch,
  FaSuitcaseRolling,
  FaMapMarkerAlt,
} from "react-icons/fa";



export default function Flights() {
  const [toggle, setToggle] = useState("round");
  const [showPassengers, setShowPassengers] = useState(false);
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  return (
    <div className="flights-page">
      {/* Hero */}
      <section className="flights-hero">
        <div className="flights-hero-overlay">
          <h1>Search Flights</h1>
          <p>Find the best deals for domestic and international travel</p>

          <div className="search-card">
            {/* Trip type */}

            <div className="trip-types">
              <button className={`trip-btn ${toggle === "round" ? "active" : ""} `} onClick={() => setToggle("round")}>Round-trip</button>
              <button className={`trip-btn ${toggle === "one" ? "active" : ""} `} onClick={() => setToggle("one")}>One-way</button>
              <button className={`trip-btn ${toggle === "multi" ? "active" : ""}`} onClick={() => setToggle("multi")}>Multi-city</button>
            </div>

            {/* Form */}
            <div className="flight-form">
              <div className="form-group location-group">
                <label>From</label>
                <div className="input-box">
                  <FaPlaneDeparture className="input-icon" />
                  <input type="text" placeholder="City or airport" />
                </div>
              </div>

              <button className="swap-btn">
                <FaExchangeAlt />
              </button>

              <div className="form-group location-group">
                <label>To</label>
                <div className="input-box">
                  <FaPlaneArrival className="input-icon" />
                  <input type="text" placeholder="City or airport" />
                </div>
              </div>

              <div className="form-group">
                <label>Departure</label>
                <div className="input-box">
                  <FaCalendarAlt className="input-icon" />
                  <input type="date" />
                </div>
              </div>

              <div className="form-group">
                <label>Return</label>
                <div className="input-box">
                  <FaCalendarAlt className="input-icon" />
                  <input type="date" />
                </div>
              </div>

              <div className="form-group passenger-group">
                <label>Passengers</label>

                <div
                  className="input-box passenger-trigger"
                  onClick={() => setShowPassengers(!showPassengers)}
                >
                  <FaUserFriends className="input-icon" />
                  <span>
                    {adults + children + infants} Passenger{adults + children + infants > 1 ? "s" : ""}, {cabinClass}
                  </span>
                </div>

                {showPassengers && (
                  <div className="passenger-dropdown">
                    <p className="passenger-note">
                      Please select the exact number of passengers to view the best prices
                    </p>

                    <div className="passenger-row">
                      <div>
                        <h4>Adults</h4>
                        <p>12+ years old</p>
                      </div>
                      <div className="counter">
                        <button
                          type="button"
                          disabled={adults <= 1}
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          −
                        </button>
                        <span>{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="passenger-row">
                      <div>
                        <h4>Children</h4>
                        <p>2–11 years old</p>
                      </div>
                      <div className="counter">
                        <button
                          type="button"
                          disabled={children <= 0}
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          −
                        </button>
                        <span>{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="passenger-row">
                      <div>
                        <h4>Infants on lap</h4>
                        <p>Under 2 years old</p>
                      </div>
                      <div className="counter">
                        <button
                          type="button"
                          disabled={infants <= 0}
                          onClick={() => setInfants(Math.max(0, infants - 1))}
                        >
                          −
                        </button>
                        <span>{infants}</span>
                        <button
                          type="button"
                          onClick={() => setInfants(infants + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <select
                      className="cabin-select"
                      value={cabinClass}
                      onChange={(e) => setCabinClass(e.target.value)}
                    >
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                  </div>
                )}
              </div>





            </div>

            <div className="form-footer">

              <button className="search-btn">
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section">
        <h2>Special Flight Offers</h2>
        <div className="promo-grid">
          <div className="promo-card large">
            <div className="promo-text">
              <h3>Your next adventure starts here</h3>
              <p>Fly to your dream destinations at the best prices.</p>
            </div>
          </div>

          <div className="promo-card small card1">
            <h4>Weekend Getaways</h4>
            <p>Short trips, big savings</p>
          </div>

          <div className="promo-card small card2">
            <h4>Student Discounts</h4>
            <p>Travel smarter with lower fares</p>
          </div>

          <div className="promo-card small card3">
            <h4>Last-Minute Deals</h4>
            <p>Grab the best price before takeoff</p>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="destinations-section">
        <h2>Popular Flight Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80"
              alt="Paris"
            />
            <div className="destination-info">
              <h3>Paris</h3>
              <p>
                <FaMapMarkerAlt /> France
              </p>
              <span>From $320</span>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Dubai"
            />
            <div className="destination-info">
              <h3>Dubai</h3>
              <p>
                <FaMapMarkerAlt /> UAE
              </p>
              <span>From $280</span>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="/Istanbul/istanbul.jpg"
              alt="Istanbul"
            />
            <div className="destination-info">
              <h3>Istanbul</h3>
              <p>
                <FaMapMarkerAlt /> Türkiye
              </p>
              <span>From $210</span>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
              alt="London"
            />
            <div className="destination-info">
              <h3>London</h3>
              <p>
                <FaMapMarkerAlt /> UK
              </p>
              <span>From $350</span>
            </div>
          </div>
        </div>
      </section>

      {/* Extra info */}
      <section className="benefits-section">
        <div className="benefit-card">
          <FaSuitcaseRolling className="benefit-icon" />
          <h4>Flexible Booking</h4>
          <p>Choose flights with easy change and cancellation options.</p>
        </div>

        <div className="benefit-card">
          <FaSearch className="benefit-icon" />
          <h4>Compare Prices</h4>
          <p>Search across multiple airlines and travel providers at once.</p>
        </div>

        <div className="benefit-card">
          <FaPlaneDeparture className="benefit-icon" />
          <h4>Top Routes</h4>
          <p>Explore the most booked and trending destinations worldwide.</p>
        </div>
      </section>
    </div>
  );
}