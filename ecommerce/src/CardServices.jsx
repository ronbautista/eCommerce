// CardServices.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ServiceCard.css'; // Your existing CSS for styling

const CardServices = ({ imageSrc, title, description }) => {
    return (
        <Link to={`/services/${encodeURIComponent(title)}`} className="service-card"> {/* Wrap the card in Link */}
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p> {/* Ensure description is rendered */}
        </Link>
    );
};

export default CardServices;