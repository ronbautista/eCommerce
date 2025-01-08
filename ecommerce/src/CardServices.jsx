import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom

const CardServices = ({ imageSrc, title, description }) => {
    return (
        <Link 
            to={`/services/${encodeURIComponent(title)}`} 
            className="service-card cursor-pointer" // Use the CSS class for styling
        >
            <img 
                src={imageSrc} 
                alt={title} 
            />
            <h3>{title}</h3> {/* No truncate class on title */}
            <p>{description}</p> {/* No truncate class on description */}
        </Link>
    );
};

export default CardServices;