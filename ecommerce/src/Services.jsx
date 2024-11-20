import React, { useState } from "react";

const services = [
  { category: "PLUMBING", image: "https://via.placeholder.com/150", name: "Name", rating: "4", reviews: "7" },
  { category: "ELECTRICAL", image: "https://via.placeholder.com/150", name: "Name", rating: "4", reviews: "7" },
  { category: "HVAC", image: "https://via.placeholder.com/150", name: "Name", rating: "4", reviews: "7" },
  { category: "ROOFING", image: "https://via.placeholder.com/150", name: "Name", rating: "4", reviews: "7" },
  { category: "APPLIANCE REPAIRS", image: "https://via.placeholder.com/150", name: "Name", rating: "4", reviews: "7" },
];

const ServiceCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("PLUMBING");

  return (
    <div className="bg-green-100 p-8">
      {/* Category Labels */}
      <div className="flex justify-around mb-6">
        {services.map((service) => (
          <button
            key={service.category}
            className={`text-lg font-bold ${
              selectedCategory === service.category ? "text-black underline" : "text-gray-500"
            }`}
            onClick={() => setSelectedCategory(service.category)}
          >
            {service.category}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {services
          .filter((service) => service.category === selectedCategory)
          .map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center"
            >
              <img src={service.image} alt={service.name} className="h-24 w-24 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-yellow-500 font-bold">
                ★ {service.rating} ({service.reviews})
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
