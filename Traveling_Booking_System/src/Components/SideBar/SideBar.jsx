import { Link } from 'react-router-dom'
import "./SideBar.css";
import {
  FaHotel,
  FaPlane,
  FaTrain,
  FaCar,
  FaMapMarkedAlt,
  FaGift,
  FaSuitcaseRolling,
  FaUserFriends,
  FaRoute,
  FaMap,
  FaCrown,
  FaMobileAlt,
  FaGlobe
} from "react-icons/fa";

export default function Sidebar() {

  return (
    <div className={`sidebar`}>
      {/* Main Items */}
      <div className="sidebar-item">
        <FaHotel className="icon" />
        <span className="label">Hotels & Homes</span>
      </div>

      <Link to='/Flights' className="sidebar-item">
        <FaPlane className="icon" />
        <span className="label">Flights</span>
      </Link>

      <div className="sidebar-item">
        <FaTrain className="icon" />
        <span className="label">Trains</span>
      </div>

      <div className="sidebar-item">
        <FaCar className="icon" />
        <span className="label">Cars</span>
      </div>

      <div className="sidebar-item">
        <FaMapMarkedAlt className="icon" />
        <span className="label">Attractions & Tours</span>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-item">
        <FaSuitcaseRolling className="icon" />
        <span className="label">Private Tours</span>
      </div>

      <div className="sidebar-item">
        <FaUserFriends className="icon" />
        <span className="label">Group Tours</span>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-item">
        <FaRoute className="icon" />
        <span className="label sidebar-text">
          Trip.Planner <span className="new-badge">New</span>
        </span>
      </div>

      <div className="sidebar-item">
        <FaGlobe className="icon" />
        <span className="label">Travel Inspiration</span>
      </div>

      <div className="sidebar-item" onClick={() =>
        window.open(
          "https://www.google.com/maps",
          "_blank"
        )
      }
      >
        <FaMap className="icon" />
        <span className="label">Map</span>
      </div>

      <div className="sidebar-item" >
        <FaGift className="icon" />
        <span className="label">Deals</span>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-item">
        <FaCrown className="icon" />
        <span className="label">Trip.com Rewards</span>
      </div>

      <Link to="/App" className="sidebar-item">
        <FaMobileAlt className="icon" />
        <span className="label">App</span>
      </Link>

    </div>

  );
}