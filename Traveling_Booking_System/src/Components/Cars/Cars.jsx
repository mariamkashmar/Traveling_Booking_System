import "./Cars.css";
import { useState } from "react";
import {
    FaCar,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaClock,
    FaSearch,
    FaChevronDown,
    FaGasPump,
    FaUserFriends,
    FaSuitcaseRolling,
    FaShieldAlt,
} from "react-icons/fa";

export default function Cars() {
    const currentTime = new Date().toTimeString().slice(0, 5);

    const [pickupTime, setPickupTime] = useState(currentTime);
    const [dropoffTime, setDropoffTime] = useState(currentTime);
    const [showDriverAge, setShowDriverAge] = useState(false);
    const [driverAge, setDriverAge] = useState("30-65");

    return (
        <div className="cars-page">
            <section className="cars-hero">
                <div className="cars-hero-overlay">
                    <h1>Search Rental Cars</h1>
                    <p>Compare car rentals and find the perfect ride for your trip</p>

                    <div className="cars-search-card">
                        <div className="cars-form">
                            <div className="cars-form-group cars-location-group">
                                <label>Pick-up location</label>
                                <div className="cars-input-box">
                                    <FaMapMarkerAlt className="cars-input-icon" />
                                    <input type="text" placeholder="City, airport, or station" />
                                </div>
                            </div>

                            <div className="cars-form-group">
                                <label>Pick-up date</label>
                                <div className="cars-input-box">
                                    <FaCalendarAlt className="cars-input-icon" />
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="cars-form-group">
                                <label>Time</label>
                                <div className="cars-input-box">
                                    <FaClock className="cars-input-icon" />
                                    <input
                                        type="time"
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="cars-form-group">
                                <label>Drop-off date</label>
                                <div className="cars-input-box">
                                    <FaCalendarAlt className="cars-input-icon" />
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="cars-form-group">
                                <label>Time</label>
                                <div className="cars-input-box">
                                    <FaClock className="cars-input-icon" />
                                    <input
                                        type="time"
                                        value={dropoffTime}
                                        onChange={(e) => setDropoffTime(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="cars-form-footer">

                            <button className="cars-search-btn">
                                <FaSearch />
                                Search Cars
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cars-offers-section">
                <h2>Special Car Rental Offers</h2>
                <div className="cars-offers-grid">
                    <div className="cars-offer-card large">
                        <div className="cars-offer-text">
                            <h3>Drive more, spend less</h3>
                            <p>Unlock exclusive deals on rentals in top destinations.</p>
                        </div>
                    </div>

                    <div className="cars-offer-card small orange">
                        <h4>Weekend Rentals</h4>
                        <p>Short trips, better value</p>
                    </div>

                    <div className="cars-offer-card small green">
                        <h4>Family Cars</h4>
                        <p>More space for every journey</p>
                    </div>

                    <div className="cars-offer-card small purple">
                        <h4>Luxury Deals</h4>
                        <p>Premium cars at lower rates</p>
                    </div>
                </div>
            </section>

            <section className="cars-types-section">
                <h2>Popular Car Types</h2>
                <div className="cars-types-grid">
                    <div className="car-type-card">
                        <div className="car-type-icon-wrap">
                            <FaCar className="car-type-icon" />
                        </div>
                        <h3>Economy</h3>
                        <p>Fuel-efficient and budget-friendly for city trips.</p>
                        <span>From $28/day</span>
                    </div>

                    <div className="car-type-card">
                        <div className="car-type-icon-wrap">
                            <FaUserFriends className="car-type-icon" />
                        </div>
                        <h3>SUV</h3>
                        <p>Extra comfort and space for family or long journeys.</p>
                        <span>From $49/day</span>
                    </div>

                    <div className="car-type-card">
                        <div className="car-type-icon-wrap">
                            <FaSuitcaseRolling className="car-type-icon" />
                        </div>
                        <h3>Van</h3>
                        <p>Perfect for group travel and extra luggage capacity.</p>
                        <span>From $65/day</span>
                    </div>

                    <div className="car-type-card">
                        <div className="car-type-icon-wrap">
                            <FaGasPump className="car-type-icon" />
                        </div>
                        <h3>Hybrid</h3>
                        <p>Modern and efficient options for smarter travel.</p>
                        <span>From $44/day</span>
                    </div>
                </div>
            </section>

            <section className="cars-benefits-section">
                <div className="cars-benefit-card">
                    <FaShieldAlt className="cars-benefit-icon" />
                    <h4>Trusted Providers</h4>
                    <p>Choose from reliable rental companies with transparent policies.</p>
                </div>

                <div className="cars-benefit-card">
                    <FaCar className="cars-benefit-icon" />
                    <h4>Wide Vehicle Choice</h4>
                    <p>Find the right car for solo trips, family vacations, or business travel.</p>
                </div>

                <div className="cars-benefit-card">
                    <FaMapMarkerAlt className="cars-benefit-icon" />
                    <h4>Convenient Pick-up</h4>
                    <p>Pick up your rental from airports, downtown branches, and stations.</p>
                </div>
            </section>
        </div>
    );
}