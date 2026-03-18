import "./Trains.css";
import { useState } from "react";
import {
  FaTrain,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaExchangeAlt,
  FaSearch,
  FaClock,
  FaTicketAlt,
  FaChair,
} from "react-icons/fa";

export default function Trains() {
  const [tripType, setTripType] = useState("oneway");
  const [showPassengers, setShowPassengers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [seatClass, setSeatClass] = useState("Second Class");

  return (
    <div className="trains-page">
      <section className="trains-hero">
        <div className="trains-hero-overlay">
          <h1>Search Trains</h1>
          <p>Book fast, comfortable, and affordable train journeys</p>

          <div className="train-search-card">
            <div className="train-trip-types">
              <button
                className={`train-trip-btn ${tripType === "oneway" ? "active" : ""}`}
                onClick={() => setTripType("oneway")}
              >
                One-way
              </button>
              <button
                className={`train-trip-btn ${tripType === "round" ? "active" : ""}`}
                onClick={() => setTripType("round")}
              >
                Round-trip
              </button>
            </div>

            <div className="train-form">
              <div className="train-form-group">
                <label>From</label>
                <div className="train-input-box">
                  <FaMapMarkerAlt className="train-input-icon" />
                  <input type="text" placeholder="Departure station" />
                </div>
              </div>

              <button className="train-swap-btn">
                <FaExchangeAlt />
              </button>

              <div className="train-form-group">
                <label>To</label>
                <div className="train-input-box">
                  <FaMapMarkerAlt className="train-input-icon" />
                  <input type="text" placeholder="Arrival station" />
                </div>
              </div>

              <div className="train-form-group">
                <label>Departure date</label>
                <div className="train-input-box">
                  <FaCalendarAlt className="train-input-icon" />
                  <input type="date" />
                </div>
              </div>

              {tripType === "round" && (
                <div className="train-form-group">
                  <label>Return date</label>
                  <div className="train-input-box">
                    <FaCalendarAlt className="train-input-icon" />
                    <input type="date" />
                  </div>
                </div>
              )}

              <div className="train-form-group passenger-train-group">
                <label>Passengers</label>
                <div
                  className="train-input-box passenger-train-trigger"
                  onClick={() => setShowPassengers(!showPassengers)}
                >
                  <FaUserFriends className="train-input-icon" />
                  <span>
                    {adults + children} Passenger{adults + children > 1 ? "s" : ""}, {seatClass}
                  </span>
                </div>

                {showPassengers && (
                  <div className="train-passenger-dropdown">
                    <div className="train-passenger-row">
                      <div>
                        <h4>Adults</h4>
                        <p>12+ years old</p>
                      </div>
                      <div className="train-counter">
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

                    <div className="train-passenger-row">
                      <div>
                        <h4>Children</h4>
                        <p>2–11 years old</p>
                      </div>
                      <div className="train-counter">
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

                    <select
                      className="train-class-select"
                      value={seatClass}
                      onChange={(e) => setSeatClass(e.target.value)}
                    >
                      <option>Second Class</option>
                      <option>First Class</option>
                      <option>Business Class</option>
                      <option>Sleeper</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            <div className="train-form-footer">

              <button className="train-search-btn">
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="train-offers-section">
        <h2>Special Train Offers</h2>
        <div className="train-offers-grid">
          <div className="train-offer-card large">
            <div className="train-offer-text">
              <h3>Travel across cities with comfort</h3>
              <p>Discover discounted rail tickets on popular routes.</p>
            </div>
          </div>

          <div className="train-offer-card small orange">
            <h4>Early Bird Fares</h4>
            <p>Book early and save more</p>
          </div>

          <div className="train-offer-card small green">
            <h4>Weekend Escapes</h4>
            <p>Short train trips, better prices</p>
          </div>

          <div className="train-offer-card small purple">
            <h4>Group Discounts</h4>
            <p>More passengers, more savings</p>
          </div>
        </div>
      </section>

      <section className="popular-routes-section">
        <h2>Popular Train Routes</h2>
        <div className="popular-routes-grid">
          <div className="route-card">
            <div className="route-top">
              <h3>London → Paris</h3>
              <span>From $75</span>
            </div>
            <p><FaClock /> Approx. 2h 20m</p>
            <p><FaTrain /> High-speed rail</p>
          </div>

          <div className="route-card">
            <div className="route-top">
              <h3>Istanbul → Ankara</h3>
              <span>From $28</span>
            </div>
            <p><FaClock /> Approx. 4h 30m</p>
            <p><FaTrain /> Fast train</p>
          </div>

          <div className="route-card">
            <div className="route-top">
              <h3>Rome → Milan</h3>
              <span>From $39</span>
            </div>
            <p><FaClock /> Approx. 3h 10m</p>
            <p><FaTrain /> Express service</p>
          </div>

          <div className="route-card">
            <div className="route-top">
              <h3>Madrid → Barcelona</h3>
              <span>From $42</span>
            </div>
            <p><FaClock /> Approx. 2h 45m</p>
            <p><FaTrain /> High-speed rail</p>
          </div>
        </div>
      </section>

      <section className="train-benefits-section">
        <div className="train-benefit-card">
          <FaTicketAlt className="train-benefit-icon" />
          <h4>Easy Booking</h4>
          <p>Reserve train tickets quickly with simple and secure steps.</p>
        </div>

        <div className="train-benefit-card">
          <FaChair className="train-benefit-icon" />
          <h4>Comfortable Travel</h4>
          <p>Choose from different seating classes for your ideal journey.</p>
        </div>

        <div className="train-benefit-card">
          <FaTrain className="train-benefit-icon" />
          <h4>Top Rail Routes</h4>
          <p>Travel between major cities with trusted rail operators.</p>
        </div>
      </section>
    </div>
  );
}