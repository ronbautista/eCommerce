import React, { useState } from "react";

const Service5 = () => {
  const categories = [
    "LAWN CARE",
    "PLANTING & GARDENING",
    "HARDSCAPING",
    "WATER FEATURES", // New category added
  ];

  const servicesData = {
    "LAWN CARE": [
      { name: "Mowing and Trimming", rating: 5, reviews: 20 },
      { name: "Fertilizing", rating: 4, reviews: 12 },
      { name: "Aeration", rating: 4, reviews: 8 },
    ],
    "PLANTING & GARDENING": [
      { name: "Shrub Planting", rating: 4, reviews: 10 },
      { name: "Garden Design", rating: 5, reviews: 15 },
      { name: "Weeding", rating: 3, reviews: 6 },
    ],
    "HARDSCAPING": [
      { name: "Patio Construction", rating: 5, reviews: 18 },
      { name: "Walkways Installation", rating: 4, reviews: 14 },
      { name: "Retaining Walls", rating: 5, reviews: 11 },
    ],
    "WATER FEATURES": [ // Services for the new category
      { name: "Fountain Installation", rating: 5, reviews: 8 },
      { name: "Pond Design", rating: 4, reviews: 10 },
      { name: "Waterfall Features", rating: 5, reviews: 7 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Centered H1 Title with White Background */}
      <div className="flex justify-center mb-6">
        <h1 className="bg-white inline-block p-2 rounded-lg shadow-md text-center text-3xl font-bold">
          Landscaping and Outdoor Care
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
export default Service5;
