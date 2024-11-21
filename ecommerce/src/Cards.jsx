import React from 'react';
import Card from './Card'; // Import the Card component

const Cards = () => {
    const cardData = [
        // Maintenance and Repairs
        {
            imageSrc: "https://img.freepik.com/premium-photo/portrait-confident-female-engineer-standing-with-crossed-arms-factory-woman-professional-engineer-electrical-specialist-ai-generated_538213-8034.jpg",
            title: "Ronald",
            description: "Engineer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Alice",
            description: "Plumber."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Bob",
            description: "Electrician."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Charlie",
            description: "HVAC Specialist."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "David",
            description: "General Contractor."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Eva",
            description: "Handyman."
        },

        // Cleaning and Sanitation
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Daisy",
            description: "Cleaner."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Eva",
            description: "Sanitation Expert."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Frank",
            description: "Housekeeper."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Grace",
            description: "Janitor."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Henry",
            description: "Commercial Cleaner."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Isabella",
            description: "Residential Cleaner."
        },

        // Installation Services
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "George",
            description: "Installation Technician."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Hannah",
            description: "Appliance Installer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Ian",
            description: "Electrical Installer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Jack",
            description: "Plumbing Installer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Kathy",
            description: "Window Installer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Liam",
            description: "Flooring Installer."
        },

        // Landscaping and Outdoor Care 
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Jack",
            description: "Landscaper."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Kathy",
            description: "Gardener."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Liam",
            description: "Outdoor Maintenance."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Mia",
            description: "Landscape Designer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Noah",
            description: "Irrigation Specialist."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Olivia",
            description: "Tree Surgeon."
        },

        // Renovations
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Mia",
            description: "Renovation Specialist."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Noah",
            description: "Home Renovator."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Olivia",
            description: "Interior Designer."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Paul",
            description: "Remodeling Expert."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Quinn",
            description: "Construction Manager."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Rita",
            description: "Architect."
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full md:w-2/3 mx-auto overflow-x-auto whitespace-nowrap mt-8">
            <div className="flex overflow-x-auto flex-nowrap space-x-4">
                {cardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default Cards;