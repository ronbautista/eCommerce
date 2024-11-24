import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const reviews = [
  {
    text: "She was prompt, professional, and explained everything clearly. The work was done efficiently, and I’m very happy with the results. Highly recommended!",
    name: "bellafaye",
    date: "November 23, 2024",
    rating: 5,
  },
  {
    text: "Fantastic service! The team was very knowledgeable and handled everything with care. Will definitely hire them again.",
    name: "john_doe",
    date: "December 15, 2024",
    rating: 5,
  },
  {
    text: "Great experience from start to finish. They arrived on time and completed the job quickly. Highly satisfied!",
    name: "sarah_k",
    date: "January 10, 2025",
    rating: 4,
  },
  {
    text: "The plumber was very friendly and did a great job. I appreciate the attention to detail.",
    name: "mark_twain",
    date: "February 5, 2025",
    rating: 4,
  },
  {
    text: "Excellent work! They fixed my issue in no time and were very professional throughout the process.",
    name: "jane_smith",
    date: "March 1, 2025",
    rating: 5,
  },
];

const AboutMe = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleRequestService = () => {
    navigate("/new"); // Redirect to the new page
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-green-100 p-8 font-sans text-center">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-start mb-12">
        {/* About Me */}
        <div className="max-w-sm text-left mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">About Me</h2>
          <img
            src="https://img.freepik.com/premium-photo/woman-plumber-working-near-metal-pipes_1077802-124847.jpg"
            alt="Tessa Castillo"
            className="rounded-lg mb-4"
            style={{ width: '500px', height: '500px' }}
          />
          <h3 className="text-xl font-bold">Tessa Castillo</h3>
          <p className="text-gray-600 mb-4">123 Mango Avenue, Brgy. Kamputhaw, Cebu City</p>
          <p className="text-gray-700">
            I’ve been a full-time plumber for over five years, handling everything from pesky leaks to complex installations. I work on residential and commercial spaces, approaching every plumbing issue with efficiency and dedication.
          </p>
          <p className="mt-4 text-gray-700">
            Some of my clients include local businesses and homeowners who rely on my honest, high-quality work. I believe in being approachable, thorough, and leaving each job with everything running smoothly.
          </p>
          <p className="mt-4 text-gray-700 font-medium">Looking forward to working with you!</p>
        </div>

        {/* Services */}
        <div className="max-w-sm text-center mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">Services</h2>
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/Plumbing-services-Know-types-and-how-to-choose-01.png"
            alt="Plumbing Services"
            className="rounded-lg mb-4"
            style={{ width: '200px', height: '150px' }}
          />
          <h3 className="text-xl font-bold">Plumbing Services</h3>
          <p className="text-gray-600 mb-4">- starts at ₱500 -</p>

          {/* Gradient Border Button */}
          <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 mx-auto">
 <button
              onClick={handleRequestService}
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
            {"★".repeat(reviews[currentReviewIndex].rating)}
          </span>
        </div>
        <p className="text-gray-700 italic">
          {reviews[currentReviewIndex].text}
        </p>
        <div className="flex items-center justify-between mt-4 text-sm">
          <p className="font-medium text-gray-600">{reviews[currentReviewIndex].name}</p>
          <p className="text-gray-500">{reviews[currentReviewIndex].date}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button 
            className="text-blue-500 hover:underline" 
            onClick={prevReview}
          >
            Previous
          </button>
          <button 
            className="text-blue-500 hover:underline" 
            onClick={nextReview}
          >
            Next
          </button>
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