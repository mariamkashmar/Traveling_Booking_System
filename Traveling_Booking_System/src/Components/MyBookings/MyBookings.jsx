import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaPhoneAlt,
  FaUsers,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaStickyNote,
  FaClipboardList,
} from "react-icons/fa";
import "./MyBookings.css";
import api from "../../api/axios";

export default function MyBookings() {
  const navigate = useNavigate();

  const storedUser =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await api.get("/bookings/admin/getAllBookings");
        setBookings(res.data.data || []);
      } catch (err) {
        console.log("BOOKINGS FETCH ERROR:", err.response?.data || err.message);
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load bookings"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const myBookings = useMemo(() => {
    if (!storedUser) return [];

    return bookings.filter((booking) => {
      const bookingUserId =
        booking.userid?._id ||
        booking.userid?.id ||
        booking.userid ||
        "";

      const currentUserId = storedUser._id || storedUser.id || "";

      return String(bookingUserId) === String(currentUserId);
    });
  }, [bookings, storedUser]);

  const formatCurrency = (value) => {
    const number = Number(value || 0);
    return `$${number.toLocaleString()}`;
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "Not specified";

    const parsed = new Date(dateValue);
    if (Number.isNaN(parsed.getTime())) return dateValue;

    return parsed.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!storedUser) {
    return (
      <section className="mybookings-page">
        <div className="mybookings-empty">
          <FaClipboardList className="empty-icon" />
          <h2>Please sign in first</h2>
          <p>You need to be logged in to view your reservations.</p>
          <button onClick={() => navigate("/SignPage")}>Go to Sign In</button>
        </div>
      </section>
    );
  }

  return (
    <section className="mybookings-page">
      <div className="mybookings-shell">
        <div className="mybookings-hero">
          <span className="mybookings-kicker">My Reservations</span>
          <h1>Your Saved Bookings</h1>
          <p>
            View all your submitted bookings, travel dates, package details, and
            reservation information in one place.
          </p>
        </div>

        {loading && <p className="mybookings-status">Loading your bookings...</p>}
        {error && <p className="mybookings-status error">{error}</p>}

        {!loading && !error && myBookings.length === 0 && (
          <div className="mybookings-empty">
            <FaSuitcaseRolling className="empty-icon" />
            <h2>No bookings yet</h2>
            <p>
              You have not submitted any reservations yet. Start by choosing a
              travel package.
            </p>
            <button onClick={() => navigate("/Packages")}>Browse Packages</button>
          </div>
        )}

        {!loading && !error && myBookings.length > 0 && (
          <div className="mybookings-grid">
            {myBookings.map((booking) => {
              const destination =
                booking.packageid?.destination || "Destination not available";


              return (
                <article className="booking-card" key={booking._id}>
                  <div className="booking-card-content">
                    <div className="booking-card-head">
                      <div>
                        <h2>{booking.packagetitle}</h2>
                        <p className="booking-destination">
                          <FaMapMarkedAlt /> {destination}
                        </p>
                      </div>

                      <div className="booking-price-box">
                        <span>Total</span>
                        <strong>{formatCurrency(booking.totalprice)}</strong>
                      </div>
                    </div>

                    <div className="booking-info-grid">
                      <div className="booking-info-item">
                        <FaCalendarAlt />
                        <div>
                          <small>Booked On</small>
                          <span>{formatDate(booking.bookingdate)}</span>
                        </div>
                      </div>

                      <div className="booking-info-item">
                        <FaCalendarAlt />
                        <div>
                          <small>Package Date</small>
                          <span>{booking.packagedate || "Not specified"}</span>
                        </div>
                      </div>

                      <div className="booking-info-item">
                        <FaUsers />
                        <div>
                          <small>Travelers</small>
                          <span>{booking.peoplecount}</span>
                        </div>
                      </div>

                      <div className="booking-info-item">
                        <FaPhoneAlt />
                        <div>
                          <small>Phone</small>
                          <span>{booking.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="booking-user-box">
                      <h3>Traveler Information</h3>
                      <div className="booking-user-grid">
                        <div>
                          <small>Full Name</small>
                          <span>{booking.fullname}</span>
                        </div>
                        <div>
                          <small>Email</small>
                          <span>{booking.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="booking-notes-box">
                      <h3>
                        <FaStickyNote /> Special Notes
                      </h3>
                      <p>{booking.notes || "No special notes provided."}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}