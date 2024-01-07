import React from "react";

const ExclusiveDeals = () => {
  return (
    <section className="exclusive-deals">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Exclusive Deal Card 1 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/wW1JqM6/pexels-karolina-grabowska-4386467.jpg"
              alt="Exclusive Deal 1"
              className="w-full h-52 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
            Cardiac Wellness Package
            </h3>
            <p className="text-gray-600 mb-4">
            Description: Prioritize heart health with our Cardiac Wellness Package. This comprehensive offering includes cardiovascular screenings
            </p>
            <div className="text-primary font-semibold">$999</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>

          {/* Exclusive Deal Card 2 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/7pGRR9G/pexels-caleb-oquendo-7388488.jpg"
              alt="Exclusive Deal 2"
              className="w-full h-52 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
            Orthopedic Recovery Program
            </h3>
            <p className="text-gray-600 mb-4">
            Description: Regain mobility and live pain-free with our Orthopedic Recovery Program. 
            </p>
            <div className="text-primary font-semibold">$799</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>

          {/* Exclusive Deal Card 3 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/x37SjLz/pexels-thesis-10132278.jpg"
              alt="Exclusive Deal 3"
              className="w-full h-52 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Wellness Package</h3>
            <p className="text-gray-600 mb-4">
            Description: Experience a thorough health assessment with our Comprehensive Wellness Package. 
            </p>
            <div className="text-primary font-semibold">$699</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
