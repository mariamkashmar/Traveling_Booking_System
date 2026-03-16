import "./Signing.css";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhoneAlt } from "react-icons/fa";

export default function signing() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Welcome to TravelEase</h1>
          <p>
            Book flights, hotels, trains, and more with comfort and confidence.
          </p>
          <div className="auth-overlay">
            <h2>{isSignIn ? "New here?" : "Already have an account?"}</h2>
            <p>
              {isSignIn
                ? "Create an account and start planning your next journey."
                : "Sign in to manage your bookings and travel plans."}
            </p>
            <button onClick={() => setIsSignIn(!isSignIn)}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-box">
            <h2>{isSignIn ? "Sign In" : "Create Account"}</h2>
            <p className="auth-subtitle">
              {isSignIn
                ? "Access your account and manage your trips."
                : "Join us and enjoy exclusive travel offers."}
            </p>

            <form className="auth-form">
              {!isSignIn && (
                <>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input type="text" placeholder="Full Name" />
                  </div>

                  <div className="input-group">
                    <FaPhoneAlt className="input-icon" />
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </>
              )}

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" />
              </div>

              {!isSignIn && (
                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input type="password" placeholder="Confirm Password" />
                </div>
              )}

              {isSignIn && (
                <div className="auth-options">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="/">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="auth-submit">
                {isSignIn ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="auth-switch-text">
              {isSignIn ? "Don’t have an account?" : "Already have an account?"}
              <span onClick={() => setIsSignIn(!isSignIn)}>
                {isSignIn ? " Sign Up" : " Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}