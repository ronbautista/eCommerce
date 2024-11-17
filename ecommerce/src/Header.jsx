import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <div className="flex items-center justify-center bg-white py-4"> {/* Changed bg-gray-100 to bg-white */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-2/3"> {/* Changed bg-gray-200 to bg-white */}
        
        {/* Picture in a Circle */}
        <div className="flex items-center">
          <img
            src="https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Search and Buttons */}
        <div className="flex flex-row items-center space-x-2 flex-grow ml-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <div className="flex space-x-2">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="flex items-center border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none">
              <i className="fas fa-filter mr-2"></i>
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
