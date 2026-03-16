import { useState } from "react";
import "./PaymentMethod.css";
import { FaCreditCard, FaUniversity, FaMoneyBillWave, FaPaypal } from "react-icons/fa";

export default function PaymentMethod() {
  const [selected, setSelected] = useState("card");

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h1>Select Payment Method</h1>
        <p>Please choose your preferred payment option</p>

        <div className="payment-options">

          <div
            className={`payment-option ${selected === "card" ? "active" : ""}`}
            onClick={() => setSelected("card")}
          >
            <FaCreditCard className="payment-icon" />
            <div>
              <h3>Credit / Debit Card</h3>
              <span>Visa, MasterCard, etc.</span>
            </div>
          </div>

          <div
            className={`payment-option ${selected === "paypal" ? "active" : ""}`}
            onClick={() => setSelected("paypal")}
          >
            <FaPaypal className="payment-icon" />
            <div>
              <h3>PayPal</h3>
              <span>Pay securely using PayPal</span>
            </div>
          </div>

          <div
            className={`payment-option ${selected === "bank" ? "active" : ""}`}
            onClick={() => setSelected("bank")}
          >
            <FaUniversity className="payment-icon" />
            <div>
              <h3>Bank Transfer</h3>
              <span>Transfer directly from your bank</span>
            </div>
          </div>

          <div
            className={`payment-option ${selected === "cash" ? "active" : ""}`}
            onClick={() => setSelected("cash")}
          >
            <FaMoneyBillWave className="payment-icon" />
            <div>
              <h3>Cash on Arrival</h3>
              <span>Pay at the property</span>
            </div>
          </div>

        </div>

        <button className="confirm-btn">
          Continue with {selected.toUpperCase()}
        </button>
      </div>
    </div>
  );
}