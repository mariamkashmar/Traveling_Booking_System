import "./Tab.css";
import { useState } from "react";

export default function Tabs() {
    const [active, setActive] = useState("hotels");

    return (
        <div className="tabs-wrapper">
            <div className="tabs-container">
                <button className={`tab ${active === "hotels" ? "active" : ""}`} onClick={() => setActive("hotels")}>
                    Hotels & Homes
                </button>

                <button className={`tab ${active === "flights" ? "active" : ""}`} onClick={() => setActive("flights")}>
                    Flights
                </button>

                <button className={`tab ${active === "trains" ? "active" : ""}`} onClick={() => setActive("trains")}>
                    Trains
                </button>

                <button className={`tab ${active === "cars" ? "active" : ""}`} onClick={() => setActive("cars")}>
                    Cars
                </button>

                <button className={`tab ${active === "tours" ? "active" : ""}`} onClick={() => setActive("tours")}>
                    Attractions & Tours
                </button>

                <button className={`tab ${active === "fh" ? "active" : ""}`} onClick={() => setActive("fh")}>
                    Flight + Hotel
                </button>
            </div>
        </div>
    );
}