import React, { useState } from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Filter from './Filter'; // Import the Filter component

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center bg-white py-4">
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-2/3">
                
                {/* Profile Image */}
                <div className="flex items-center">
                    <img
                        src="https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003"
                        alt="Profile"
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                    />
                </div>

                {/* Search and Filter Section */}
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
                        <button 
                            onClick={handleOpenModal} // Open modal on click
                            className="flex items-center border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
                        >
                            <i className="fas fa-filter mr-2"></i>
                            Filter
                        </button>
                    </div>
                </div>

                {/* New Links Section beside Filter Button */}
                <div className="flex items-center space-x-4 ml-4">
                    <a href="/become-skilled-worker" className="text-blue-500 hover:underline">
                        Become a skilled worker
                    </a>
                    <div className="flex items-center">
                        <i className="fas fa-bell text-gray-600"></i>
                        <span className="ml-1 text-gray-700">Notification</span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                        <span>|</span>
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Filter isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Pass props to Filter */}
        </div>
    );
}

export default Header;