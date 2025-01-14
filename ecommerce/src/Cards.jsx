import React from 'react';
import Card from './Card'; // Import the Card component
import Aliceguo from './Aliceguo';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the specific styles for Cards

const Cards = () => {
    const navigate = useNavigate(); 
    const { t } = useTranslation();
    const cardData = [
        // Maintenance and Repairs
        {
            imageSrc: "https://img.freepik.com/premium-photo/portrait-confident-female-engineer-standing-with-crossed-arms-factory-woman-professional-engineer-electrical-specialist-ai-generated_538213-8034.jpg",
            title: "Nicca",
            description: "Engineer.",
            rating: 4.5,
            aboutMe: "Nicca is a skilled engineer with years of experience in designing and maintaining electrical systems. Her attention to detail ensures top-notch performance.",
            Service: "Maintenance and Repairs",
            descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Alice_Guo.png",
            title: "Alice",
            description: "Plumber.",
            rating: 4.5,
            aboutMe: "Alice specializes in plumbing solutions, providing efficient and reliable services for residential and commercial properties.",
            Service: "Maintenance and Repairs",
             descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        {
            imageSrc: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj",
            title: "Bobby",
            description: "Electrician.",
            rating: 4.5,
            aboutMe: "Bobby is a certified electrician with expertise in wiring, troubleshooting, and ensuring electrical safety for all projects.",
            Service: "Maintenance and Repairs",
             descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-94a8iYRLGmupzBb35bcteQuENtqVhfV1Fg&s",
            title: "Charlie",
            description: "HVAC Specialist.",
            rating: 4.5,
            aboutMe: "Charlie excels in HVAC system installation and maintenance, ensuring optimal indoor air quality and temperature control.",
            Service: "Maintenance and Repairs",
             descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        {
            imageSrc: "https://truckeetherapy.com/wp-content/uploads/2023/10/David-scaled-e1698282774647-1024x937.webp",
            title: "David",
            description: "General Contractor.",
            rating: 4.5,
            aboutMe: "David has extensive experience managing construction projects, overseeing teams, and delivering quality results on time and within budget.",
            Service: "Painting / Wall Repair",
             descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        {
            imageSrc: "https://c8.alamy.com/comp/F8NEFD/female-handyman-in-overalls-isolated-on-white-F8NEFD.jpg",
            title: "Eva",
            description: "Handyman.",
            rating: 4.5,
            aboutMe: "Eva is a versatile handyman skilled in various repair and maintenance tasks, offering quick and dependable solutions.",
            Service: "Maintenance and Repairs",
             descriptionimg: "https://www.fracttal.com/hubfs/_c7242d8e-7aa8-4617-944e-29a06efcd8c2%20%28convert.io%29.webp"
        },
        // Cleaning and Sanitation
        {
            imageSrc: "https://images.squarespace-cdn.com/content/v1/58c9f49846c3c4a643f3ed82/1616085191669-33U8F12I0QY74ORHGYAZ/What+Should+A+Cleaning+Lady+Do%3F",
            title: "Daisy",
            description: "Cleaner.",
            rating: 4.5,
            aboutMe: "Daisy provides professional cleaning services, ensuring spotless and hygienic spaces for homes and offices.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        {
            imageSrc: "https://cdn.openart.ai/published/user_2jfDE220Y2tmvXiLBGrlExCutfj/aCP9nbbk_oEzr_1024.webp",
            title: "Eva",
            description: "Sanitation Expert.",
            rating: 4.5,
            aboutMe: "Eva specializes in sanitation services, helping maintain clean and safe environments in various settings.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        {
            imageSrc: "https://media.istockphoto.com/id/1417833172/photo/professional-cleaner-holding-a-basket-of-cleaning-products.jpg?s=612x612&w=0&k=20&c=bqhz1jDqSxEQB1OAvm9DP_7SWNKR2F8t7Mzfr4Hchm4=",
            title: "Frank",
            description: "Housekeeper.",
            rating: 4.5,
            aboutMe: "Frank is a dedicated housekeeper who ensures homes are clean, organized, and welcoming.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        {
            imageSrc: "https://c8.alamy.com/comp/KER7J2/happy-young-female-janitor-with-cleaning-equipment-KER7J2.jpg",
            title: "Grace",
            description: "Janitor.",
            rating: 4.5,
            aboutMe: "Grace is a diligent janitor who takes pride in maintaining cleanliness and hygiene in every space.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        {
            imageSrc: "https://th.bing.com/th/id/OIP.ipWTpxe7jXac-leDpdoJAwHaE8?rs=1&pid=ImgDetMain",
            title: "Henry",
            description: "Commercial Cleaner.",
            rating: 4.5,
            aboutMe: "Henry specializes in cleaning commercial spaces, ensuring a spotless and professional environment.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        {
            imageSrc: "https://vivahr.com/wp-content/uploads/2020/07/Residential-Cleaner-Job-Description.jpg",
            title: "Isabella",
            description: "Residential Cleaner.",
            rating: 4.5,
            aboutMe: "Isabella provides thorough cleaning services, making homes shine with her attention to detail.",
            Service: "Cleaning and Sanitation",
             descriptionimg: "https://www.popcornfurniture.com/wp-content/uploads/2020/08/sanitizing.jpg"
        },
        // Landscaping
        {
            imageSrc: "https://media.istockphoto.com/id/1194461958/photo/bush-trimming-with-electrically-powered-chain-saw.jpg?s=612x612&w=0&k=20&c=2HMPZq4JoqpAWv3Ez6QUPj-kw3XVH0PNjnTpER9-C7M=",
            title: "Jack",
            description: "Renovation and Improvement",
            rating: 4.5,
            aboutMe: "Jack transforms outdoor spaces into beautiful landscapes, tailored to your vision.",
            Service: "Repair",
             descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
        },
        {
            imageSrc: "https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg",
            title: "Kathy",
            description: "Cleaning Specialist.",
            rating: 4.5,
            aboutMe: "Kathy provides top-tier cleaning services, ensuring every corner sparkles with her meticulous work.",
            Service: "Deep Cleaning",
            descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
        },
        {
            imageSrc: "https://www.checkatrade.com/blog/wp-content/uploads/2020/10/Property-maintenance-cost.jpg",
            title: "Liam",
            description: "Property Cleaner.",
            rating: 4.5,
            aboutMe: "Liam excels in maintaining cleanliness and hygiene in properties, ensuring a fresh and inviting space.",
            Service: "Property Cleaning",
            descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
          },
          {
            imageSrc: "https://worldlandscapearchitect.com/wp-content/uploads/2021/04/John-Yuen.jpg",
            title: "Kian",
            description: "Renovation Designer.",
            rating: 4.5,
            aboutMe: "Kian specializes in designing innovative renovations, combining functionality and aesthetic appeal.",
            Service: "Interior and Exterior Renovations",
            descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
          },
          {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30fTbv_tKbzsGdN0cpAnhIHyH80JLVP-A5g&s",
            title: "Noah",
            description: "Restoration Specialist.",
            rating: 4.5,
            aboutMe: "Noah is an expert in restoring and improving spaces to their former glory, paying attention to every detail.",
            Service: "Home and Commercial Restoration",
            descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
          },
        {
            imageSrc: "https://media.istockphoto.com/id/1176789148/photo/female-tree-surgeon-pulling-tree-branch-through-gate.jpg?s=612x612&w=0&k=20&c=Zvio7uiiGGn3CqMAbv12b8oRU_Chto8YwRewLqV_GFg=",
            title: "Olivia",
            description: "Electrical Specialist.",
            rating: 4.5,
            aboutMe: "Olivia is an expert in Electrical and spaces to their former glory, paying attention to every detail.",
            Service: "Landscaping",
             descriptionimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWioZZx0-yBC3hsA2k6h_VNgbSb3oqXNE4Q&s"
        },
        // Installation and Construction
        {
            imageSrc: "https://img.freepik.com/premium-photo/installation-heating-cooling-system-hvac-service-technician-generative-ai_28914-14203.jpg",
            title: "George",
            description: "Installation Technician.",
            rating: 4.5,
            aboutMe: "George excels in installing and maintaining a variety of systems, offering reliable service every time.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Alice_Guo.png",
            title: "Alice Guo",
            description: "Appliance Installer.",
            rating: 4.5,
            aboutMe: "Alice is an expert appliance installer, ensuring seamless setup for all types of household devices.",
            Service: "Installation and Construction",
            descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://www.meritize.com/wp-content/uploads/2021/03/Electrical-Lineman-1024x636.jpg",
            title: "Ian",
            description: "Electrical Installer.",
            rating: 4.5,
            aboutMe: "Ian is a skilled electrical installer who guarantees safety and efficiency in every project.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://static.vecteezy.com/system/resources/previews/040/332/665/non_2x/ai-generated-portrait-of-a-worker-man-isolated-on-transparent-background-free-png.png",
            title: "Jack",
            description: "Plumbing Installer.",
            rating: 4.5,
            aboutMe: "Jack specializes in plumbing installation, delivering dependable and high-quality results.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-D5jwklHjuHU97YFbtvYbF-BslN39Hd5Ew&s",
            title: "Kathy",
            description: "Window Installer.",
            rating: 4.5,
            aboutMe: "Kathy is an experienced window installer who ensures durability and precision in her work.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://www.floorfactors.com/wp-content/uploads/2020/06/man-installing-flooring-header.jpg",
            title: "Liam",
            description: "Flooring Installer.",
            rating: 4.5,
            aboutMe: "Liam is dedicated to delivering perfect flooring installations with attention to every detail.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://african.land/oc-content/plugins/blog/img/blog/341.jpg",
            title: "Paul",
            description: "Remodeling Expert.",
            rating: 4.5,
            aboutMe: "Paul is a remodeling expert with a keen eye for transforming spaces into functional and aesthetic masterpieces.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg",
            title: "Quinn",
            description: "Construction Manager.",
            rating: 4.5,
            aboutMe: "Quinn is a dedicated construction manager who ensures projects are completed on time, within budget, and with high-quality results.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        },
        {
            imageSrc: "https://www.shutterstock.com/shutterstock/photos/2262282779/display_1500/stock-photo-smiling-female-architect-using-laptop-inspecting-skyscraper-model-in-architectural-modern-office-2262282779.jpg",
            title: "Rita",
            description: "Architect.",
            rating: 4.5,
            aboutMe: "Rita is a visionary architect who brings innovative designs and creative solutions to life, shaping modern and sustainable spaces.",
            Service: "Installation and Construction",
             descriptionimg: "https://media.istockphoto.com/id/157398786/photo/african-american-man-renovating-home-interior.jpg?s=612x612&w=0&k=20&c=C_Yb1vd1VXHxY3UZNWQyZSsPuH43a6UNtxEoNq3RUHM="
        }
    ];


    const handleCardClick = (data) => {
        navigate('/Aliceguo', {
            state: { 
                imageSrc: data.imageSrc,
                title: data.title,
                description: data.description,
                rating: data.rating,
                aboutMe: data.aboutMe,
                descriptionimg: data.descriptionimg 
            }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[calc(100%-20px)] md:max-w-[calc(100%-60px)] mx-auto overflow-x-auto whitespace-nowrap mt-8">
        <div className="flex overflow-x-auto flex-nowrap space-x-4">
            {cardData.map((data, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md w-48 cursor-pointer"
                    onClick={() => handleCardClick(data)} 
                >
                    <img 
                        src={data.imageSrc} 
                        alt={data.title} 
                        className="w-24 h-24 object-cover rounded-full mb-4"
                    />
                    <h2 className="text-lg font-semibold text-center">{data.title}</h2>
                    <p className="text-sm text-gray-500 text-center">{t(data.description)}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">({data.rating})</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
    
};

export default Cards;