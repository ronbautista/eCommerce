import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function Advertisement() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const images = [
        "https://trafft.com/wp-content/uploads/2022/11/Home-cleaning-template-2-1.png",
        "https://media.craftyartapp.com/uploadedFiles/thumb_file/0f76efd007d0018dce24bf62fa1278036f74e5d31679311182.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GzFbaOpRAaFKIVx6FhgnUAz5H_HQxpBrkg&s",
        "https://img.pikbest.com/origin/06/00/10/66kpIkbEsTSEx.jpg!f305cw",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/appliance-repair-services-design-template-fb8569e38a5e8ea90d32c2d85d613c5e_screen.jpg?ts=1658672126",
        "https://i.pinimg.com/736x/4b/17/1a/4b171a5c5766733605d2ea4e7c4bea80.jpg",
        "https://getjobber.com/wp-content/uploads/2022/08/A8FE545B-AAFD-42E6-8D1A-56187C5BD652-768x742-1.jpg",
        
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
                    <div className="relative bg-white rounded-lg shadow-md max-w-3xl w-auto p-4">
                        <button
                            onClick={closeAdvertisement}
                            className="absolute top-[-10px] right-[-10px] bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:bg-gray-200"
                        >
                            ✖
                        </button>
                        
                        <div className="relative flex items-center justify-center">
                            <img
                                src={images[currentImage]}
                                alt={`Slide ${currentImage + 1}`}
                                className="w-[600px] h-[424px] object-contain rounded-lg" // Use object-contain to ensure the entire image is visible
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