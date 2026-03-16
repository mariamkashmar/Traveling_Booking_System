import "./NewUserOffers.css";
import { useRef } from "react";
import OfferCard from "./OfferCard";

const offers = [
  {
    id: 1,
    discount: "10% OFF",
    title: "Hotels & Homes",
    desc: "Save more on stays, apartments, and holiday homes.",
    icon: "/icons/hotel.png",
  },
  {
    id: 2,
    discount: "3% OFF",
    title: "HK Trains",
    desc: "Get exclusive discounts on selected train bookings.",
    icon: "/icons/train.png",
  },
  {
    id: 3,
    discount: "5% OFF",
    title: "Attractions & Tours",
    desc: "Unlock lower prices on popular activities and experiences.",
    icon: "/icons/ticket.png",
  },
  {
    id: 4,
    discount: "10% OFF",
    title: "Airport Transfers",
    desc: "Enjoy discounted rides to and from the airport.",
    icon: "/icons/car.png",
  },
];

export default function NewUserOffers() {
  const sliderRef = useRef(null);

  return (
    <section className="offers-section">
      <h2 className="offers-title">New User Exclusive</h2>

      <div className="offers-grid" ref={sliderRef}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            discount={offer.discount}
            title={offer.title}
            desc={offer.desc}
            icon={offer.icon}
          />
        ))}
      </div>
    </section>
  );
}