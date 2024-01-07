import React from "react";
import Container from "../Shared/Container";

const LocalCuisineSection = () => {
  const foodieAdventures = [
    {
      "department": "Cardiology",
      "description": "Comprehensive care for heart health with advanced diagnostics and treatment.",
      "image": "https://i.ibb.co/PM9PZn6/pexels-karolina-grabowska-5207102.jpg",
      "link": "https://cardiology.bsmmu.ac.bd/"
    },
    {
      "department": "Orthopedics",
      "description": "Specialized care for musculoskeletal conditions and orthopedic surgeries.",
      "image": "https://i.ibb.co/3ySZDWR/pexels-cottonbro-studio-6191549.jpg",
      "link": "/orthopedics"
    },
    {
      "department": "Maternity and Pediatrics",
      "description": "Compassionate care for expectant mothers and children with a focus on maternal and child health.",
      "image": "https://i.ibb.co/G2HBkQf/pexels-cottonbro-studio-5853820.jpg",
      "link": "/maternity"
    },
    {
      "department": "Neurology",
      "description": "Advanced neurological care and diagnostics for conditions affecting the nervous system.",
      "image": "https://i.ibb.co/1vy20Dd/pexels-amel-uzunovic-15410078.jpg",
      "link": "/neurology"
    },
    {
      "department": "Internal Medicine",
      "description": "Comprehensive primary care for adults with a focus on preventive healthcare.",
      "image": "https://i.ibb.co/rwG1dhD/pexels-nataliya-vaitkevich-5863400.jpg",
      "link": "/internal-medicine-services"
    },
    {
      "department": "Emergency Medicine",
      "description": "Prompt and effective emergency care for critical medical conditions.",
      "image": "https://i.ibb.co/58Y0zYz/pexels-anna-shvets-3844581.jpg",
      "link": "/emergency-medicine-services"
    }
  ]
  ;

  return (
    <Container>
      <div className="container mx-auto my-20">
        <h2 className="animated-text text-center text-3xl mt-20">
          {/* Local Cuisine and Foodie Adventures */}
          Comprehensive Healthcare Services and Patient-Centric Solutions
        </h2>
        <p className="animated-text text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
          {foodieAdventures.map((adventure, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={adventure.image}
                alt={adventure.department}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {adventure.department}
                </h3>
                <p className="text-gray-600 mb-4">{adventure.description}</p>
                <a
                  href={adventure.link}
                  className="text-blue-500 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LocalCuisineSection;
