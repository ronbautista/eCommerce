import React, { useState } from "react";

const Service4 = () => {
  const categories = [
    "APPLIANCE INSTALLATION",
    "SMART HOME DEVICES INSTALLATION",
    "FURNITURE ASSEMBLY",
  ];

  const servicesData = {
    "APPLIANCE INSTALLATION": [
      { name: "Refrigerator Installation", rating: 4, reviews: 10, image: "https://media.istockphoto.com/id/1180607321/photo/two-young-male-movers-placing-steel-refrigerator-in-kitchen.jpg?s=612x612&w=0&k=20&c=PW4dVclZ9wCgc-qq6BLHuMKzzStEW2N4-DxmlUk0K54=" },
      { name: "Washing Machine Installation", rating: 5, reviews: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bbcsNZjyrGeCI9RMHbQ3FqfjMQ9ZBDoMuA&s" },
      { name: "Dishwasher Installation", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpwaV59nA5DDoQu1ddfwQUDLZso8qP8kqlA&s" },
    ],
    "SMART HOME DEVICES INSTALLATION": [
      { name: "Smart Thermostat Installation", rating: 5, reviews: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLBK5a93CkEyfkKW0I6DaiV0rz0ql_qyjFQ&s" },
      { name: "Smart Security Camera Installation", rating: 4, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxhntaJyFiRe0IZrz_49hCOv79yV8Vs0PLQ&s" },
      { name: "Smart Lighting Installation", rating: 4, reviews: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhx4YDsKbI8iKfIPJfFP1MQY5AXvSh7WfiA&s" },
    ],
    "FURNITURE ASSEMBLY": [
      { name: "IKEA Furniture Assembly", rating: 4, reviews: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAnSmD920fHFR37z6vQtPRKirO4JQfqJxgA&s" },
      { name: "Office Furniture Assembly", rating: 5, reviews: 6, image: "https://i.ytimg.com/vi/UrZL-c9UgP4/maxresdefault.jpg" },
      { name: "Outdoor Furniture Assembly", rating: 4, reviews: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWbMX5IWjU1ztFZny7ClwSSI3VNSfi9xicA&s" },
    ],

  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Centered H1 Title with White Background */}
      <div className="flex justify-center mb-6">
        <h1 className="bg-white inline-block p-2 rounded-lg shadow-md text-center text-3xl font-bold">
          Installation Services
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
export default Service4;