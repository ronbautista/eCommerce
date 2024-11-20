import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* Display current image */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-48 object-cover rounded-lg"
            />
            {/* Carousel indicators (dots) */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

function App() {
    const serviceImages = [
        'https://via.placeholder.com/300x200?text=Service+1',
        'https://via.placeholder.com/300x200?text=Service+2',
        'https://via.placeholder.com/300x200?text=Service+3',
    ];

    const toolImages = [
        'https://via.placeholder.com/300x200?text=Tool+1',
        'https://via.placeholder.com/300x200?text=Tool+2',
        'https://via.placeholder.com/300x200?text=Tool+3',
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between gap-8">
                {/* Left section: Advertisement of Services */}
                <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-4 text-center rounded-lg">
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Advertisement of Services</h3>
                    <Carousel images={serviceImages} />
                </div>

                {/* Right section: Advertisement for Renting Tools */}
                <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-4 text-center rounded-lg">
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Advertisement for Renting Tools</h3>
                    <Carousel images={toolImages} />
                </div>
            </div>

            {/* Footer section */}
            <div className="mt-8 text-center">
                <h1 className="text-4xl font-bold text-green-600">NESTFIX</h1>
                <p className="text-lg text-gray-700">Top care for your home.</p>
            </div>
        </div>
    );
}

export default App;
