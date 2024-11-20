import React from 'react';
import Card from './Card'; // Import the Card component

const Cards = () => {
    const cardData = [
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Ronald",
            description: "Plumber."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Rat",
            description: "RaferMan."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Charlie",
            description: "The Great."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Daisy",
            description: "Adventurer."
        },
        {
            imageSrc: "https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png",
            title: "Daisy",
            description: "Adventurer."
        },
       
    ];

    return (
        <div className="flex flex-col items-center justify-center w-11/12 md:w-2/3 mx-auto overflow-x-auto whitespace-nowrap mt-8"> {/* Add mt-8 for top margin */}
            <div className="flex overflow-x-auto flex-nowrap space-x-4"> {/* Add space-x-4 for horizontal spacing */}
                {cardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default Cards;