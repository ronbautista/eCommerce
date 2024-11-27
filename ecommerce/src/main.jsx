import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Advertisement from "./Advertisement.jsx";
import Carousel from "./Carousel.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import ServiceCards from "./ServiceCards.jsx";
import Servicesmain from "./Servicesmain.jsx"; // Import the Servicesmain component
import NewPage from "./Newpage.jsx"; // Ensure NewPage is imported
import Services1 from './Services1'; // Importing services
import Services2 from './Services2';
import Services3 from './Services3';
import Service4 from './Service4';
import Services5 from './Services5';
import Aliceguo from './Aliceguo'; // Import the Aliceguo component

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectService = (services) => {
    setSelectedServices(services);
  };

  return (
    <>
      <Header onSelectService={handleSelectService} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Advertisement />
              <Carousel />
              <Cards />
              <ServiceCards />
              {/* Render selected services on the main page */}
              {selectedServices.includes("Renovation and Improvement Service") && <Services1 />}
              {selectedServices.includes("Maintenance and Repair Service") && <Services2 />}
              {selectedServices.includes("Cleaning and Sanitization") && <Services3 />}
              {selectedServices.includes("Installation Service") && <Service4 />}
              {selectedServices.includes("Landscaping and Outdoor Care") && <Services5 />}
            </>
          }
        />
        {/* Route to Servicesmain and pass selected service name */}
        <Route path="/services/:serviceName" element={<Servicesmain />} />
        <Route path="/new" element={<NewPage />} /> {/* Define the new route */}
        <Route path="/Aliceguo" element={<Aliceguo />} /> {/* Add the route for Aliceguo */}
      </Routes>
      <Footer />
    </>
  );
}

// Render the main component
root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);