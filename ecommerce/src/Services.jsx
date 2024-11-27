import React, { useState } from "react";
import AboutMe from "./AboutMe";

const services = {
  PLUMBING: [
    { 
      image: "https://images.nightcafe.studio/jobs/7m6aXAMTMoH8nHC3tQVn/7m6aXAMTMoH8nHC3tQVn--1--a72hu.jpg?tr=w-1600,c-at_max", 
      name: "Arnold", 
      rating: "4", 
      reviews: "7",
      description: "Arnold is a seasoned plumber with years of experience in residential and commercial plumbing. He specializes in pipe installations, leak repairs, and emergency plumbing services."
    },
    { 
      image: "https://img.freepik.com/premium-photo/asian-woman-professional-plumber-ai-generated_145713-10928.jpg?w=360", 
      name: "Tessa", 
      rating: "5", 
      reviews: "10", 
      description: "Tessa is an expert plumber with a passion for delivering high-quality plumbing solutions. She excels in water heater installation, drain cleaning, and routine maintenance."
    },
    { 
      image: "https://static.vecteezy.com/system/resources/thumbnails/038/282/149/small_2x/smiling-technician-repairing-an-hot-water-heater-photo.jpg", 
      name: "John", 
      rating: "5", 
      reviews: "10", 
      description: "John has extensive experience in water heater repairs and installations. He is known for his professionalism and quick response times for emergency plumbing calls."
    },
    { 
      image: "https://img.freepik.com/premium-photo/man-is-working-water-heater-using-various-tools-residential-setting-plumber-installing-water-heater-new-home-ai-generated_538213-16751.jpg", 
      name: "Ivan", 
      rating: "5", 
      reviews: "10", 
      description: "Ivan is a highly skilled plumber with expertise in water heater and pipe installations. His clients appreciate his reliability and attention to detail."
    },
    { 
      image: "https://static.vecteezy.com/system/resources/previews/040/332/665/non_2x/ai-generated-portrait-of-a-worker-man-isolated-on-transparent-background-free-png.png", 
      name: "Jack", 
      rating: "5", 
      reviews: "10", 
      description: "Jack is a trusted plumber known for his problem-solving skills. He specializes in water supply system maintenance and leak detection."
    },
  ],
  ELECTRICAL: [
    { 
      image: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj", 
      name: "Bobby", 
      rating: "4", 
      reviews: "5", 
      description: "Bobby is a seasoned electrician who specializes in both residential and commercial electrical installations, as well as troubleshooting and repairs."
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkSqrNJ9tKC5j8E0e_LOCfvWlbIYPy7XmBA&s", 
      name: "John", 
      rating: "4", 
      reviews: "2", 
      description: "John is an expert in electrical systems and specializes in rewiring, fuse box installations, and solving complex electrical issues."
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYCz-7qcaAfCcLZZ6jMkzvPZeA7nG7L8GKQ&s", 
      name: "Mandy", 
      rating: "4", 
      reviews: "5", 
      description: "Mandy is a reliable electrician with a strong background in lighting installations, panel upgrades, and electrical maintenance."
    },
    { 
      image: "https://www.shutterstock.com/image-photo/electrician-african-american-male-technician-260nw-2535221501.jpg", 
      name: "Harold", 
      rating: "3", 
      reviews: "2", 
      description: "Harold is a versatile electrician who offers electrical repairs, upgrades, and installations. He has a reputation for getting jobs done efficiently and on time."
    },
    { 
      image: "https://goodmenproject.com/wp-content/uploads/2024/08/iStock-516005348.jpg", 
      name: "Ivan", 
      rating: "4", 
      reviews: "5", 
      description: "Ivan specializes in troubleshooting and repairing electrical systems. He is known for his thorough work and clear communication with clients."
    },
  ],
  HVAC: [
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjkGjaR9-VdAQBwmXFQDFFmlGdSeCXiOZ3Q&s", 
      name: "Shannah", 
      rating: "4", 
      reviews: "8", 
      description: "Shannah is a skilled HVAC technician with extensive experience in heating, ventilation, and air conditioning system installations and repairs."
    },
    { 
      image: "https://static.vecteezy.com/system/resources/previews/035/997/114/non_2x/ai-generated-construction-worker-with-hard-hat-free-photo.jpg", 
      name: "Bobert", 
      rating: "5", 
      reviews: "12", 
      description: "Bobert is a professional HVAC technician known for his expert installation of energy-efficient systems, as well as routine maintenance and repairs."
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2I6-HX_ucOPsdP4pEQkp_tDgDlJ8QgRpVA&s", 
      name: "John Legend", 
      rating: "5", 
      reviews: "12", 
      description: "John Legend is a top-rated HVAC specialist who offers comprehensive services in HVAC repairs, installations, and indoor air quality solutions."
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanFb8q1kuuFoshxm9zmJvjmgzTIapkD4xaA&s", 
      name: "Johny", 
      rating: "5", 
      reviews: "12", 
      description: "Johny has years of experience in HVAC installations and repairs. He’s highly regarded for his fast service and ability to optimize energy efficiency in HVAC systems."
    },
    { 
      image: "https://media.istockphoto.com/id/1638102580/photo/black-man-portrait-and-maintenance-ac-repair-and-engineering-with-smile-and-labor-outdoor.jpg?s=612x612&w=0&k=20&c=vcSOi68WJjVRfYlXGvI9XYR96YUdYblRvnLw3wsmrmo=", 
      name: "Robert", 
      rating: "5", 
      reviews: "12", 
      description: "Robert is an HVAC technician known for his proficiency in AC repairs, installations, and improving indoor air quality for both homes and businesses."
    },
  ],
  ROOFING: [
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4KySDEDLpZZDMUxcOipL_z1kHePrwwuGLA&s", 
      name: "Muhamad", 
      rating: "4", 
      reviews: "6", 
      description: "Muhamad is a roofing expert who specializes in both residential and commercial roofing solutions, including repairs and installations."
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-o-tIvaKJRmgf6MyAyu1VEr7Mz8m-lBtMg&s", 
      name: "Sindy", 
      rating: "4", 
      reviews: "6", 
      description: "Sindy is a professional roofer known for her exceptional skills in roof repairs and replacement, especially for flat and sloped roofs."
    },
    { 
      image: "https://img.freepik.com/premium-photo/happy-builder-hard-hat-ai-generated_941980-585.jpg", 
      name: "Mark", 
      rating: "4", 
      reviews: "6", 
      description: "Mark is an experienced roofer with a strong focus on customer satisfaction, offering roof inspections, replacements, and repairs."
    },
    { 
      image: "https://img.freepik.com/premium-photo/working-electrician_944011-1300.jpg?w=360", 
      name: "Kirk", 
      rating: "4", 
      reviews: "6", 
      description: "Kirk has years of experience in the roofing industry, specializing in roofing materials, repairs, and emergency storm damage solutions."
    },
    { 
      image: "https://img.freepik.com/premium-photo/closeup-portrait-joyful-middleaged-electrician-wearing-protective-gear_820340-7535.jpg?w=360", 
      name: "Nick", 
      rating: "4", 
      reviews: "6", 
      description: "Nick is a skilled roofer with expertise in commercial and residential roofing projects. He’s known for his punctuality and high-quality craftsmanship."
    },
  ]
};

const ServiceCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("PLUMBING");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // State to hold the selected service

  const handleCategoryChange = (category) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setSelectedCategory(category); // Change category after a delay
      setIsLoading(false); // Stop loading
    }, 300); // Delay in milliseconds (300ms in this case)
  };

  // Handle the click on a service to pass the data to AboutMe
  const handleServiceClick = (service) => {
    setSelectedService(service); // Pass the service data to AboutMe
  };

  return (
    <div className="bg-green-100 p-8">
      <div className="flex justify-around mb-6">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`text-lg font-bold px-4 py-2 rounded-full transition duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-transparent text-gray-500 hover:bg-white hover:text-black"
            }`}
            onClick={() => handleCategoryChange(category)}
            disabled={isLoading} // Disable button while loading
          >
            {category.replace("_", " ")} {/* Format the category name */}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {services[selectedCategory].map((service, index) => (
          <div
            key={index}
            className={`bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center transition-opacity duration-300 ${
              isLoading ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => handleServiceClick(service)} // Set selected service on click
          >
            <img
              src={service.image}
              alt={service.name}
              className="h-24 w-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-yellow-500 font-bold">
              ★ {service.rating} ({service.reviews})
            </p>
          </div>
        ))}
      </div>

      {/* Pass selected service data to AboutMe component */}
      {selectedService && <AboutMe person={selectedService} />}
    </div>
  );
};

export default ServiceCategory;