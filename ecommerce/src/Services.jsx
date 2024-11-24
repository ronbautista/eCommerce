import React, { useState } from "react";

const services = {
  PLUMBING: [
    { image: "https://images.nightcafe.studio/jobs/7m6aXAMTMoH8nHC3tQVn/7m6aXAMTMoH8nHC3tQVn--1--a72hu.jpg?tr=w-1600,c-at_max", name: "Arnold", rating: "4", reviews: "7" },
    { image: "https://img.freepik.com/premium-photo/asian-woman-professional-plumber-ai-generated_145713-10928.jpg?w=360", name: "Tessa", rating: "5", reviews: "10" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/038/282/149/small_2x/smiling-technician-repairing-an-hot-water-heater-photo.jpg", name: "John", rating: "5", reviews: "10" },
    { image: "https://img.freepik.com/premium-photo/man-is-working-water-heater-using-various-tools-residential-setting-plumber-installing-water-heater-new-home-ai-generated_538213-16751.jpg", name: "Ivan", rating: "5", reviews: "10" },
    { image: "https://static.vecteezy.com/system/resources/previews/040/332/665/non_2x/ai-generated-portrait-of-a-worker-man-isolated-on-transparent-background-free-png.png", name: "Jack", rating: "5", reviews: "10" },
  ],
  ELECTRICAL: [
    { image: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj", name: "Bobby", rating: "4", reviews: "5" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkSqrNJ9tKC5j8E0e_LOCfvWlbIYPy7XmBA&s", name: "John", rating: "4", reviews: "2" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYCz-7qcaAfCcLZZ6jMkzvPZeA7nG7L8GKQ&s", name: "Mandy", rating: "4", reviews: "5" },
    { image: "https://www.shutterstock.com/image-photo/electrician-african-american-male-technician-260nw-2535221501.jpg", name: "Harold", rating: "3", reviews: "2" },
    { image: "https://goodmenproject.com/wp-content/uploads/2024/08/iStock-516005348.jpg", name: "Ivan", rating: "4", reviews: "5" },
  ],
  HVAC: [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjkGjaR9-VdAQBwmXFQDFFmlGdSeCXiOZ3Q&s", name: "Shannah", rating: "4", reviews: "8" },
    { image: "https://static.vecteezy.com/system/resources/previews/035/997/114/non_2x/ai-generated-construction-worker-with-hard-hat-free-photo.jpg", name: "Bobert", rating: "5", reviews: "12" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2I6-HX_ucOPsdP4pEQkp_tDgDlJ8QgRpVA&s", name: "John Legend", rating: "5", reviews: "12" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanFb8q1kuuFoshxm9zmJvjmgzTIapkD4xaA&s", name: "Johny", rating: "5", reviews: "12" },
    { image: "https://media.istockphoto.com/id/1638102580/photo/black-man-portrait-and-maintenance-ac-repair-and-engineering-with-smile-and-labor-outdoor.jpg?s=612x612&w=0&k=20&c=vcSOi68WJjVRfYlXGvI9XYR96YUdYblRvnLw3wsmrmo=", name: "Robert", rating: "5", reviews: "12" },
  ],
  ROOFING: [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4KySDEDLpZZDMUxcOipL_z1kHePrwwuGLA&s", name: "Muhamad", rating: "4", reviews: "6" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-o-tIvaKJRmgf6MyAyu1VEr7Mz8m-lBtMg&s", name: "Sindy", rating: "4", reviews: "6" },
    { image: "https://img.freepik.com/premium-photo/happy-builder-hard-hat-ai-generated_941980-585.jpg", name: "Mark", rating: "4", reviews: "6" },
    { image: "https://img.freepik.com/premium-photo/working-electrician_944011-1300.jpg?w=360", name: "Kirk", rating: "4", reviews: "6" },
    { image: "https://img.freepik.com/premium-photo/closeup-portrait-joyful-middleaged-electrician-wearing-protective-gear_820340-7535.jpg", name: "Johnbee", rating: "5", reviews: "9" },
  ],
  APPLIANCE_REPAIR: [ // Changed from APPLIANCE_REPAIRS to APPLIANCE_REPAIR
    { image: "https://img.freepik.com/premium-photo/skilled-male-electrician-fixing-wiring-ai-generated_921479-8673.jpg", name: "Sundee", rating: "4", reviews: "3" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3me17bNsTlXjxtxUP7VJe_QeK25e8yrw2yg&s", name: "Nas X", rating: "4", reviews: "6" },
    { image: "https://files.idyllic.app/files/static/127024?width=384&optimizer=image", name: "Harold M", rating: "4", reviews: "6" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_EjhPBGk6i51ch9AtyNDFpNRieH1FxksGQ&s", name: "Jeber", rating: "4", reviews: "6" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaTDYv8-zA5e9urJTMMYig-zGGgiF4xi60Q&s", name: "Sally", rating: "4", reviews: "6" },
  ],
};

const ServiceCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("PLUMBING");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setSelectedCategory(category); // Change category after a delay
      setIsLoading(false); // Stop loading
    }, 300); // Delay in milliseconds (300ms in this case)
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
            {category.replace("_", " ")} 
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
          >
            <img src={service.image} alt={service.name} className="h-24 w-24 rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-yellow-500 font-bold">
              ★ {service.rating} ({service.reviews})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;