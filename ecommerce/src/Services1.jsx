import React, { useState } from "react";

const Services1 = () => {
  const categories = [
    "Painting / Wall Repair",
    "Remodelling",
    "Door & Window Replacement",
    "Renovation",
    "Improvement",
  ];

  const servicesData = {
    "Painting / Wall Repair": [
      { name: "John Smith", rating: 4, reviews: 10, image: "https://www.familyhandyman.com/wp-content/uploads/2020/10/black-man-painting-wall-of-home-565974977.jpg" },
      { name: "Emily Johnson", rating: 5, reviews: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwUOdLU5d6JIavZ02v2KN9ZPZTMGFyRp3QA&s" },
      { name: "Michael Brown", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzZ7NmIxGMEdwdzoTSw26KmSlf9nzo6VjiA&s" },
    ],
    "Remodelling": [
      { name: "Sarah Davis", rating: 5, reviews: 20, image: "https://media.istockphoto.com/id/2151288705/photo/architect-renovating-a-house-and-holding-designs-at-the-construction-site.jpg?s=612x612&w=0&k=20&c=R--L7COPg5XIQjGHkF-EAlVvfHELS73Xg8chhvEkix8=" },
      { name: "David Martinez", rating: 4, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1QRZVHPODn9m_oJ8rfAQKb_Jalu4W4VzwA&s" },
      { name: "Jessica Wilson", rating: 4, reviews: 5, image: "https://dlqxt4mfnxo6k.cloudfront.net/garmanbuilders.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9mOTIxOTljOThhOTE4OWNjYzgwNWFlODBlODM5OWQyNy5qcGVn/preserve/webp/1200/1200" },
    ],
    "Door & Window Replacement": [
      { name: "Chris Lee", rating: 4, reviews: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfCS4Hv9sJE5hgkrxo8yb3uZ6PcWP6biZpg&s" },
      { name: "Karen Taylor", rating: 5, reviews: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oclqbu-9afMRbh2FhIDpjOjdBJhJmWpsdA&s" },
      { name: "James Anderson", rating: 4, reviews: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex2OSQkWFo8VAex-FVp5ZpAdSJtS9TRRdDg&s" },
    ],
    "Renovation": [
      { name: "Olivia Clark", rating: 5, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI11HBxRds707tlAgWyTK69t0ri4I2-MIkPQ&s" },
      { name: "Ryan Harris", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdbqNRvcev7EkvMcRrCYRES7bR7q8dx3C-A&s" },
      { name: "Megan Lewis", rating: 5, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRbWyQ36ba9tQIg680NBmALs6QFiUbK2lyg&s" },
    ],
    "Improvement": [
      { name: "Henry Walker", rating: 5, reviews: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9 GcRvSe4R4F4EspKV3480NEPAGUQIyDKfYk7c5A&s" },
      { name: "Sophia Young", rating: 4, reviews: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH5FrkQYVEClhZv49YEo1716Ft8fjnKKQUg&s" },
      { name: "Liam Scott", rating: 5, reviews: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmCUaBVl0CaZpWP8V-xKnJ0LBOIthSVaGVw&s" },
    ],
  };
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-green-100 p-6">
      {/* Header Text with White Background */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-bold bg-white p-4 rounded-lg shadow-md inline-block">
          Renovation and Improvement Services
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
export default Services1;