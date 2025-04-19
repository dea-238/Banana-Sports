import React from "react";
import { motion } from "framer-motion";
import { reviews } from "../constants/index";

const Reviews = () => {
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


  const ReviewCard = ({ review, index }) => (
    <motion.div
      key={review.id}
      variants={animations.review}
      whileHover="hover"
      className={`review-card ${
        index % 2 === 0 ? "review-card-even" : "review-card-odd"
      }`}>
      <div className="avatar-container">
        <div className="avatar-glow"></div>

        <motion.div
          variants={animations.image}
          className="avatar-wrapper">
          <img
            src={review.image}
            alt={review.author}
            className="avatar-image"
            loading="lazy"/>
        </motion.div>
      </div>
      
      <motion.p
        variants={animations.text}
        className="author-name">
        {review.author}
      </motion.p>
      
      <motion.p
        variants={animations.text}
        className="author-role">
        {review.role}
      </motion.p>
      
      <motion.p
        variants={animations.reviewText}
        initial="hidden"
        whileInView="visible"
        className="review-text">
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
    <section className="reviews-section">
      <motion.div
        variants={animations.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="reviews-container">
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="reviews-grid"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;