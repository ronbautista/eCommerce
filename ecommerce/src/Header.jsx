import React, { useState } from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Filter from './Filter'; // Import the Filter component
import Login from './Login';
import Nestfix from '../src/assets/Nestfix.png' // Import the Login component

function Header({ onSelectService }) { // Accept onSelectService as a prop
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage login visibility

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleToggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const handleSelectService = (services) => {
        onSelectService(services); // Pass the selected services back to the main component
        setIsModalOpen(false); // Close the modal after selection
    };

    return (
        <div className="flex flex-col items-center bg-white py-4">
            {/* Header Content */}
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-2/3">
                {/* Profile Image */}
                <div className="flex items-center">
                    <img
                        src={Nestfix}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-gray-300"
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
                        <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white focus:outline-none">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button 
                            onClick={handleOpenModal} // Open modal on click
                            className="flex items-center border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white focus:outline-none"
                        >
                            <i className="fas fa-filter mr-2"></i>
                            Filter
                        </button>
                    </div>
                </div>

                {/* Additional Links and Actions */}
                <div className="flex items-center space-x-4 ml-4">
                    <a href="/become-skilled-worker" className="text-black hover:underline">
                        Become a skilled worker
                    </a>
                    <div className="flex items-center">
                        <i className="fas fa-bell text-gray-600"></i>
                        <span className="ml-1 text-gray-700">Notification</span>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={handleToggleLogin} className="text-black hover:underline ">
                            Login
                        </button>
                        <span>|</span>
                        <a href="/signup" className="text-black hover:underline">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal Components */}
            <Filter isOpen={isModalOpen} onClose={handleCloseModal} onSelectFilter={handleSelectService} />
            <Login isOpen={isLoginOpen} onClose={handleToggleLogin} />
        </div>
    );
}

export default Header;