import { useState } from "react";
import TripCard from "../components/TripCard";
import useLocalStorage from "../hooks/useLocalStorage";
import ApiPreview from "../components/ApiPreview";



function HomePage() {
  
  const [theme] = useLocalStorage("rehla_theme", "light");
  
  const [trips] = useState([
    {
      id: "home-1",
      title: "Hiking in the Alps",
      location: "Switzerland",
      description: "Amazing views, fresh air, and unforgettable moments.",
    },
    {
      id: "home-2",
      title: "Beach Day in Tel Aviv",
      location: "Israel",
      description: "Sunny day, blue water, and great vibes.",
    },
    {
      id: "home-3",
      title: "Street Food Tour",
      location: "Bangkok",
      description: "Tasted unique dishes and met lovely people.",
    },
    
  ]);

  return (
    
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Experience travel through stories</h1>
          <p>
            Read real travel experiences and get inspired for your next trip.
          </p>
          <button className="hero-button">Start exploring</button>
        </div>
      </section>

      <section className="stories-section">
        <div className="stories-grid">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        <ApiPreview />
      </section>
    </div>
    
  );
  
}

export default HomePage;
