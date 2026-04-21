import "./Signing.css";
import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

export default function Signing() {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      setLoading(true);

if (isSignIn) {
  const res = await api.post("/users/signin", {
    email: signInData.email,
    password: signInData.password,
  }
);

  console.log("FULL SIGN IN RESPONSE:", res.data);

  setMessage(res.data.message || "Signed in successfully");

  // adjust this based on your real backend response
  const user = res.data.data?.user || res.data.user || res.data.data || res.data;

const storedAuthUser = {
  _id: user._id || user.id,
  id: user.id || user._id,
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
  country: user.country,
  phonenumber: user.phonenumber,
};

  localStorage.removeItem("user");
  sessionStorage.removeItem("user");

  if (rememberMe) {
    localStorage.setItem("user", JSON.stringify(storedAuthUser));
  } else {
    sessionStorage.setItem("user", JSON.stringify(storedAuthUser));
  }

  navigate("/");
} else {
        if (signUpData.password !== signUpData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        const res = await api.post("/users/signup", {
          firstname: signUpData.firstname,
          lastname: signUpData.lastname,
          phonenumber: signUpData.phonenumber,
          email: signUpData.email,
          country: signUpData.country,
          password: signUpData.password,
        });

        setMessage(res.data.message || "Signed up successfully");

        setSignUpData({
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          country: "",
          password: "",
          confirmPassword: "",
        });

        setIsSignIn(true);
      }
    } catch (err) {
      if (Array.isArray(err.response?.data?.error)) {
        setError(err.response.data.error[0].msg);
      } else {
        setError(
          err.response?.data?.error ||
          err.response?.data?.message ||
          "Server error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Welcome to Go.Trip</h1>
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

            <form className="auth-form" onSubmit={handleSubmit}>
              {!isSignIn && (
                <>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={signUpData.firstname}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      value={signUpData.lastname}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FaPhoneAlt className="input-icon" />
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Phone Number"
                      value={signUpData.phonenumber}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                </>
              )}

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={isSignIn ? signInData.email : signUpData.email}
                  onChange={isSignIn ? handleSignInChange : handleSignUpChange}
                  required
                />
              </div>

              {!isSignIn && (
                <div className="input-group">
                  <FaGlobe className="input-icon" />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={signUpData.country}
                    onChange={handleSignUpChange}
                  />
                </div>
              )}

              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={isSignIn ? signInData.password : signUpData.password}
                  onChange={isSignIn ? handleSignInChange : handleSignUpChange}
                  required
                />
              </div>

              {!isSignIn && (
                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
              )}

              {isSignIn && (
                <div className="auth-options">
                  <label>
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /> Remember me
                  </label>
                  <a href="/">Forgot Password?</a>
                </div>
              )}

              {message && <p style={{ color: "green" }}>{message}</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading
                  ? "Please wait..."
                  : isSignIn
                    ? "Sign In"
                    : "Create Account"}
              </button>
            </form>

            <p className="auth-switch-text">
              {isSignIn
                ? "Don’t have an account?"
                : "Already have an account?"}
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