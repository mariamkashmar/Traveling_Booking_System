import "./CustomerSupport.css";
import { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaCreditCard,
  FaComments,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

const faqData = [
  {
    question: "How do I cancel my booking?",
    answer:
      "Go to My Trips, select your booking, and click Cancel. Cancellation policies may vary depending on the provider.",
  },
  {
    question: "How long do refunds take?",
    answer:
      "Refunds usually take 5 to 10 business days, depending on your payment method and provider.",
  },
  {
    question: "Can I change my travel date?",
    answer:
      "Yes, some bookings can be changed. Date changes depend on airline, hotel, or train policies.",
  },
  {
    question: "How can I download my ticket or invoice?",
    answer:
      "Open your booking details from My Trips and click Download Ticket or Download Invoice.",
  },
];

export default function CustomerSupport() {
  const [question, setQuestion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (question.trim() === "") return;

    setSuccessMessage("Your message was sent successfully.");
    setQuestion("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section className="support-page">
      <div className="support-container">
      <div className="support-hero">
        <h1>Customer Support</h1>
        <p>Find help with bookings, payments, cancellations, and travel questions.</p>

        <form className="support-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="support-categories">
        <div className="support-card">
          <FaPlane className="support-icon" />
          <h3>Flights</h3>
          <p>Manage flight bookings, schedule changes, and cancellations.</p>
        </div>

        <div className="support-card">
          <FaHotel className="support-icon" />
          <h3>Hotels</h3>
          <p>Get help with hotel reservations, check-in details, and stays.</p>
        </div>

        <div className="support-card">
          <FaTrain className="support-icon" />
          <h3>Trains</h3>
          <p>View train booking help, timing updates, and ticket issues.</p>
        </div>

        <div className="support-card">
          <FaCreditCard className="support-icon" />
          <h3>Payments</h3>
          <p>Resolve payment issues, refunds, and invoice questions.</p>
        </div>
      </div>

      <div className="support-content">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          {faqData.map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary>
                <span>{faq.question}</span>
                <FaChevronDown className="faq-arrow" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="booking-help">
          <h2>Track Your Booking</h2>
          <p>Enter your booking details to get support faster.</p>

          <form className="booking-form">
            <input type="text" placeholder="Booking ID" />
            <input type="email" placeholder="Email Address" />
            <button type="submit">Find Booking</button>
          </form>
        </div>
      </div>

      <div className="contact-support">
        <h2>Still Need Help?</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <FaComments className="contact-icon" />
            <h3>Visit Our Office</h3>
            <p>Baabda, Public street</p>
            <a
              href="https://www.google.com/maps/search/Baabda"
              target="_blank"
              rel="noreferrer"
            >
              View Location
            </a>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Support</h3>
            <p>Send us your issue and we’ll get back to you soon.</p>
            <a href="mailto:mariamkashmar11@gmail.com">Email Support</a>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Support</h3>
            <p>Speak directly with a support representative.</p>
            <a href="tel:81064229">Contact Us</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}