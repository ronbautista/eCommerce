// AboutMe.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const AboutMe = ({ person }) => {
  const navigate = useNavigate(); // Initialize the navigate hook

  if (!person) {
    return <p>Loading or error: Person data not found.</p>;
  }

  const { image, name, description, rating, reviews } = person;

  // Mock list of reviews
  const reviewList = [
    { id: 1, reviewer: "John Doe", rating: 5, comment: "Excellent service! Highly recommended." },
    { id: 2, reviewer: "Jane Smith", rating: 4, comment: "Good experience, but could improve response time." },
    { id: 3, reviewer: "Michael Lee", rating: 3, comment: "Service was okay, but had some delays." },
  ];

  const handleRequestService = () => {
    // You can add any loading or confirmation logic here
    alert("Requesting Service...");

    // Navigate to the new page
    navigate("/new");
  };

  return (
    <div className="bg-green-100 p-8 font-sans text-center">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-start mb-12">
        {/* About Me */}
        <div className="max-w-sm text-left mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">About Me</h2>
          {image ? (
            <img
              src={image}
              alt={name}
              className="rounded-lg mb-4"
              style={{ width: "500px", height: "500px" }}
            />
          ) : (
            <div className="rounded-lg mb-4 bg-gray-200 w-500 h-500" />
          )}
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600 mb-4">123 Mango Avenue, Brgy. Kamputhaw, Cebu City</p>
          <p className="text-gray-700">{description || "No description available."}</p>
          <p className="mt-4 text-gray-700 font-medium">Looking forward to working with you!</p>
        </div>

        {/* Services */}
        <div className="max-w-sm text-center mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">Services</h2>
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/Plumbing-services-Know-types-and-how-to-choose-01.png"
            alt="Plumbing Services"
            className="rounded-lg mb-4"
            style={{ width: "200px", height: "150px" }}
          />
          <h3 className="text-xl font-bold">Plumbing Services</h3>
          <p className="text-gray-600 mb-4">- starts at ₱500 -</p>

          {/* Gradient Border Button */}
          <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 mx-auto">
            <button
              onClick={handleRequestService} // Add the click handler
              className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-gray-200"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-500 text-2xl">
            {"★".repeat(Number(rating) || 0)} {/* Rating stars */}
          </span>
        </div>
        <p className="text-gray-700 italic">
          "{description || "No description available."}"
        </p>
        <div className="flex items-center justify-between mt-4 text-sm">
          <p className="font-medium text-gray-600">{name}</p>
          <p className="text-gray-500">Date</p>
        </div>

        {/* Reviews List */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Reviews ({reviews || 0})</h3>
          {reviewList.map((review) => (
            <div key={review.id} className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-xl">
                  {"★".repeat(review.rating)} {/* Display stars based on rating */}
                </span>
                <p className="ml-2 text-gray-600 font-medium">{review.reviewer}</p>
              </div>
              <p className="text-gray-700 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            See all recommendations
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
