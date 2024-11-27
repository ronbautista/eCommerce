import React from 'react';
import CardServices from './CardServices'; // Import the Card component
import './ServiceCard.css'; // Import the specific styles for ServiceCards

const ServiceCards = () => {
    const serviceCardData = [
        {
            imageSrc: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp",
            title: "Maintenance & Repairs",
            description: "Expert plumbing services for all your needs."
        },
        {
            imageSrc: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg",
            title: "Cleaning & Sanitation",
            description: "Professional cleaning services for homes and offices."
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzq7y1VoSUyd1mSe-Gg1R6RxVSwjaq9e4XA&s",
            title: "Installation Services",
            description: "Heating, ventilation, and air conditioning solutions."
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s",
            title: "Landscaping & Outdoor Care",
            description: "Expert landscaping and outdoor maintenance services."
        },
        {
            imageSrc: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM=",
            title: "Renovation and Improvement",
            description: "Home renovation services to enhance your living space."
        },
    ];

    return (
        <div className="service-card-container">
            <div className="flex flex-col space-y-4 py-4">
                <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>Categories</h2>
                <div className="flex overflow-x-auto flex-nowrap space-x-4">
                    {serviceCardData.map((data, index) => (
                        <CardServices {...data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;