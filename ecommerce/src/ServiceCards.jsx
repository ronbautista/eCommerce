import React from 'react';
import Card from './Card'; // Import the Card component

const ServiceCards = () => {
    const serviceCardData = [
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Plumbing Services",
            description: "Expert plumbing services for all your needs."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Electrical Services",
            description: "Professional electrical repairs and installations."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "HVAC Services",
            description: "Heating, ventilation, and air conditioning solutions."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Roofing Services",
            description: "Roof repairs and replacements to keep you safe."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Appliance Repairs",
            description: "Get your appliances up and running again."
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-11/12 md:w-2/3 mx-auto mt-8">
            <div className="flex overflow-x-auto flex-nowrap space-x-4 py-4"> {/* Add padding to ensure cards are not cut off */}
                {serviceCardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;