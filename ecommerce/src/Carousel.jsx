import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    return (
        <div
            {...handlers}
            className="relative w-full h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-[13rem] overflow-hidden rounded-md" // Adjusted height
        >
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                            currentIndex === index ? 'bg-green-500 scale-110' : 'bg-gray-300 hover:bg-green-400'
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
            {/* Carousel Section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg w-full max-w-[calc(100%-40px)] mx-auto"> {/* Adjusted width for more space */}
                {/* Left Section: Services */}
                <div className="w-full md:w-3/4">
                    <Carousel images={serviceImages} />
                </div>
    
                {/* Right Section: Tools */}
                <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4">
                    <Carousel images={toolImages} />
                </div>
            </div>
    
            {/* Footer Section */}
            <div className="mt-6 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                    NESTFIX
                </h1>
                <p className="text-sm sm:text-md lg:text-lg text-gray-700">
                    Top care for your home.
                </p>
            </div>
        </div>
    );
}

export default App;