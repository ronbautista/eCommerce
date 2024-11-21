import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-green-100 p-8 font-sans text-center">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-start mb-12">
        {/* About Me */}
        <div className="max-w-sm text-left mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">About Me</h2>
          <img
            src="https://img.freepik.com/premium-photo/woman-plumber-working-near-metal-pipes_1077802-124847.jpg" // Replace with the actual image URL
            alt="Tessa Castillo"
            className="rounded-lg mb-4"
            style={{ width: '500px', height: '500px' }} // Set image size
          />
          <h3 className="text-xl font-bold">Tessa Castillo</h3>
          <p className="text-gray-600 mb-4">
            123 Mango Avenue, Brgy. Kamputhaw, Cebu City
          </p>
          <p className="text-gray-700">
            I’ve been a full-time plumber for over five years, handling
            everything from pesky leaks to complex installations. I work on
            residential and commercial spaces, approaching every plumbing issue
            with efficiency and dedication.
          </p>
          <p className="mt-4 text-gray-700">
            Some of my clients include local businesses and homeowners who rely
            on my honest, high-quality work. I believe in being approachable,
            thorough, and leaving each job with everything running smoothly.
          </p>
          <p className="mt-4 text-gray-700 font-medium">
            Looking forward to working with you!
          </p>
        </div>

        {/* Services */}
        <div className="max-w-sm text-center mx-4">
          <h2 className="text-lg font-bold uppercase mb-4">Services</h2>
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/Plumbing-services-Know-types-and-how-to-choose-01.png" // Replace with the actual service image URL
            alt="Plumbing Services"
            className="rounded-lg mb-4"
            style={{ width: '200px', height: '150px' }} // Set image size
          />
          <h3 className="text-xl font-bold">Plumbing Services</h3>
          <p className="text-gray-600 mb-4">- starts at ₱500 -</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Request Service
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-500 text-2xl">★★★★★</span>
        </div>
        <p className="text-gray-700 italic">
          She was prompt, professional, and explained everything clearly. The
          work was done efficiently, and I’m very happy with the results. Highly
          recommended!
        </p>
        <div className="flex items-center justify-between mt-4 text-sm">
          <p className="font-medium text-gray-600">bellafaye</p>
          <p className="text-gray-500">February 6, 2025</p>
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