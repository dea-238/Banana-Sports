import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { hudleImg, kmImg, playoImg, piplayImg } from "../utils";
import { BOOKING_LINKS, CONTACT_DETAILS } from "../constants";

const Contact = ({ id }) => {
  const images = { hudleImg, kmImg, playoImg, piplayImg };

  return (
    <div className="w-full overflow-hidden">
      <section id={id} className="bg-yellow p-6 md:p-10 lg:pr-16 rounded-t-[50px] w-full overflow-hidden text-gray-900">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 w-full">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold">BOOK A COURT</h2>
            <div className="mt-4 flex flex-col gap-4">
              {BOOKING_LINKS.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-3/4 md:w-1/2 bg-white text-black px-4 py-2 rounded-md shadow flex items-center gap-2 transition duration-300 hover:bg-gray-300"
                >
                  <img src={item.src} alt={item.alt} className="w-6 h-6"  />
                  <span>{item.name}</span> <FaExternalLinkAlt />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4 pr-4">
            <div>
              <h3 className="font-semibold">Address</h3>
              <ul className="space-y-1">
                {CONTACT_DETAILS.ADDRESS.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <ul className="space-y-2">
                <li>{CONTACT_DETAILS.PHONE}</li>
                <li>{CONTACT_DETAILS.EMAIL}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-400 pt-2 pb-1 flex flex-col sm:flex-row justify-between text-sm text-center sm:text-left">
          <p>{CONTACT_DETAILS.COPYRIGHT}</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;