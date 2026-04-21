import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Packages.css";
import { getFavorites, toggleFavoritePackage } from "../../Utils/FavoritesUtils";
import api from "../../api/axios";
import {
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

export default function Packages() {
  const [favorites, setFavorites] = useState(getFavorites());
  const [activeFilter, setActiveFilter] = useState("All");
  const [packagesData, setPackagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleFavorite = (pkg) => {
    const updatedFavorites = toggleFavoritePackage(pkg);
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await api.get("/packages/admin/getAllPackages");
        setPackagesData(res.data.data || []);
      } catch (err) {
        console.log("PACKAGE FETCH ERROR:", err.response?.data || err.message);
        setError(
          err.response?.data?.error ||
            err.response?.data?.message ||
            "Failed to load packages"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const filteredPackages = useMemo(() => {
    if (activeFilter === "All") return packagesData;
    return packagesData.filter((item) => item.tourType === activeFilter);
  }, [activeFilter, packagesData]);

  return (
    <section className="packages-page">
      <div className="packages-hero">
        <div className="packages-hero-text">
          <span className="packages-subtitle"></span>
          <h1>Complete Trip Packages For Your Next Journey</h1>
          <p>
            Book full travel packages including flights, hotels, trains, cars,
            transfers, tours, and top experiences in one place.
          </p>

          <div className="packages-filters">
            <button
              className={activeFilter === "All" ? "active" : ""}
              onClick={() => setActiveFilter("All")}
            >
              All Packages
            </button>
            <button
              className={activeFilter === "Private Tour" ? "active" : ""}
              onClick={() => setActiveFilter("Private Tour")}
            >
              Private Tours
            </button>
            <button
              className={activeFilter === "Group Tour" ? "active" : ""}
              onClick={() => setActiveFilter("Group Tour")}
            >
              Group Tours
            </button>
          </div>
        </div>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading packages...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div className="package-card" key={pkg._id}>
              <div
                className="package-image"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <span className="package-badge">{pkg.badge}</span>

                <span
                  className={`tour-type ${
                    pkg.tourType === "Private Tour" ? "private" : "group"
                  }`}
                >
                  {pkg.tourType === "Private Tour" ? <FaUserTie /> : <FaUsers />}
                  {pkg.tourType}
                </span>

                <button
                  type="button"
                  className={`favorite-btn ${
                    favorites.some((item) => (item._id || item.id) === pkg._id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => toggleFavorite(pkg)}
                >
                  {favorites.some((item) => (item._id || item.id) === pkg._id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>

              <div className="package-content">
                <div className="package-top">
                  <div>
                    <h3>{pkg.title}</h3>
                    <p className="destination">
                      <FaMapMarkedAlt /> {pkg.destination}
                    </p>
                  </div>

                  <div className="rating">
                    <FaStar />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                <p className="package-description">{pkg.description}</p>

                <div className="package-meta">
                  <span>
                    <FaCalendarAlt /> {pkg.duration}
                  </span>

                  {pkg.date && (
                    <span className="package-date">
                      <FaCalendarAlt /> {pkg.date}
                    </span>
                  )}

                  <span className="price">{pkg.price}</span>
                </div>

                <div className="includes-grid">
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
                      <div className="include-item" key={index}>
                        {icon}
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  to="/Booking"
                  state={{ selectedPackage: pkg }}
                  className="package-footer"
                >
                  <button className="book-btn">Book Package</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}