import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel() {
    const images = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Automatically go to the next slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center w-2/3 mx-auto">
            <div className="carousel-container">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image rounded-lg"
                />
                <button
                    onClick={prevSlide}
                    className="carousel-button carousel-button-left"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="carousel-button carousel-button-right"
                >
                    &#10095;
                </button>
                <div className="flex justify-center mt-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="ml-4 max-w-sm">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold">Image Details</h2>
                    <p className="mt-2">This is a description of the current image.</p>
                    <p className="mt-2">Image {currentIndex + 1} of {images.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Carousel;