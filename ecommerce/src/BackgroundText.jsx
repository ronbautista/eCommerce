import React from 'react';

const BackgroundText = () => {
    return (
        <div 
            className="relative h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg')" }}
        >
            {/* White tint overlay */}
            <div className="absolute inset-0 bg-white opacity-50"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center space-y-4">
                <h1 className="text-6xl text-gray-800 shadow-lg">Hello, I am</h1>
                <h1 className="text-6xl text-gray-800 shadow-lg">Tessa Castillio</h1>
                <h1 className="text-6xl text-gray-800 shadow-lg">_ _ _ _ _ _ _ _</h1>
                <p className="text-gray-600">Committed Service Excellence – Delivered with a Smile</p>

            </div>
        </div>
    );
};

export default BackgroundText;
