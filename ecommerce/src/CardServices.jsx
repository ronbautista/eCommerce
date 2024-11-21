// ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // You can create a specific CSS file for this component if needed

const CardServices = ({ imageSrc, title, description }) => {
    return (
        <div className="service-card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p> {/* Ensure description is rendered */}
        </div>
    );
};


export default CardServices;