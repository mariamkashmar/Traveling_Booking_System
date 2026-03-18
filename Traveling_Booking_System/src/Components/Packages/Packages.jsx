import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Packages.css";
import { getFavorites, toggleFavoritePackage } from "../../Utils/FavoritesUtils";
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

const packagesData = [
  {
    id: 1,
    title: "Paris Luxury Escape",
    destination: "France",
    duration: "5 Days / 4 Nights",
    price: "$1,480",
    rating: 4.9,
    image:
      "/packages/france.webp",
    tourType: "Private Tour",
    badge: "Best Seller",
    description:
      "A premium Paris getaway with flights, boutique hotel stay, airport transfers, guided sightseeing, and city transport included.",
    includes: [
      "Round-trip flight",
      "4-star hotel",
      "Airport transfer",
      "Train pass",
      "Private car transfer",
      "Eiffel & Louvre guided visit",
    ],
  },
  {
    id: 2,
    title: "Istanbul Heritage Journey",
    destination: "Türkiye",
    duration: "6 Days / 5 Nights",
    price: "$1,120",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Popular",
    description:
      "Discover Istanbul with flights, hotel accommodation, Bosphorus experience, transfers, and guided city highlights.",
    includes: [
      "Round-trip flight",
      "Central hotel",
      "Airport pickup",
      "City transport card",
      "Bosphorus cruise",
      "Group guided tour",
    ],
  },
  {
    id: 3,
    title: "Swiss Alpine Discovery",
    destination: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: "$2,190",
    rating: 4.9,
    image:
      "/packages/Switzerland.webp",
    tourType: "Private Tour",
    badge: "Premium",
    description:
      "A scenic Switzerland package with flights, mountain-view hotels, rail journeys, private transfers, and alpine excursions.",
    includes: [
      "Round-trip flight",
      "Mountain hotel stay",
      "Swiss train tickets",
      "Private car transfer",
      "Sightseeing tickets",
      "Breakfast included",
    ],
  },
  {
    id: 4,
    title: "Dubai City & Desert Experience",
    destination: "UAE",
    duration: "5 Days / 4 Nights",
    price: "$1,390",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Hot Deal",
    description:
      "Enjoy Dubai with flights, hotel stay, airport transport, desert safari, guided city tour, and flexible local transfers.",
    includes: [
      "Round-trip flight",
      "4-star hotel",
      "Airport transfer",
      "Desert safari",
      "City tour",
      "Shared transport",
    ],
  },
  {
    id: 5,
    title: "Rome Cultural Getaway",
    destination: "Italy",
    duration: "6 Days / 5 Nights",
    price: "$1,530",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Recommended",
    description:
      "A complete Rome holiday package including flights, elegant hotel, train connections, museum access, and private touring.",
    includes: [
      "Round-trip flight",
      "Hotel stay",
      "Train tickets",
      "Private guided tour",
      "Museum access",
      "Airport transfer",
    ],
  },
  {
    id: 6,
    title: "Tokyo Modern Adventure",
    destination: "Japan",
    duration: "8 Days / 7 Nights",
    price: "$2,480",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Top Rated",
    description:
      "Explore Tokyo with flights, hotel, airport connection, bullet train experience, and guided day tours.",
    includes: [
      "Round-trip flight",
      "Hotel accommodation",
      "Airport transfer",
      "Bullet train ticket",
      "City tour",
      "Group activities",
    ],
  },
  {
    id: 7,
    title: "Cappadocia Dream Escape",
    destination: "Türkiye",
    duration: "4 Days / 3 Nights",
    price: "$980",
    rating: 4.8,
    image:
      "/packages/istanbul.jpg",
    tourType: "Private Tour",
    badge: "Romantic",
    description:
      "A magical escape with flight, cave hotel, airport transfer, private sightseeing, and optional hot-air-balloon experience.",
    includes: [
      "Round-trip flight",
      "Cave hotel",
      "Airport pickup",
      "Private day tour",
      "Local car service",
      "Breakfast included",
    ],
  },
  {
    id: 8,
    title: "Barcelona Coastal Break",
    destination: "Spain",
    duration: "5 Days / 4 Nights",
    price: "$1,260",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "City Favorite",
    description:
      "A stylish Barcelona package with flights, hotel, local transport, shared guided tours, and beachside leisure time.",
    includes: [
      "Round-trip flight",
      "Hotel stay",
      "Airport transfer",
      "Train/metro pass",
      "Group city tour",
      "Attraction tickets",
    ],
  },
  {
    id: 9,
    title: "Bali Relaxation Retreat",
    destination: "Indonesia",
    duration: "7 Days / 6 Nights",
    price: "$1,740",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Wellness",
    description:
      "A complete Bali retreat package featuring flights, resort stay, private transfers, island tours, and leisure activities.",
    includes: [
      "Round-trip flight",
      "Resort hotel",
      "Private airport transfer",
      "Private island tour",
      "Car with driver",
      "Breakfast included",
    ],
  },
  {
    id: 10,
    title: "London Explorer Package",
    destination: "United Kingdom",
    duration: "6 Days / 5 Nights",
    price: "$1,860",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Classic",
    description:
      "Visit London with flights, central hotel, airport transfer, rail pass, attractions, and guided city discovery.",
    includes: [
      "Round-trip flight",
      "Central hotel",
      "Airport transfer",
      "Rail pass",
      "Group sightseeing",
      "Landmark entry tickets",
    ],
  },
  {
    id: 11,
    title: "Maldives Island Escape",
    destination: "Maldives",
    duration: "6 Days / 5 Nights",
    price: "$2,650",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Luxury",
    description:
      "An exclusive island holiday with flights, beachfront resort, speedboat transfers, guided activities, and private leisure experiences.",
    includes: [
      "Round-trip flight",
      "Beach resort stay",
      "Private airport transfer",
      "Boat transfer",
      "Private island tour",
      "Breakfast included",
    ],
  },
  {
    id: 12,
    title: "Vienna Imperial Journey",
    destination: "Austria",
    duration: "5 Days / 4 Nights",
    price: "$1,420",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Elegant",
    description:
      "Discover Vienna with flights, hotel stay, rail passes, guided city experiences, and seamless local transportation.",
    includes: [
      "Round-trip flight",
      "4-star hotel",
      "Airport transfer",
      "Train/metro pass",
      "Group city tour",
      "Attraction tickets",
    ],
  },
  {
    id: 13,
    title: "New York City Lights",
    destination: "USA",
    duration: "6 Days / 5 Nights",
    price: "$2,080",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Urban Favorite",
    description:
      "A complete New York holiday with flights, Manhattan hotel, airport transfers, guided tours, and city transport included.",
    includes: [
      "Round-trip flight",
      "Central hotel",
      "Airport transfer",
      "Metro pass",
      "Group sightseeing tour",
      "Landmark tickets",
    ],
  },
  {
    id: 14,
    title: "Marrakech Desert & City Retreat",
    destination: "Morocco",
    duration: "7 Days / 6 Nights",
    price: "$1,590",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Adventure",
    description:
      "Experience Morocco with flights, riad accommodation, private transfers, desert excursions, and guided cultural visits.",
    includes: [
      "Round-trip flight",
      "Traditional hotel stay",
      "Private airport transfer",
      "Private desert tour",
      "Car with driver",
      "Breakfast included",
    ],
  },
  {
    id: 15,
    title: "Santorini Sunset Escape",
    destination: "Greece",
    duration: "5 Days / 4 Nights",
    price: "$1,760",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Romantic",
    description:
      "A dreamy Santorini package with flights, cliffside hotel, airport transfer, island exploration, and private sunset experiences.",
    includes: [
      "Round-trip flight",
      "Sea-view hotel",
      "Private airport transfer",
      "Private island tour",
      "Local car service",
      "Breakfast included",
    ],
  },
  {
    id: 16,
    title: "Berlin Culture Explorer",
    destination: "Germany",
    duration: "5 Days / 4 Nights",
    price: "$1,340",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "History",
    description:
      "Explore Berlin with flights, stylish hotel, train passes, guided historical tours, and major attraction access.",
    includes: [
      "Round-trip flight",
      "Hotel stay",
      "Airport transfer",
      "Rail pass",
      "Group guided tour",
      "Museum tickets",
    ],
  },
  {
    id: 17,
    title: "Thailand Beach & City Combo",
    destination: "Thailand",
    duration: "8 Days / 7 Nights",
    price: "$1,980",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Tropical",
    description:
      "A balanced Thailand package including flights, city hotel, beach resort, local transfers, and guided shared tours.",
    includes: [
      "Round-trip flight",
      "Hotel + resort stay",
      "Airport transfer",
      "Shared island tour",
      "Train tickets",
      "Breakfast included",
    ],
  },
  {
    id: 18,
    title: "Prague Fairytale Escape",
    destination: "Czech Republic",
    duration: "4 Days / 3 Nights",
    price: "$1,150",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Charming",
    description:
      "A charming Prague holiday with flights, boutique hotel, airport transfers, private city tour, and historic experiences.",
    includes: [
      "Round-trip flight",
      "Boutique hotel",
      "Private airport transfer",
      "Private guided tour",
      "Attraction tickets",
      "Breakfast included",
    ],
  },
  {
    id: 19,
    title: "Seoul Discovery Package",
    destination: "South Korea",
    duration: "7 Days / 6 Nights",
    price: "$2,140",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80",
    tourType: "Group Tour",
    badge: "Modern",
    description:
      "Discover Seoul with flights, hotel, airport rail connection, guided tours, and top city experiences included.",
    includes: [
      "Round-trip flight",
      "Hotel accommodation",
      "Airport transfer",
      "Rail pass",
      "Group city tour",
      "Landmark tickets",
    ],
  },
  {
    id: 20,
    title: "Egypt Nile & Cairo Experience",
    destination: "Egypt",
    duration: "7 Days / 6 Nights",
    price: "$1,690",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=80",
    tourType: "Private Tour",
    badge: "Classic",
    description:
      "A complete Egypt experience with flights, hotel stays, private transfers, guided pyramid visits, and Nile-side experiences.",
    includes: [
      "Round-trip flight",
      "Hotel stay",
      "Private airport transfer",
      "Private guided tour",
      "Car with driver",
      "Attraction tickets",
    ],
  },
];

export default function Packages() {
  const [favorites, setFavorites] = useState(getFavorites());
  const [activeFilter, setActiveFilter] = useState("All");
  const toggleFavorite = (pkg) => {
    const updatedFavorites = toggleFavoritePackage(pkg);
    setFavorites(updatedFavorites);
  };

  const filteredPackages = useMemo(() => {
    if (activeFilter === "All") return packagesData;
    return packagesData.filter((item) => item.tourType === activeFilter);
  }, [activeFilter]);

  return (
    <section className="packages-page">
      <div className="packages-hero">
        <div className="packages-hero-text">
          <span className="packages-subtitle">Curated Travel Packages</span>
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

      <div className="packages-grid">
        {filteredPackages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <div
              className="package-image"
              style={{ backgroundImage: `url(${pkg.image})` }}

            >
              <span className="package-badge">{pkg.badge}</span>
              <span
                className={`tour-type ${pkg.tourType === "Private Tour" ? "private" : "group"
                  }`}
              >
                {pkg.tourType === "Private Tour" ? <FaUserTie /> : <FaUsers />}
                {pkg.tourType}
              </span>
              <button
                type="button"
                className={`favorite-btn ${favorites.some((item) => item.id === pkg.id) ? "active" : ""
                  }`}
                onClick={() => toggleFavorite(pkg)}
              >
                {favorites.some((item) => item.id === pkg.id) ? <FaHeart /> : <FaRegHeart />}
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
                <span className="price">{pkg.price}</span>
              </div>

              <div className="includes-grid">
                {pkg.includes.map((item, index) => {
                  let icon = <FaCheckCircle />;

                  if (item.toLowerCase().includes("flight")) icon = <FaPlane />;
                  else if (item.toLowerCase().includes("hotel") || item.toLowerCase().includes("resort"))
                    icon = <FaHotel />;
                  else if (item.toLowerCase().includes("train") || item.toLowerCase().includes("rail"))
                    icon = <FaTrain />;
                  else if (item.toLowerCase().includes("car") || item.toLowerCase().includes("driver"))
                    icon = <FaCar />;
                  else if (item.toLowerCase().includes("tour") || item.toLowerCase().includes("tickets"))
                    icon = <FaMapMarkedAlt />;

                  return (
                    <div className="include-item" key={index}>
                      {icon}
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>

              <Link to="/BookNow" className="package-footer">
                <button className="book-btn">Book Package</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}