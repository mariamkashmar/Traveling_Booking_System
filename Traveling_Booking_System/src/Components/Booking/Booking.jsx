import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaUsers,
    FaMapMarkedAlt,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaCheckCircle,
    FaSuitcaseRolling,
} from "react-icons/fa";
import "./Booking.css";
import api from "../../api/axios";

export default function Booking() {
    const location = useLocation();
    const selectedPackage = location.state?.selectedPackage;
    const navigate = useNavigate();

    const storedUser =
        JSON.parse(localStorage.getItem("user")) ||
        JSON.parse(sessionStorage.getItem("user"));

    const packageData =
        location.state?.selectedPackage ||
        JSON.parse(localStorage.getItem("selectedPackage")) ||
        null;

    const [formData, setFormData] = useState({
        fullName:
            storedUser
                ? `${storedUser.firstname || ""} ${storedUser.lastname || ""}`.trim()
                : "",
        email: storedUser?.email || "",
        phone: storedUser?.phonenumber || "",
        peopleCount: 1,
        notes: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const packageTitle = packageData?.title || "Selected Package";
    const packageCountry = packageData?.country || packageData?.destination || "Destination";
    const packageTourType = packageData?.tourtype || packageData?.tourType || "Private Tour";
    const packageDuration =
        packageData?.duration ||
        `${packageData?.durationdays || 0} Days / ${packageData?.durationnights || 0} Nights`;

    const numericPrice = useMemo(() => {
        if (!packageData?.price) return 0;
        if (typeof packageData.price === "number") return packageData.price;
        return Number(String(packageData.price).replace(/[$,]/g, "")) || 0;
    }, [packageData]);

    const totalPrice = numericPrice * Number(formData.peopleCount || 1);
    const date = packageData?.date;
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "peopleCount" ? Math.max(1, Number(value) || 1) : value,
        }));
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const bookingData = {
      userid: storedUser?.id || storedUser?._id,
      packageid: packageData?._id || packageData?.id,
      packagetitle: packageTitle,
      fullname: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      peoplecount: Number(formData.peopleCount),
      notes: formData.notes,
      totalprice: Number(totalPrice),
      packagedate: packageData?.date || "",
    };

    console.log("BOOKING DATA:", bookingData);

    const res = await api.post("/bookings/book", bookingData);

    setSuccessMessage(res.data.message || "Booking submitted successfully");

    setTimeout(() => {
      navigate("/");
    }, 1800);
  } catch (err) {
    console.log("BOOKING ERROR:", err.response?.data || err.message);
    setSuccessMessage(
      err.response?.data?.message || "Failed to submit booking"
    );
  }
};

    if (!packageData) {
        return (
            <section className="booking-page">
                <div className="booking-empty">
                    <FaSuitcaseRolling className="empty-icon" />
                    <h2>No package selected</h2>
                    <p>Please go back to the Packages page and choose a package first.</p>
                    <button onClick={() => navigate("/Packages")}>Back to Packages</button>
                </div>
            </section>
        );
    }

    return (
        <section className="booking-page">
            <div className="booking-shell">
                <div className="booking-hero">
                    <span className="booking-kicker">Secure Reservation</span>
                    <h1>Complete Your Travel Booking</h1>
                    <p>
                        Review your selected package, enter your details, and confirm the
                        number of travelers for your upcoming journey.
                    </p>
                </div>

                <div className="booking-layout">
                    <aside className="booking-summary-card">
                        <div
                            className="booking-summary-image"
                            style={{
                                backgroundImage: `url(${packageData.image || "/packages/default.webp"
                                    })`,
                            }}
                        >
                            <span className="summary-badge">{packageTourType}</span>
                        </div>

                        <div className="booking-summary-content">
                            <h2>{packageTitle}</h2>

                            <div className="summary-item">
                                <FaCalendarAlt />
                                <div className="summary-text">
                                    <span>{selectedPackage.date}</span>
                                </div>
                            </div>

                            <div className="summary-item">
                                <FaMapMarkedAlt />
                                <span>{packageCountry}</span>
                            </div>

                            <div className="summary-item">
                                <FaCalendarAlt />
                                <span>{packageDuration}</span>
                            </div>

                            <div className="summary-item">
                                <FaCalendarAlt />
                                <span>{date}</span>
                            </div>

                            <div className="summary-item">
                                <FaMoneyBillWave />
                                <span>${numericPrice.toLocaleString()} per person</span>
                            </div>

                            <div className="summary-divider" />

                            <div className="summary-total">
                                <span>Total Price</span>
                                <strong>${totalPrice.toLocaleString()}</strong>
                            </div>

                            {(packageData.features || packageData.includes)?.length > 0 && (
                                <div className="summary-features">
                                    <h3>Package Includes</h3>
                                    {(packageData.features || packageData.includes).map(
                                        (item, index) => (
                                            <div className="summary-feature" key={index}>
                                                <FaCheckCircle />
                                                <span>{item}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </aside>

                    <div className="booking-form-card">
                        <div className="booking-card-head">
                            <h2>Traveler Details</h2>
                            <p>Fill in the information below to complete your booking.</p>
                        </div>

                        {successMessage && (
                            <div className="booking-success">{successMessage}</div>
                        )}

                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="booking-grid">
                                <div className="booking-input-group">
                                    <label>Signed-in User</label>
                                    <div className="booking-input-wrap readonly">
                                        <FaUser className="booking-icon" />
                                        <input
                                            type="text"
                                            value={
                                                storedUser
                                                    ? `${storedUser.firstname || ""} ${storedUser.lastname || ""
                                                        }`.trim()
                                                    : "Guest User"
                                            }
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="booking-input-group">
                                    <label>Selected Package</label>
                                    <div className="booking-input-wrap readonly">
                                        <FaSuitcaseRolling className="booking-icon" />
                                        <input type="text" value={packageTitle} readOnly />
                                    </div>
                                </div>

                                <div className="booking-input-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <div className="booking-input-wrap">
                                        <FaUser className="booking-icon" />
                                        <input
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="booking-input-group">
                                    <label htmlFor="email">Email Address</label>
                                    <div className="booking-input-wrap">
                                        <FaEnvelope className="booking-icon" />
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="booking-input-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="booking-input-wrap">
                                        <FaPhoneAlt className="booking-icon" />
                                        <input
                                            id="phone"
                                            type="text"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="booking-input-group">
                                    <label htmlFor="peopleCount">Number of People</label>
                                    <div className="booking-input-wrap">
                                        <FaUsers className="booking-icon" />
                                        <input
                                            id="peopleCount"
                                            type="number"
                                            name="peopleCount"
                                            min="1"
                                            value={formData.peopleCount}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="booking-input-group full-width">
                                <label htmlFor="notes">Special Notes</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows="5"
                                    placeholder="Add any request or note for your booking..."
                                    value={formData.notes}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="booking-action-row">
                                <div className="booking-final-total">
                                    <span>Final Total</span>
                                    <strong>${totalPrice.toLocaleString()}</strong>
                                </div>

                                <button type="submit" className="booking-submit-btn">
                                    Submit Booking
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}