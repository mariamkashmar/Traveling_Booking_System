import { useState } from "react";
import "./FindYourProperty.css";

export default function FindYourProperty() {
  const [form, setForm] = useState({
    name: "",
    type: "Hotel",
    city: "",
    country: "",
    price: "",
    guests: 1,
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="fyp-page">
      <div className="fyp-container">
        <h1 className="fyp-title">List Your Property</h1>
        <p className="fyp-subtitle">
          Add your property and start receiving bookings.
        </p>

        <form className="fyp-form" onSubmit={handleSubmit}>

          <div className="fyp-grid">
            <div>
              <label>Property Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Cedar Hills Resort"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Type</label>
              <select name="type" onChange={handleChange}>
                <option>Hotel</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Tour</option>
              </select>
            </div>
          </div>

          <div className="fyp-grid">
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="e.g. Beirut"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="e.g. Lebanon"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="fyp-grid">
            <div>
              <label>Base Price (per night)</label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 120"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                defaultValue="1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Short description about your property..."
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="fyp-btn">
            Submit Property
          </button>

        </form>
      </div>
    </div>
  );
}