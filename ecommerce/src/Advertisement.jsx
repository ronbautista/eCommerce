import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function Advertisement() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s",
        "https://miro.medium.com/v2/resize:fit:2000/1*r2gt5_YWdch-3d_NIGePfw.jpeg",
        "https://pngimg.com/d/php_PNG31.png",
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const closeAdvertisement = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-auto p-2"> {/* Adjusted padding and width */}
                        <button
                            onClick={closeAdvertisement}
                            className="absolute top-[-10px] right-[-10px] bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-200"
                        >
                            ✖
                        </button>
                        
                        <div className="relative flex items-center justify-center"> {/* Centering the image */}
                            <img
                                src={images[currentImage]}
                                alt={`Slide ${currentImage + 1}`}
                                className="w-64 h-48 object-cover rounded-lg" // Set static width and height
                            />
                            <button
                                onClick={prevImage}
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-black text-3xl"
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-black text-3xl"
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Advertisement;