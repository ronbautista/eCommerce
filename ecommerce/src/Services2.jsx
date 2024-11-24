import React, { useState } from "react";

const Services2 = () => {
  const categories = [
    "Plumbing",
    "Electrical",
    "HVAC",
    "Roofing",
    "Appliance Repairs",
    "Maintenance and Repair",
  ];

  const servicesData = {
    "Plumbing": [
      { name: "Leak Repair", rating: 4, reviews: 10, image: "https://cdn.prod.website-files.com/6361339b831c262ea482dcfa/6579cffd09747cced03ecc70_pipe%20repair.jpg" },
      { name: "Pipe Installation", rating: 5, reviews: 15, image: "https://i.ytimg.com/vi/r9i5E9vsjEQ/maxresdefault.jpg" },
      { name: "Drain Cleaning", rating: 4, reviews: 8, image: "https://www.facilitiesnet.com/resources/editorial/2022/19276-DrainCleaning.jpg" },
    ],
    "Electrical": [
      { name: "Wiring Installation", rating: 5, reviews: 20, image: "https://electricianphilippines.com/wp-content/uploads/2023/07/residential-and-commercial-electrical-installation.webp" },
      { name: "Circuit Breaker Replacement", rating: 4, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HbwdKPW9UghD7eMBIKNjPoS5TiepSVHZuA&s" },
      { name: "Lighting Installation", rating: 4, reviews: 5, image: "https://nicholson-hvac.com/wp-content/uploads/2022/10/Lighting-Installation-Professional-Image.jpg" },
    ],
    "HVAC": [
      { name: "AC Repair", rating: 4, reviews: 9, image: "https://onesourcehomeservice.com/wp-content/uploads/2023/05/AC_Repair_Cost_279259535-1.webp" },
      { name: "Furnace Installation", rating: 5, reviews: 6, image: "https://fire-and-ice-cdn.s3.us-east-2.amazonaws.com/blog/furnace-installation-process/feature.jpg" },
      { name: "Vent Cleaning", rating: 4, reviews: 4, image: "https://advancedairsolutionsoh.com/wp-content/uploads/2017/12/duct-and-dryer-vent-cleaning-advanced-air-solutions-akron-3.jpg" },
    ],
    "Roofing": [
      { name: "Roof Inspection", rating: 5, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCsJLTYoqOBEwdVL21DGUt0y0iUUO4kuRXw&s" },
      { name: "Shingle Replacement", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu0rWCSrlaYyf8i_TvM9U8Qc4sZe87koJpA&s" },
      { name: "Gutter Installation", rating: 5, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHzvQwCKvAKEsj6Gh4ye6HocvDa4xVKrWaQ&s" },
    ],
    "Appliance Repairs": [
      { name: "Washing Machine Repair", rating: 5, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbBmbHnivYMBvdH215GJrgZyTbc7VSKa3yQ&s" },
      { name: "Refrigerator Repair", rating: 4, reviews: 8, image: "https://yashservicespune.com/wp-content/uploads/2020/12/refrigerator-repair.jpg" },
      { name: "Oven Repair", rating: 5, reviews: 12, image: "https://media.istockphoto.com/id/912624814/photo/young-repairman-in-protective-workwear-fixing-oven-in-kitchen.jpg?s=612x612&w=0&k=20&c=VwXvVwAmTjPSPyGB7kLlNqWX8ZIva2tdyb-qvmAxEuc=" },
    ],
    "Maintenance and Repair": [
      { name: "General Maintenance", rating: 5, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6waDU6O_96ig5eMPJ2Y_QT9oZpTiOxh3SZQ&s" },
      { name: "Furniture Assembly", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtzKfl0s0TMwB5fSK4M2MlBqeZWlOuDsL3Q&s" },
      { name: "Home Repair Services", rating: 5, reviews: 12, image: "https://blog.renovationfind.com/wp-content/uploads/2023/12/Exterior-Renovation-Edmonton-1.jpg" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Header Text with White Background */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-bold bg-white p-4 rounded-lg shadow-md inline-block">
          Maintenance and Repair Services
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
export default Services2;