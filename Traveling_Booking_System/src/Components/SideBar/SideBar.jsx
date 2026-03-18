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

      <Link to='/Trains' className="sidebar-item">
        <FaTrain className="icon" />
        <span className="label">Trains</span>
      </Link>

      <Link to='/Cars' className="sidebar-item">
        <FaCar className="icon" />
        <span className="label">Cars</span>
      </Link>

      <Link to='/AttractionsandTours' className="sidebar-item">
        <FaMapMarkedAlt className="icon" />
        <span className="label">Attractions & Tours</span>
      </Link>

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

      <Link to='./TravelGuides' className="sidebar-item">
        <FaRoute className="icon" />
        <span className="label sidebar-text">
          Travel Guide <span className="new-badge">New</span>
        </span>
      </Link>

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

      <Link to='/Packages' className="sidebar-item" >
        <FaGift className="icon" />
        <span className="label">Packages</span>
      </Link>

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