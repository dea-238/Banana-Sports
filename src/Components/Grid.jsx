import React, { useState } from 'react';
import { grids } from '../constants/index';

const Grid = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (id, link) => {
    setClicked(id);
    
    if (link === '#contact') { 
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="grid" 
      className="relative bg-white text-black overflow-hidden py-8 px-2 sm:pt-20 sm:pb-16 sm:px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 flex justify-center">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
          {grids.map((grid, index) => (
            <div 
              key={grid.id}
              className={`relative ${index !== 0 ? "mt-[-40px] sm:mt-0 sm:ml-[-20px] md:ml-[-30px] lg:ml-[-40px]" : ""}`}
            >
              <button  
                onClick={() => handleClick(grid.id, grid.link)}
                className="relative rounded-full overflow-hidden group shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center bg-[#FDE030] border-2 sm:border-4 border-white hover:shadow-[#FFB300] z-10"
                style={{ zIndex: grids.length - index }}
              > 
                <div className="absolute inset-0 rounded-full transition-opacity duration-300"></div> 
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300 group-hover:opacity-0 z-10"> 
                  <p className="text-black font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">{grid.title}</p> 
                </div> 
                <div className="absolute inset-0 flex items-center justify-center p-3 xs:p-4 sm:p-5 md:p-7 lg:p-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-full z-20"> 
                  <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-center font-semibold">{grid.text}</p> 
                </div> 
              </button> 
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Grid;