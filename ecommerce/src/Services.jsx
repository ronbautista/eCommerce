import React, { useState } from "react";

const services = {
  PLUMBING: [
    { image: "https://via.placeholder.com/150", name: "Plumber A", rating: "4", reviews: "7" },
    { image: "https://via.placeholder.com/150", name: "Plumber B", rating: "5", reviews: "10" },
  ],
  ELECTRICAL: [
    { image: "https://via.placeholder.com/150", name: "Electrician A", rating: "4", reviews: "5" },
    { image: "https://via.placeholder.com/150", name: "Electrician B", rating: "3", reviews: "2" },
  ],
  HVAC: [
    { image: "https://via.placeholder.com/150", name: "HVAC A", rating: "4", reviews: "8" },
    { image: "https://via.placeholder.com/150", name: "HVAC B", rating: "5", reviews: "12" },
  ],
  ROOFING: [
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer B", rating: "5", reviews: "9" },
  ],
  APPLIANCE_REPAIR: [ // Changed from APPLIANCE_REPAIRS to APPLIANCE_REPAIR
    { image: "https://via.placeholder.com/150", name: "Repair A", rating: "4", reviews: "3" },
    { image: "https://via.placeholder.com/150", name: "Repair B", rating: "5", reviews: "4" },
  ],
};

const ServiceCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("PLUMBING");

  return (
    <div className="bg-green-100 p-8">
      {/* Category Labels */}
      <div className="flex justify-around mb-6">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`text-lg font-bold px-4 py-2 rounded-full transition duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-transparent text-gray-500 hover:bg-white hover:text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.replace("_", " ")} {/* Replace underscore with space for display */}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {services[selectedCategory].map((service, index) => (
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