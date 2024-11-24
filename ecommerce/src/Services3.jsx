import React, { useState } from "react";

const Services3 = () => {
  const categories = [
    "GENERAL HOUSE CLEANING",
    "WINDOW CLEANING",
    "CARPET / UPHOLSTERY CLEANING",
    "PEST CONTROL", // New category added
  ];

  const servicesData = {
    "GENERAL HOUSE CLEANING": [
      { name: "Interior Cleaning", rating: 4, reviews: 10 },
      { name: "Deep Cleaning", rating: 5, reviews: 15 },
      { name: "Move In/Out Cleaning", rating: 4, reviews: 8 },
    ],
    "WINDOW CLEANING": [
      { name: "Residential Window Cleaning", rating: 5, reviews: 20 },
      { name: "Commercial Window Cleaning", rating: 4, reviews: 12 },
      { name: "Screen Cleaning", rating: 4, reviews: 5 },
    ],
    "CARPET / UPHOLSTERY CLEANING": [
      { name: "Carpet Cleaning", rating: 4, reviews: 9 },
      { name: "Upholstery Cleaning", rating: 5, reviews: 6 },
      { name: "Stain Removal", rating: 4, reviews: 4 },
    ],
    "PEST CONTROL": [ // Services for the new category
      { name: "Pest Inspection", rating: 5, reviews: 10 },
      { name: "Pest Extermination", rating: 4, reviews: 8 },
      { name: "Preventive Treatments", rating: 5, reviews: 12 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Header Text with White Background */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold text-center">
          Cleaning and Sanitation
        </h1>
      </div>

      {/* Top Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-black font-semibold rounded-lg shadow-md ${
              selectedCategory === category
                ? "bg-white" // Change to white when selected
                : "bg-transparent hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {servicesData[selectedCategory].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            {/* Placeholder for image */}
            <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
            {/* Name */}
            <p className="text-lg font-semibold">{service.name}</p>
            {/* Rating */}
            <div className="flex items-center justify-center mt-2 text-yellow-500">
              <span className="material-icons">star</span>
              <span className="ml-1">{service.rating}</span>
              <span className="ml-1 text-gray-500">({service.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the correct component
export default Services3;