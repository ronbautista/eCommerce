import React from 'react';
import CardServices from './CardServices'; // Import the Card component
import './ServiceCard.css';
import { useTranslation } from 'react-i18next'; // Import the specific styles for ServiceCards

const ServiceCards = () => {
    const { t } = useTranslation(); // Use the translation hook

    const serviceCardData = [
        {
            imageSrc: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp",
            titleKey: "service.maintenance_repairs", // Translation key for title
            descriptionKey: "service.maintenance_description" // Translation key for description
        },
        {
            imageSrc: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg",
            titleKey: "service.cleaning_sanitation",
            descriptionKey: "service.cleaning_description"
        },
        {
            imageSrc: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM=",
            titleKey: "service.renovation_improvement",
            descriptionKey: "service.renovation_description"
        },
    ];

    return (
<div className="service-card-container">
    <div className="flex flex-col space-y-4 py-4">
        <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{t('service.categories')}</h2>
        <div className="flex overflow-x-auto flex-nowrap space-x-4">
            {serviceCardData.map((data, index) => (
                <CardServices
                    imageSrc={data.imageSrc}
                    title={t(data.titleKey)} // Translated title
                    description={t(data.descriptionKey)} // Translated description
                    originalTitle={data.titleKey} // Original title key
                    originalDescription={data.descriptionKey} // Original description key
                    key={index}
                />
            ))}
        </div>
    </div>
</div>

    );
};

export default ServiceCards;