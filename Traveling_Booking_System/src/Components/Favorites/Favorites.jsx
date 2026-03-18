import React, { useState, useEffect } from "react";
import "./Favorites.css";
import {
  FaHeart,
  FaRegHeart,
  FaPlane,
  FaHotel,
  FaTrain,
  FaCar,
  FaMapMarkedAlt,
  FaUsers,
  FaUserTie,
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { getFavorites, toggleFavoritePackage } from "../../Utils/FavoritesUtils";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggleFavorite = (pkg) => {
    const updatedFavorites = toggleFavoritePackage(pkg);
    setFavorites(updatedFavorites);
  };

  return (
    <section className="favorites-page">
      <div className="favorites-hero">
        <span className="favorites-subtitle">Saved packages</span>
        <h1>Your Favorite Trips</h1>
        <p>
          View all the travel packages you saved and continue booking anytime.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <FaRegHeart />
          <h2>No favorites yet</h2>
          <p>Start adding travel packages to your favorites to see them here.</p>
          <Link to="/packages" className="browse-btn">
            Browse Packages
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((pkg) => (
            <div className="favorite-card" key={pkg.id}>
              <div
                className="favorite-image"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <span className="favorite-badge">{pkg.badge}</span>

                <span
                  className={`favorite-tour-type ${pkg.tourType === "Private Tour" ? "private" : "group"
                    }`}
                >
                  {pkg.tourType === "Private Tour" ? <FaUserTie /> : <FaUsers />}
                  {pkg.tourType}
                </span>

                <button
                  type="button"
                  className="favorite-heart active"
                  onClick={() => toggleFavorite(pkg)}
                >
                  <FaHeart />
                </button>
              </div>

              <div className="favorite-content">
                <div className="favorite-top">
                  <div>
                    <h3>{pkg.title}</h3>
                    <p className="favorite-destination">
                      <FaMapMarkedAlt /> {pkg.destination}
                    </p>
                  </div>

                  <div className="favorite-rating">
                    <FaStar />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                <p className="favorite-description">{pkg.description}</p>

                <div className="favorite-meta">
                  <span>
                    <FaCalendarAlt /> {pkg.duration}
                  </span>
                  <span className="favorite-price">{pkg.price}</span>
                </div>

                <div className="favorite-includes">
                  {pkg.includes.map((item, index) => {
                    let icon = <FaCheckCircle />;

                    if (item.toLowerCase().includes("flight")) icon = <FaPlane />;
                    else if (
                      item.toLowerCase().includes("hotel") ||
                      item.toLowerCase().includes("resort")
                    )
                      icon = <FaHotel />;
                    else if (
                      item.toLowerCase().includes("train") ||
                      item.toLowerCase().includes("rail")
                    )
                      icon = <FaTrain />;
                    else if (
                      item.toLowerCase().includes("car") ||
                      item.toLowerCase().includes("driver")
                    )
                      icon = <FaCar />;
                    else if (
                      item.toLowerCase().includes("tour") ||
                      item.toLowerCase().includes("tickets")
                    )
                      icon = <FaMapMarkedAlt />;

                    return (
                      <div className="favorite-include-item" key={index}>
                        {icon}
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="favorite-footer">
                  <Link to="/book-now" className="favorite-book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}