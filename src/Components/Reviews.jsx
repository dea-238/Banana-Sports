import React from "react";
import { motion } from "framer-motion";
import { reviews } from "../constants/index";

const Reviews = () => {
  // Animation variants - grouped by functionality
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    },
    
    review: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hover: {
        y: -10,
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      },
    },
    
    image: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          delay: 0.2,
        },
      },
      hover: {
        scale: 1.1,
        transition: {
          yoyo: Infinity,
          duration: 1.5,
        },
      },
    },
    
    text: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.4,
          duration: 0.6,
        },
      },
    },
    
    header: {
      hidden: { opacity: 0, y: -20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7 }
      }
    },
    
    reviewText: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { delay: 0.6, duration: 0.8 }
      }
    },
    
    textSpan: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { delay: 0.7, duration: 0.8, staggerChildren: 0.03 }
      }
    }
  };

  // Custom CSS for the glow effect
  const glowEffectCSS = `
    @keyframes intenseYellowGlow {
      0% { box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); }
      50% { box-shadow: 0 0 18px 8px rgba(255, 215, 0, 0.7); }
      100% { box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); }
    }
    .yellow-glow-effect {
      animation: intenseYellowGlow 4s infinite alternate;
      border-radius: 50%;
      width: 120%;
      height: 120%;
      position: absolute;
      top: -10%;
      left: -10%;
      z-index: 5;
    }
  `;

  // Reusable ReviewCard component
  const ReviewCard = ({ review, index }) => (
    <motion.div
      key={review.id}
      variants={animations.review}
      whileHover="hover"
      className={`flex flex-col items-center w-full min-w-0 ${
        index % 2 === 0 ? "sm:mb-16" : "sm:mt-16"
      }`}>
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 flex-shrink-0">
        {/* Yellow Glowing Effect */}
        <div className="absolute inset-0 w-full h-full rounded-full yellow-glow-effect"></div>
        
        {/* Image */}
        <motion.div
          variants={animations.image}
          className="w-full h-full rounded-full overflow-hidden shadow-lg relative z-10">
          <img
            src={review.image}
            alt={review.author}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"/>
        </motion.div>
      </div>
      
      {/* Author info */}
      <motion.p
        variants={animations.text}
        className="mt-3 text-lg font-medium text-gray-500 break-words">
        {review.author}
      </motion.p>
      
      <motion.p
        variants={animations.text}
        className="text-sm text-gray-500 break-words">
        {review.role}
      </motion.p>
      
      {/* Review text */}
      <motion.p
        variants={animations.reviewText}
        initial="hidden"
        whileInView="visible"
        className="mt-4 text-base px-4 py-3 rounded-md text-center leading-relaxed break-words">
        <motion.span
          variants={animations.textSpan}
          initial="hidden"
          whileInView="visible">
          {review.text}
        </motion.span>
      </motion.p>
    </motion.div>
  );

  return (
    <section className="bg-white py-16 pb-0 px-4 text-center overflow-hidden">
      <motion.div
        variants={animations.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="w-full max-w-6xl mx-auto">
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </motion.div>
      </motion.div>
      
      <style>{glowEffectCSS}</style>
    </section>
  );
};
export default Reviews;