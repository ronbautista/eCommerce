import React, { useState } from "react";

const Service5 = () => {
  const categories = [
    "LAWN CARE",
    "PLANTING & GARDENING",
    "HARDSCAPING",
    "WATER FEATURES",
  ];

  const servicesData = {
    "LAWN CARE": [
      {
        name: "Mowing and Trimming",
        rating: 5,
        reviews: 20,
        image: "https://apluslawn.com/files/account/images/content-mowing-a-lawn.webp",
      },
      {
        name: "Fertilizing",
        rating: 4,
        reviews: 12,
        image: "https://cdn.mos.cms.futurecdn.net/Z6FyBvDuHAyhf9iUyF9CEn-415-80.jpg",
      },
      {
        name: "Aeration",
        rating: 4,
        reviews: 8,
        image: "https://transform.octanecdn.com/fit/1600x900/https://octanecdn.com/turfmasterslawncarecom/Aeration-with-aerator-800x494.jpg",
      },
    ],
    "PLANTING & GARDENING": [
      {
        name: "Shrub Planting",
        rating: 4,
        reviews: 10,
        image: "https://transform.octanecdn.com/fit/1600x900/https://octanecdn.com/turfmasterslawncarecom/turfmasterslawncarecom_264654237.jpeg",
      },
      {
        name: "Garden Design",
        rating: 5,
        reviews: 15,
        image: "https://cdn.mos.cms.futurecdn.net/zTxpYGWrvsqEBqSUFnMUTd-1200-80.jpg",
      },
      {
        name: "Weeding",
        rating: 3,
        reviews: 6,
        image: "https://www.bhg.com/thmb/P0yvlpBsKznQ8A1UVrmWOKZriWY=/2000x0/filters:no_upscale():strip_icc()/person-pulling-weed-from-garden-2000-85a9256adad24c7cb99a8d7a43a13d08.jpg",
      },
    ],
    "HARDSCAPING": [
      {
        name: "Patio Construction",
        rating: 5,
        reviews: 18,
        image: "https://images.landscapingnetwork.com/pictures/images/900x705Max/site_8/building-a-patio-landscaping-network_8897.jpg",
      },
      {
        name: "Walkways Installation",
        rating: 4,
        reviews: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HPukFlqAtwZhJbInhklfOoSCVsmYdNKNzg&s",
      },
      {
        name: "Retaining Walls",
        rating: 5,
        reviews: 11,
        image: "https://cornerstonewallsolutions.com/wp-content/uploads/2021/11/CornerStone-100-Planter-Wall-with-Step-Ups.jpg",
      },
    ],
    "WATER FEATURES": [
      {
        name: "Fountain Installation",
        rating: 5,
        reviews: 8,
        image: "https://carvedstonecreations.com/wp-content/uploads/2017/05/Fountain-Concrete-Slab-How-To-7.jpg",
      },
      {
        name: "Pond Design",
        rating: 4,
        reviews: 10,
        image: "https://images.landscapingnetwork.com/pictures/images/973x490Exact_0x90/swimming-pool_6/pond-grace-design-associates_2562.jpg",
      },
      {
        name: "Waterfall Features",
        rating: 5,
        reviews: 7,
        image: "https://poolcraft.ca/wp-content/uploads/2019/05/Images_Banner_Upgrades_WaterFeatures.jpg",
      },
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
      <div className={`flex ${servicesData[selectedCategory].length <= 3 ? 'justify-center' : 'flex-wrap'} gap-6`}>
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
export default Service5;