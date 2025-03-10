import React from 'react'; 
import { roadmap } from '../constants/index'; 
 
const Amenities = ({ id }) => { 
  return ( 
    <section 
      id="amenities" 
      className="relative bg-black text-yellow overflow-hidden pt-20 pb-16 px-4 sm:px-8 md:px-12"
    > 
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider font-thunder text-center mb-8 sm:mb-10 md:mb-12"> 
        Explore Our Facilities 
      </div> 
       
      <div className="max-w-7xl mx-auto rounded-2xl bg-white p-8 sm:p-12 md:p-16 shadow-lg"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {roadmap.map((facility) => ( 
            <div  
              key={facility.id}  
              className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 h-72 sm:h-80 md:h-96" 
            > 
              <img  
                src={facility.imageUrl}  
                alt={facility.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy" 
              /> 
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div> 
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 sm:p-5 md:p-6 transition-opacity duration-300 group-hover:opacity-0"> 
                <p className="text-white font-semibold text-lg sm:text-xl md:text-2xl text-center">{facility.title}</p> 
              </div> 
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/75"> 
                <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center">{facility.text}</p> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default Amenities;