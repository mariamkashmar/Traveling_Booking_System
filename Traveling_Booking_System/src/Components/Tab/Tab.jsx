import "./Tab.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs() {
    const [active, setActive] = useState("hotels");

    return (
        <div className="tabs-wrapper">
            <div className="tabs-container">
                <button className={`tab ${active === "hotels" ? "active" : ""}`} onClick={() => setActive("hotels")}>
                    Packages & Deals
                </button>

                <Link to='/Flights'>
                <button className={`tab ${active === "flights" ? "active" : ""}`} onClick={() => setActive("flights")}>
                    Flights
                </button>
                </Link>
                
                <Link to='/Trains'>
                <button className={`tab ${active === "trains" ? "active" : ""}`} onClick={() => setActive("trains")}>
                    Trains
                </button>
                </Link>
                 
                <Link to='/Cars'>
                <button className={`tab ${active === "cars" ? "active" : ""}`} onClick={() => setActive("cars")}>
                    Cars
                </button>
                </Link>
                
                <Link to='/AttractionsandTours'>
                <button className={`tab ${active === "tours" ? "active" : ""}`} onClick={() => setActive("tours")}>
                    Attractions & Tours
                </button>
                </Link>
                
                <Link to="/Favorites">
                <button className={`tab ${active === "fh" ? "active" : ""}`} onClick={() => setActive("fh")}>
                    My Favorites
                </button>
                </Link>
            </div>
        </div>
    );
}