import React from 'react';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-48 flex-shrink-0">
            <img src={imageSrc} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;