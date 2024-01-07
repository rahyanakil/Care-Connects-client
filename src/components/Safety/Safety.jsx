import React from "react";
import Container from "../Shared/Container";
import telemed from "../../assets/images/telemedicine.jpg";

const Safety = () => {
  return (
    <Container>
      <div className="safety-updates my-20">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="animated-text text-3xl mb-4">
              Health Management with Care Connect
              </h2>
              <p className="text-xl text-gray-700 mb-6">
              At Care Connect HMS, we are dedicated to prioritizing your well-being throughout your healthcare journey. Your safety is our commitment.
              </p>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Key Updates</h3>
                <ul className="list-disc list-inside text-gray-800">
                  <li>
                  Stay informed with Care Connect and warnings issued by your government and international health organizations for your travel destination.  


                  </li>
                  <li>
                  Prioritize your well-being by following local health and safety guidelines, including mask mandates, social distancing, and hygiene practices, in the regions you visit.
                  </li>
                  <li>
                  Stay updated on entry requirements, including visa and vaccination necessities, and be aware of applicable quarantine rules.
                  </li>
                </ul>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                For the most up-to-date information and resources, we recommend
                visiting official sources:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.healthgrades.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  Official healthgrades Updates
                </a>
                <a
                  href="https://www.teladoc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  TeleDoc Guidelines
                </a>
              </div>
            </div>
            <div>
              <img
                src={telemed}
                alt="Safety and Travel Updates"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Safety;
