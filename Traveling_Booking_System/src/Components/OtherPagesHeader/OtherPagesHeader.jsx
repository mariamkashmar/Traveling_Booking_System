import "./OtherPagesHeader.css";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="top-header">
      <div className="header-shell">
        <div className="header-inner">
          <div className="header-left">
            <Link to="/" className="brand brand-link">
              <span className="brand-trip">Go</span>
              <span className="brand-dot">.</span>
              <span className="brand-com">Trip</span>
            </Link>
          </div>

          <nav className="header-right">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/App" className="nav-link">
              <FaMobileAlt />
              <span>App</span>
            </Link>
            <Link to="/PaymentMethod" className="nav-link">Payment Method</Link>
            <Link to="/Packages" className="nav-link">Packages</Link>
            <Link to="/Flights" className="nav-link">Flights</Link>
            <Link to="/Trains" className="nav-link">Trains</Link>
            <Link to="/Cars" className="nav-link">Cars</Link>
            <Link to="/MyBookings" className="reservation-link">
              <button className="primary-btn">My Bookings</button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}