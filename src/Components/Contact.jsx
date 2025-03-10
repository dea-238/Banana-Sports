import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Contact = ({ id }) => {
  return (
    <section id={id} className="bg-yellow p-6 md:p-10 rounded-lg text-gray-900">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold">BOOK A COURT:</h2>
          <div className="mt-4 flex flex-col gap-4">
            {[
              { src: '/images/playo.webp', alt: 'Playo', name: 'PLAYO' },
              { src: '/images/km.png', alt: 'Khelomore', name: 'KHELOMORE' },
              { src: '/images/piplay.png', alt: 'Pi Play', name: 'PI PLAY' }
            ].map((item, index) => (
              <button 
                key={index} 
                className="w-3/4 md:w-1/2 bg-white text-black px-4 py-2 rounded-md shadow flex items-center gap-2 transition duration-300 hover:bg-gray-300"
              >
                <img src={item.src} alt={item.alt} className="w-6 h-6" />
                <span>{item.name}</span> <FaExternalLinkAlt />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4">
          <div>
            <h3 className="font-semibold">Address :</h3>
            <ul className="space-y-1">
              <li>29/8, Mullur Rd, off Sarjapur -</li>
              <li>Marathahalli Road, Carmelam Post,</li>
              <li>Bengaluru, Karnataka 560035</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us:</h3>
            <ul className="space-y-2">
              <li>+91 72043 21935</li>
              <li>bananasports@sptindia.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-400 pt-2 flex flex-col sm:flex-row justify-between text-sm text-center sm:text-left">
        <p>All rights reserved © BananaSports 2024</p>
      </div>
    </section>
  );
};

export default Contact;
