import React, { useState } from 'react';

function Filter({ isOpen, onClose, onSelectFilter }) {
    if (!isOpen) return null; // Don't render if not open

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelect = (filter) => {
        setSelectedFilters((prevSelected) => {
            if (prevSelected.includes(filter)) {
                // If the filter is already selected, remove it
                return prevSelected.filter((f) => f !== filter);
            } else {
                // Otherwise, add it to the selection
                return [...prevSelected, filter];
            }
        });
    };

    const handleApplyFilters = () => {
        onSelectFilter(selectedFilters);
        onClose(); // Optionally close the filter after applying
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                <h2 className="text-xl font-bold mb-4 text-center">Filters</h2> {/* Centered heading */}

                {/* Price Range Inputs */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Price Range:</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Min Price"
                            className="border rounded-lg px-4 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Max Price"
                            className="border rounded-lg px-4 py-2 w-full"
                        />
                    </div>
                </div>

                {/* Service Buttons */}
                <div className="mb-4 grid grid-cols-1 gap-2"> {/* Changed to single column */}
                    {['Renovation and Improvement Service', 'Maintenance and Repair Service', 'Cleaning and Sanitization', 'Installation Service', 'Landscaping and Outdoor Care'].map((service) => (
                        <button
                            key={service}
                            className={`border rounded-lg px-4 py-2 ${selectedFilters.includes(service) ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handleFilterSelect(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>

                {/* Apply and Close Buttons */}
                <div className="flex flex-col items-center space-y-2"> {/* Stacked buttons */}
                    <button
                        onClick={handleApplyFilters}
                        className="border border-black text-black bg-transparent rounded-lg px-4 py-2 hover:bg-black hover:text-white transition w-full"
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={onClose}
                        className="border border-black text-black bg-transparent rounded-lg px-4 py-2 hover:bg-black hover:text-white transition w-full"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;