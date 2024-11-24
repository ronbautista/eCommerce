import React from 'react';
import Card from './Card'; // Import the Card component

const Cards = () => {
    const cardData = [
        // Maintenance and Repairs
        {
            imageSrc: "https://img.freepik.com/premium-photo/portrait-confident-female-engineer-standing-with-crossed-arms-factory-woman-professional-engineer-electrical-specialist-ai-generated_538213-8034.jpg",
            title: "Nicca",
            description: "Engineer."
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Alice_Guo.png",
            title: "Alice",
            description: "Plumber."
        },
        {
            imageSrc: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj",
            title: "Bobby",
            description: "Electrician."
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-94a8iYRLGmupzBb35bcteQuENtqVhfV1Fg&s",
            title: "Charlie",
            description: "HVAC Specialist."
        },
        {
            imageSrc: "https://truckeetherapy.com/wp-content/uploads/2023/10/David-scaled-e1698282774647-1024x937.webp",
            title: "David",
            description: "General Contractor."
        },
        {
            imageSrc: "https://c8.alamy.com/comp/F8NEFD/female-handyman-in-overalls-isolated-on-white-F8NEFD.jpg",
            title: "Eva",
            description: "Handyman."
        },

        // Cleaning and Sanitation
        {
            imageSrc: "https://images.squarespace-cdn.com/content/v1/58c9f49846c3c4a643f3ed82/1616085191669-33U8F12I0QY74ORHGYAZ/What+Should+A+Cleaning+Lady+Do%3F",
            title: "Daisy",
            description: "Cleaner."
        },
        {
            imageSrc: "https://cdn.openart.ai/published/user_2jfDE220Y2tmvXiLBGrlExCutfj/aCP9nbbk_oEzr_1024.webp",
            title: "Eva",
            description: "Sanitation Expert."
        },
        {
            imageSrc: "https://media.istockphoto.com/id/1417833172/photo/professional-cleaner-holding-a-basket-of-cleaning-products.jpg?s=612x612&w=0&k=20&c=bqhz1jDqSxEQB1OAvm9DP_7SWNKR2F8t7Mzfr4Hchm4=",
            title: "Frank",
            description: "Housekeeper."
        },
        {
            imageSrc: "https://c8.alamy.com/comp/KER7J2/happy-young-female-janitor-with-cleaning-equipment-KER7J2.jpg",
            title: "Grace",
            description: "Janitor."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Henry",
            description: "Commercial Cleaner."
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Isabella",
            description: "Residential Cleaner."
        },

        // Installation Services
        {
            imageSrc: "https://img.freepik.com/premium-photo/installation-heating-cooling-system-hvac-service-technician-generative-ai_28914-14203.jpg",
            title: "George",
            description: "Installation Technician."
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Alice_Guo.png",
            title: "Alice Guo",
            description: "Appliance Installer."
        },
        {
            imageSrc: "https://www.meritize.com/wp-content/uploads/2021/03/Electrical-Lineman-1024x636.jpg",
            title: "Ian",
            description: "Electrical Installer."
        },
        {
            imageSrc: "https://static.vecteezy.com/system/resources/previews/040/332/665/non_2x/ai-generated-portrait-of-a-worker-man-isolated-on-transparent-background-free-png.png",
            title: "Jack",
            description: "Plumbing Installer."
        },
        {
            imageSrc: "https://www.doorandwindowexperts.co.uk/wp-content/uploads/2023/03/female-window-fitter.jpg",
            title: "Kathy",
            description: "Window Installer."
        },
        {
            imageSrc: "https://www.floorfactors.com/wp-content/uploads/2020/06/man-installing-flooring-header.jpg",
            title: "Liam",
            description: "Flooring Installer."
        },

        // Landscaping and Outdoor Care 
        {
            imageSrc: "https://african.land/oc-content/plugins/blog/img/blog/341.jpg",
            title: "Jack",
            description: "Landscaper."
        },
        {
            imageSrc: "https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg",
            title: "Kathy",
            description: "Gardener."
        },
        {
            imageSrc: "https://www.checkatrade.com/blog/wp-content/uploads/2020/10/Property-maintenance-cost.jpg",
            title: "Liam",
            description: "Outdoor Maintenance."
        },
        {
            imageSrc: "https://worldlandscapearchitect.com/wp-content/uploads/2021/04/John-Yuen.jpg",
            title: "Kian",
            description: "Landscape Designer."
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30fTbv_tKbzsGdN0cpAnhIHyH80JLVP-A5g&s",
            title: "Noah",
            description: "Irrigation Specialist."
        },
        {
            imageSrc: "https://media.istockphoto.com/id/1176789148/photo/female-tree-surgeon-pulling-tree-branch-through-gate.jpg?s=612x612&w=0&k=20&c=Zvio7uiiGGn3CqMAbv12b8oRU_Chto8YwRewLqV_GFg=",
            title: "Olivia",
            description: "Tree Surgeon."
        },

        // Renovations
        {
            imageSrc: "https://static.vecteezy.com/system/resources/previews/040/343/454/large_2x/attractive-female-construction-worker-in-hardhat-confident-young-specialist-in-checkered-blue-shirt-in-jeans-standing-in-empty-room-interior-design-and-renovation-service-photo.jpg",
            title: "Mia",
            description: "Renovation Specialist."
        },
        {
            imageSrc: "https://c8.alamy.com/comp/2R55R62/portrait-of-man-construction-and-home-renovation-with-drill-helmet-and-working-mindset-in-apartment-yes-smile-and-diy-renovations-happy-handyman-2R55R62.jpg",
            title: "Noah",
            description: "Home Renovator."
        },
        {
            imageSrc: "https://www.lovehappensmag.com/blog/wp-content/uploads/2019/03/Cheryl-Eisen-IMG-768x1024.jpg",
            title: "Olivia",
            description: "Interior Designer."
        },
        {
            imageSrc: "https://southern-renovation.com/wp-content/uploads/2024/07/black-man-tablet-and-smile-in-portrait-at-startup-68M4QPV.webp",
            title: "Paul",
            description: "Remodeling Expert."
        },
        {
            imageSrc: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg",
            title: "Quinn",
            description: "Construction Manager."
        },
        {
            imageSrc: "https://www.shutterstock.com/shutterstock/photos/2262282779/display_1500/stock-photo-smiling-female-architect-using-laptop-inspecting-skyscraper-model-in-architectural-modern-office-2262282779.jpg",
            title: "Rita",
            description: "Architect."
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full md:w-2/3 mx-auto overflow-x-auto whitespace-nowrap mt-8">
            <div className="flex overflow-x-auto flex-nowrap space-x-4">
                {cardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default Cards;