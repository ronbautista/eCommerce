import React, { useState } from "react";

const Services3 = () => {
  const categories = [
    "GENERAL HOUSE CLEANING",
    "WINDOW CLEANING",
    "CARPET / UPHOLSTERY CLEANING",
    "PEST CONTROL",
  ];

  const servicesData = {
    "GENERAL HOUSE CLEANING": [
      { name: "Interior Cleaning", rating: 4, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWpTwX9TI1b5igPttHEnwpNWJeiD9CxTIzw&s" },
      { name: "Deep Cleaning", rating: 5, reviews: 15, image: "https://spiffynow.com/cdn/shop/files/house-deep-cleaning-service.jpg?v=1709222529" },
      { name: "Move In/Out Cleaning", rating: 4, reviews: 8, image: "https://thecleanstart.com/wp-content/uploads/2022/04/Move-In-Move-Out-Cleaning.jpg" },
    ],
    "WINDOW CLEANING": [
      { name: "Residential Window Cleaning", rating: 5, reviews: 20, image: "https://www.crystalwhite.com.au/cdn/shop/articles/window-washing.jpg?v=1639047247" },
      { name: "Commercial Window Cleaning", rating: 4, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJTmQ3Hn5Rt9BWVpwY7RFWY7orEWmPV0brA&s" },
      { name: "Screen Cleaning", rating: 4, reviews: 5, image: "https://www.bondcleaninginmelbourne.com.au/wp-content/uploads/2021/10/cleaning-windows-screens.jpg" },
    ],
    "CARPET / UPHOLSTERY CLEANING": [
      { name: "Carpet Cleaning", rating: 4, reviews: 9, image: "https://wizard-cleaning.com.au/wp-content/uploads/2024/05/Deeper-Carpet-Cleaning-1000x550.jpg" },
      { name: "Upholstery Cleaning", rating: 5, reviews: 6, image: "https://www.steamcocarpetcleaning.com/wp-content/uploads/2018/07/72F172F18-Sofa-Cleaning-Wizards-Healthy-Habits-to-Maintain-a-Tidy-Couch.jpg" },
      { name: "Stain Removal", rating: 4, reviews: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwUlHyepOQnaZnNpPt1T_19MnyJ7sP_7a4Q&s" },
    ],
    "PEST CONTROL": [
      { name: "Pest Inspection", rating:  5, reviews: 10, image: "https://www.houseopedia.com/wp-content/uploads/2021/01/Pest-Inspections-in-the-Home-Sales-Process-e1609536648904.jpeg" },
      { name: "Pest Extermination", rating: 4, reviews: 8, image: "https://presidiopestmanagement.com/wp-content/uploads/2023/04/Bug-Extermination-600x366.jpg" },
      { name: "Preventive Treatments", rating: 5, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQu2Y94uuycZccMgqGcwZ1Nb1KkWrBWpKmQ&s" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Header Text with White Background */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-bold bg-white p-4 rounded-lg shadow-md inline-block">
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
            className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
          >
            {/* Render the image */}
            <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded mb-4" />
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