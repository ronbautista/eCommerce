import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import Header from './Header'; // Adjust the import paths as necessary
import Services1 from './Services1'; // Import without .jsx
import Services2 from './Services2'; // Import without .jsx
import Services3 from './Services3'; // Import without .jsx
import Service4 from './Service4'; // Import without .jsx
import Services5 from './Services5'; // Import without .jsx
import Footer from './Footer';

function Servicesmain() {
  const { serviceName } = useParams(); // Get the serviceName from the URL parameters

  // Log the serviceName to check its value
  console.log("Service Name:", serviceName);

  // Determine which service component to render based on the serviceName prop
  const renderService = () => {
    switch (decodeURIComponent(serviceName)) { // Decode the serviceName
      case "Renovation and Improvement":
        console.log("Rendering Services1");
        return <Services1 />;
      case "Maintenance & Repairs":
        console.log("Rendering Services2");
        return <Services2 />;
      case "Cleaning & Sanitation":
        console.log("Rendering Services3");
        return <Services3 />;
      case "Installation Services":
        console.log("Rendering Service4");
        return <Service4 />;
      case "Landscaping & Outdoor Care":
        console.log("Rendering Services5");
        return <Services5 />;
      default:
        console.log("No matching service found");
        return <div>Service not found.</div>; // Show a message if no matching service
    }
  };

  return (
    <>
     
      
        {renderService()} {/* Render the appropriate service component */}
    
   
    </>
  );
}

export default Servicesmain; // Changed to export default