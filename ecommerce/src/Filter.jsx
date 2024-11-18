import React from 'react';
import './App.css';
import './index.css';

function Filter({ isOpen, onClose }) {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> {/* Set z-index here */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 z-50"> {/* Set z-index here too */}
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                {/* Service Buttons */}
                <div className="mb-4">
                    <button className="border rounded-lg px-4 py-2 mx-1">Maintenance and Repairs</button>
                    <button className="border rounded-lg px-4 py-2 mx-1">Cleaning and Sanitation</button>
                    <button className="border rounded-lg px-4 py-2 mx-1">Installation Services</button>
                    <button className="border rounded-lg px-4 py-2 mx-1">Landscape and Outdoor Care</button>
                    <button className="border rounded-lg px-4 py-2 mx-1">Renovation</button>
                </div>

                {/* Price Range Section */}
                <div className="mb-4">
                    <label className="block mb-2">Price Range</label>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <span className="mr-2">₱</span>
                            <input type="number" placeholder="Min" className="border rounded-lg px-2 py-1 w-1/2" />
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">₱</span>
                            <input type="number" placeholder="Max" className="border rounded-lg px-2 py-1 w-1/2" />
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose} // Use the onClose prop to close the modal
                        className="bg-blue-500 text-white rounded-lg px-4 py-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;