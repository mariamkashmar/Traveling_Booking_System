export default function OfferCard({ discount, title, desc, icon }) {
  return (
    <div className="offer-card">
      <div className="offer-top">
        <img className="offer-icon" src={icon} alt={title} />
        <span className="offer-discount">{discount}</span>
      </div>

      <h4 className="offer-title">{title}</h4>
      <p className="offer-desc">{desc}</p>

      <button className="offer-btn">Use Offer</button>
    </div>
  );
}