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
import Services5 from './Services5.jsx';
import Newpage from './Newpage.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleSelectService = (services) => {
        setSelectedServices(services); 
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
                        {selectedServices.includes('Renovation and Improvement Service') && <Services1 />}
                        {selectedServices.includes('Maintenance and Repair Service') && <Services2 />}
                        {selectedServices.includes('Cleaning and Sanitazion') && <Services3 />}
                        {selectedServices.includes('Installation Service') && <Service4 />}
                        {selectedServices.includes('Landscaping and Outdoor Care') && <Services5 />}
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