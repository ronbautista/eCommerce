import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden"> {/* Set a fixed height for the carousel */}
            {/* Display current image with object-cover */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" // Add hover effect
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
        'https://d21dfqs8hl0txa.cloudfront.net/services/main/trusted_local_gardeners_gardening_service.webp.1200x630_q85_crop-smart.jpg',
        'https://media.bunnings.com.au/api/public/content/5b862b9919334221a4e7628aa5d0b0be?v=9ec74a1f',
        'https://www.daisymaids.com/wp-content/uploads/2023/02/10-benefits-of-hiring-professional-cleaners-to-deep-clean-your-house.jpg',
        'https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg',
    ];

    const toolImages = [
        'https://cdn2.hubspot.net/hubfs/2109376/cleaning-equipment.jpg',
        'https://img.freepik.com/free-vector/work-tools-set-round-shape-with-saws-drills-wrenches-vice-axe-pliers-grinder-isolated_1284-33896.jpg',
        'https://c8.alamy.com/comp/W6RJ0W/work-tool-character-set-vector-illustration-W6RJ0W.jpg',
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-white py-4">
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-3/4"> {/* Increased width to 3/4 */}
                {/* Left section: Advertisement of Services */}
                <div className="w-full md:w-3/4 p-0"> {/* Full width on small screens, 3/4 on medium and above */}
                    <Carousel images={serviceImages} />
                </div>

                {/* Right section: Advertisement for Renting Tools */}
                <div className="w-64 p-0 ml-4"> {/* Increased fixed width to 64 and added margin-left */}
                    <Carousel images={toolImages} />
                </div>
            </div>

            {/* Footer section */}
            <div className="mt-8 text-center">
                <h1 className="text-8xl font-bold text-green-600">NESTFIX</h1> {/* Increased font size */}
                <p className="text-3xl text-gray-700">Top care for your home.</p> {/* Increased font size */}
            </div>
        </div>
    );
}

export default App;