import React, { useState } from "react";

const services = {
  PLUMBING: [
    { image: "https://images.nightcafe.studio/jobs/7m6aXAMTMoH8nHC3tQVn/7m6aXAMTMoH8nHC3tQVn--1--a72hu.jpg?tr=w-1600,c-at_max", name: "Arnold", rating: "4", reviews: "7" },
    { image: "https://img.freepik.com/premium-photo/asian-woman-professional-plumber-ai-generated_145713-10928.jpg?w=360", name: "Tessa", rating: "5", reviews: "10" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/038/282/149/small_2x/smiling-technician-repairing-an-hot-water-heater-photo.jpg", name: "John", rating: "5", reviews: "10" },
    { image: "https://img.freepik.com/premium-photo/man-is-working-water-heater-using-various-tools-residential-setting-plumber-installing-water-heater-new-home-ai-generated_538213-16751.jpg", name: "Ivan", rating: "5", reviews: "10" },
    { image: "https://static.vecteezy.com/system/resources/previews/040/332/665/non_2x/ai-generated-portrait-of-a-worker-man-isolated-on-transparent-background-free-png.png", name: "Jack", rating: "5", reviews: "10" },
  ],
  ELECTRICAL: [
    { image: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj", name: "Bobby", rating: "4", reviews: "5" },
    { image: "https://via.placeholder.com/150", name: "Electrician B", rating: "3", reviews: "2" },
    { image: "https://via.placeholder.com/150", name: "Electrician A", rating: "4", reviews: "5" },
    { image: "https://via.placeholder.com/150", name: "Electrician B", rating: "3", reviews: "2" },
    { image: "https://via.placeholder.com/150", name: "Electrician A", rating: "4", reviews: "5" },
  ],
  HVAC: [
    { image: "https://via.placeholder.com/150", name: "HVAC A", rating: "4", reviews: "8" },
    { image: "https://via.placeholder.com/150", name: "HVAC B", rating: "5", reviews: "12" },
    { image: "https://via.placeholder.com/150", name: "HVAC B", rating: "5", reviews: "12" },
    { image: "https://via.placeholder.com/150", name: "HVAC B", rating: "5", reviews: "12" },
    { image: "https://via.placeholder.com/150", name: "HVAC B", rating: "5", reviews: "12" },
  ],
  ROOFING: [
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer B", rating: "5", reviews: "9" },
  ],
  APPLIANCE_REPAIR: [ // Changed from APPLIANCE_REPAIRS to APPLIANCE_REPAIR
    { image: "https://via.placeholder.com/150", name: "Repair A", rating: "4", reviews: "3" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
    { image: "https://via.placeholder.com/150", name: "Roofer A", rating: "4", reviews: "6" },
  ],
};

const ServiceCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("PLUMBING");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setSelectedCategory(category); // Change category after a delay
      setIsLoading(false); // Stop loading
    }, 300); // Delay in milliseconds (300ms in this case)
  };

  return (
    <div className="bg-green-100 p-8">
      <div className="flex justify-around mb-6">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`text-lg font-bold px-4 py-2 rounded-full transition duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-transparent text-gray-500 hover:bg-white hover:text-black"
            }`}
            onClick={() => handleCategoryChange(category)}
            disabled={isLoading} // Disable button while loading
          >
            {category.replace("_", " ")} 
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {services[selectedCategory].map((service, index) => (
          <div
            key={index}
            className={`bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center transition-opacity duration-300 ${
              isLoading ? "opacity-50" : "opacity-100"
            }`}
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