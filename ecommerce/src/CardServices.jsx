import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom

const CardServices = ({ imageSrc, title, description, originalTitle, originalDescription }) => {
    return (
        <Link 
            to={{
                pathname: `/services/${encodeURIComponent(title)}`, // Translated title in URL
                state: { 
                    originalTitle, 
                    originalDescription, 
                    imageSrc 
                } // Pass original data via state
            }}
            className="service-card cursor-pointer"
        >
            <img 
                src={imageSrc} 
                alt={title} 
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
};

export default CardServices;
