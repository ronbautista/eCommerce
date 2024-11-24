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
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                {/* Service Buttons */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                    {['Service1', 'Service2', 'Service3', 'Service4'].map((service) => (
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
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleApplyFilters}
                        className="bg-green-500 text-white rounded-lg px-4 py-2"
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={onClose}
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