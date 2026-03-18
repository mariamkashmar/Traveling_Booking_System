import "./TravelGuides.css";
import {
  FaMapMarkerAlt,
  FaStar,
  FaGlobe,
  FaUserFriends,
} from "react-icons/fa";

const guides = [
  {
    id: 1,
    name: "Ahmet Kaya",
    age: 29,
    country: "Türkiye",
    city: "Istanbul",
    image: "/Guides/Ahmet.png",
    rating: 4.9,
    languages: "English, Turkish",
    specialty: "Historic tours and local markets",
  },
  {
    id: 2,
    name: "Sophie Martin",
    age: 32,
    country: "France",
    city: "Paris",
    image: "/Guides/Sophie.png",
    rating: 4.8,
    languages: "English, French",
    specialty: "Museums, cafés, and city walks",
  },
  {
    id: 3,
    name: "Omar Hassan",
    age: 35,
    country: "UAE",
    city: "Dubai",
    image: "/Guides/Omar.png",
    rating: 4.7,
    languages: "English, Arabic",
    specialty: "Luxury spots and desert experiences",
  },
  {
    id: 4,
    name: "Emily Brown",
    age: 27,
    country: "United Kingdom",
    city: "London",
    image: "/Guides/Emily.png",
    rating: 4.9,
    languages: "English",
    specialty: "City highlights and hidden gems",
  },
  {
    id: 5,
    name: "Marco Rossi",
    age: 31,
    country: "Italy",
    city: "Rome",
    image: "/Guides/Marco.png",
    rating: 4.8,
    languages: "English, Italian",
    specialty: "Ancient sites and food tours",
  },
  {
    id: 6,
    name: "Nora Ali",
    age: 26,
    country: "Egypt",
    city: "Cairo",
    image: "/Guides/Nora.png",
    rating: 4.6,
    languages: "English, Arabic",
    specialty: "Pyramids, museums, and culture",
  },
];

export default function TravelGuide() {
  return (
    <div className="travel-guide-page">
      <section className="travel-guide-hero">
        <div className="travel-guide-overlay">
          <h1>Travel Guide</h1>
          <p>
            Discover local guides from around the world and choose the perfect
            companion for your journey
          </p>
        </div>
      </section>

      <section className="guides-section">
        <div className="guides-header">
          <h2>Popular Local Guides</h2>
          <p>Browse trusted guides by country, city, and expertise</p>
        </div>

        <div className="guides-grid">
          {guides.map((guide) => (
            <div className="guide-card" key={guide.id}>
              <img src={guide.image} alt={guide.name} className="guide-image" />

              <div className="guide-info">
                <div className="guide-top">
                  <h3>{guide.name}</h3>
                  <span className="guide-rating">
                    <FaStar /> {guide.rating}
                  </span>
                </div>

                <p className="guide-location">
                  <FaMapMarkerAlt /> {guide.city}, {guide.country}
                </p>

                <div className="guide-meta">
                  <span>Age: {guide.age}</span>
                </div>

                <p className="guide-languages">
                  <FaGlobe /> {guide.languages}
                </p>

                <p className="guide-specialty">
                  <FaUserFriends /> {guide.specialty}
                </p>

                <button className="guide-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}