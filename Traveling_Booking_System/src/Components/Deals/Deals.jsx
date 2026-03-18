import React from "react";
import { Link } from "react-router-dom";
import "./Deals.css";
import {
    FaShieldAlt,
    FaHeadset,
    FaMoneyBillWave,
    FaPlaneDeparture,
} from "react-icons/fa";

export default function Deals() {
    const hotDeals = [
        {
            id: 1,
            title: "Dubai Flash Deal",
            subtitle: "Flights + Hotel + Transfers",
            discount: "25% OFF",
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 2,
            title: "Paris Romantic Escape",
            subtitle: "Perfect for couples",
            discount: "20% OFF",
            image:
                "/Deals/Parisromantic.jpg",
        },
        {
            id: 3,
            title: "Bali Summer Offer",
            subtitle: "Resort + Tours",
            discount: "30% OFF",
            image:
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
        },
    ];

    const whyChooseUs = [
        {
            id: 1,
            icon: <FaMoneyBillWave />,
            title: "Best Prices",
            text: "Enjoy competitive rates and exclusive travel deals on top destinations.",
        },
        {
            id: 2,
            icon: <FaShieldAlt />,
            title: "Secure Booking",
            text: "Your payment details and personal information stay protected.",
        },
        {
            id: 3,
            icon: <FaHeadset />,
            title: "24/7 Support",
            text: "Get help anytime before, during, or after your booking.",
        },
        {
            id: 4,
            icon: <FaPlaneDeparture />,
            title: "All-in-One Travel",
            text: "Book flights, hotels, tours, cars, and more in one place.",
        },
    ];

    return (
        <div className="home-sections-wrap">
            <section className="home-block">
                <div className="home-block-header">
                    <h2>Hot Deals</h2>
                    <p>Limited-time offers on complete travel experiences.</p>
                </div>

                <div className="home-hotdeals-grid">
                    {hotDeals.map((deal) => (
                        <div
                            key={deal.id}
                            className="home-hotdeal-card"
                            style={{ backgroundImage: `url(${deal.image})` }}
                        >
                            <div className="home-hotdeal-overlay">
                                <span className="home-deal-badge">{deal.discount}</span>
                                <h3>{deal.title}</h3>
                                <p>{deal.subtitle}</p>
                                <Link to="/packages" className="home-deal-btn">
                                    Explore Deal
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="deals-center-box">
                <h3>Find Your Perfect Trip</h3>

                <p>
                    Explore hundreds of curated travel packages including flights, hotels,
                    tours, and transportation — all in one place.
                </p>

                <Link to="/packages" className="deals-more-btn">
                    Explore All Packages
                </Link>

                <div className="deals-trust">
                    ✔ Trusted by thousands of travelers
                    ✔ Secure booking
                    ✔ Best price guarantee
                </div>
            </div>

            <section className="home-block">
                <div className="home-block-header">
                    <h2>Why Choose Us</h2>
                    <p>Everything you need for a smooth and trusted booking experience.</p>
                </div>

                <div className="home-why-grid">
                    {whyChooseUs.map((item) => (
                        <div key={item.id} className="home-why-card">
                            <div className="home-why-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}