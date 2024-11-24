import React, { useState } from "react";

const Service4 = () => {
  const categories = [
    "APPLIANCE INSTALLATION",
    "SMART HOME DEVICES INSTALLATION",
    "FURNITURE ASSEMBLY",
    "LIGHTING INSTALLATION", // New category added
  ];

  const servicesData = {
    "APPLIANCE INSTALLATION": [
      { name: "Interior Painting", rating: 4, reviews: 10 },
      { name: "Exterior Painting", rating: 5, reviews: 15 },
      { name: "Wall Repair", rating: 4, reviews: 8 },
    ],
    "SMART HOME DEVICES INSTALLATION": [
      { name: "Kitchen Remodelling", rating: 5, reviews: 20 },
      { name: "Bathroom Remodelling", rating: 4, reviews: 12 },
      { name: "Basement Remodelling", rating: 4, reviews: 5 },
    ],
    "FURNITURE ASSEMBLY": [
      { name: "Window Installation", rating: 4, reviews: 9 },
      { name: "Door Installation", rating: 5, reviews: 6 },
      { name: "Custom Windows", rating: 4, reviews: 4 },
    ],
    "LIGHTING INSTALLATION": [ // Services for the new category
      { name: "Hardwood Flooring", rating: 5, reviews: 10 },
      { name: "Laminate Flooring", rating: 4, reviews: 8 },
      { name: "Tile Flooring", rating: 5, reviews: 12 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
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
export default Service4;