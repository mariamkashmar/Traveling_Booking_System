import "./Header.css";
import { FaSearch, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="top-header">
      <div className="header-inner">
        {/* Left */}
        <div className="header-left">

          <div className="brand">
            <span className="brand-trip">Go</span>
            <span className="brand-dot">.</span>
            <span className="brand-com">Trip</span>
          </div>
        </div>

        {/* Center */}
        <div className="header-center">
          <div className="search">
            <input
              type="text"
              placeholder="Destination, attraction, hotel, etc"
            />
            <button className="search-btn" aria-label="search">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right */}
        <nav className="header-right">
          <Link to="/App" className="nav-link">
            <FaMobileAlt /> <span>App</span>
          </Link>

          <Link to="/ListingProperties" className="nav-link"> List Your Property </Link>
          <Link to="/PaymentMethod" className="nav-link">Payment Method</Link>

          <Link to="/CustomerSupport" className="nav-link">Customer Support</Link>

          <Link to="/AboutUs" className="nav-link">About Us</Link>
          <Link to="/SignPage">
          <button className="primary-btn">Sign in/register</button>
        </Link>
      </nav>
    </div>
    </header >
  );
}