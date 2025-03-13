import React from 'react';
import { motion } from 'framer-motion';

const Amenities = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 80,
      },
    },
  };

  return (
    <section
      id="amenities"
      className="bg-white text-black py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
      style={{ scrollMarginTop: '104px' }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider font-thunder text-black">
          <span className="text-black">FACILITIES AND</span> EQUIPMENT
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16">
        <motion.div
          variants={itemVariants}
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-yellow outline outline-2 outline-yellow md:col-span-2 flex flex-col"
          style={{ minHeight: '280px' }}>
          <img
            src="/images/paddles.jpg"
            alt="Practice Equipment"
            className="absolute inset-0 w-full h-full object-cover"/>
          <div
            className="absolute bg-gray-900 bg-opacity-60 text-white flex flex-col justify-center p-6 sm:p-8"
            style={{ width: '50%', height: '100%', right: 0 }}>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">Premium Equipment</h3>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2">
              Train with the best – featuring Adidas paddles and racquets for optimal
              performance. Our facility boasts ITF-certified courts maintained to
              international standards, ensuring professional-level play for everyone.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-yellow outline outline-2 outline-yellow">
          <div className="aspect-square w-full">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/v.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 mb-0">
        {[ 
          { title: 'Pro Shop', description: 'Grab super cool gear and awesome shirts!' },
          { title: 'Cafe and Chill Out Area', description: 'Comfy places to chill, snacks, and socialize!' },
          { title: 'Restroom and Shower', description: 'Super clean bathrooms and awesome showers!' },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border-2 border-yellow-400 outline outline-2 outline-yellow-400 h-48 sm:h-56 md:h-64 flex flex-col justify-start p-6 sm:p-7"
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-black">{item.title}</h3>
            <p className="text-black mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Amenities;
