import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="w-48 h-64 bg-white shadow-lg rounded-lg overflow-hidden mb-4 flex flex-col"> {/* Set fixed width */}
            <img className="h-40 w-full object-cover" src={imageSrc} alt={title} />
            <div className="flex-grow p-4 flex flex-col justify-between"> {/* Flex-grow to fill space */}
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-700 text-sm overflow-hidden text-ellipsis">{description}</p> {/* Handle overflow */}
            </div>
        </div>
    );
};

export default Card;