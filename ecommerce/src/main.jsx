import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './Header.jsx';
import Advertisement from './Advertisement.jsx';
import Carousel from './Carousel.jsx';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import ServiceCards from './ServiceCards.jsx';
import Services from './Services.jsx';
import BackgroundText from './BackgroundText.jsx';
import AboutMe from './AboutMe.jsx';
import Services1 from './Services1.jsx';
import Services2 from './Services2.jsx';
import Services3 from './Services3.jsx';
import Service4 from './Service4.jsx';
import Newpage from './Newpage.jsx';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    const [selectedServices, setSelectedServices] = useState([]); // State for selected services

    const handleSelectService = (services) => {
        setSelectedServices(services); // Update selected services
    };

    return (
        <>
            <Header onSelectService={handleSelectService} /> {/* Pass the handler to Header */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Advertisement />
                        <Carousel />
                        <Cards />
                        <ServiceCards />
                        <Services />
                        <BackgroundText />
                        <AboutMe />
                        {/* Render Services below AboutMe */}
                        {selectedServices.includes('Service1') && <Services1 />}
                        {selectedServices.includes('Service2') && <Services2 />}
                        {selectedServices.includes('Service3') && <Services3 />}
                        {selectedServices.includes('Service4') && <Service4 />}
                    </>
                } />
                <Route path="/new" element={<Newpage />} />
                {/* Add other routes as needed */}
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