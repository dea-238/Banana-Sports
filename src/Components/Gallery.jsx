import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { images } from "../constants/index";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    const handleHashChange = () => {
      if (window.location.hash === '#gallery' && galleryRef.current) {
        setTimeout(() => {
          galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const navigateModal = (direction, e) => {
    if (e) e.stopPropagation();
    if (direction === 'next') {
      setModalImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setModalImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };
  

  const openModal = (index) => {
    setModalImageIndex(index);
    setShowModal(true);

    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const getCardIndices = () => {
    const totalImages = images.length;
    
    if (isMobile) {

      const leftIndex = (currentIndex - 1 + totalImages) % totalImages;
      const rightIndex = (currentIndex + 1) % totalImages;
      return { leftIndex, rightIndex, farLeftIndex: null, farRightIndex: null };
    } else {

      const farLeftIndex = (currentIndex - 2 + totalImages) % totalImages;
      const leftIndex = (currentIndex - 1 + totalImages) % totalImages;
      const rightIndex = (currentIndex + 1) % totalImages;
      const farRightIndex = (currentIndex + 2) % totalImages;
      return { farLeftIndex, leftIndex, rightIndex, farRightIndex };
    }
  };
  
  const { farLeftIndex, leftIndex, rightIndex, farRightIndex } = getCardIndices();

  return (
    <section id="gallery" ref={galleryRef} className="gallery-section">
      <h2 className="gallery-title">MOMENTS AT BANANA SPORTS</h2>

      <div className="gallery-display">

        {!isMobile && farLeftIndex !== null && (
          <div 
            className="gallery-card gallery-card-far-left"
            onClick={() => openModal(farLeftIndex)}
          >
            <img 
              src={images[farLeftIndex]} 
              alt="Gallery image" 
              className="gallery-image"
            />
          </div>
        )}
        

        <div 
          className="gallery-card gallery-card-left"
          onClick={() => openModal(leftIndex)}
        >
          <img 
            src={images[leftIndex]} 
            alt="Gallery image" 
            className="gallery-image"
          />
        </div>
        

        <div 
          className="gallery-card gallery-card-center"
          onClick={() => openModal(currentIndex)}
        >
          <img 
            src={images[currentIndex]} 
            alt="Gallery image" 
            className="gallery-image"
          />
        </div>

        <div 
          className="gallery-card gallery-card-right"
          onClick={() => openModal(rightIndex)}
        >
          <img 
            src={images[rightIndex]} 
            alt="Gallery image" 
            className="gallery-image"
          />
        </div>

        {!isMobile && farRightIndex !== null && (
          <div 
            className="gallery-card gallery-card-far-right"
            onClick={() => openModal(farRightIndex)}
          >
            <img 
              src={images[farRightIndex]} 
              alt="Gallery image" 
              className="gallery-image"
            />
          </div>
        )}
        

        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate('prev');
          }}
          className="gallery-nav-button gallery-nav-prev"
          aria-label="Previous image"
        >
          <ChevronLeft className="gallery-nav-icon" />
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate('next');
          }}
          className="gallery-nav-button gallery-nav-next"
          aria-label="Next image"
        >
          <ChevronRight className="gallery-nav-icon" />
        </button>
      </div>
      
      <div className="gallery-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`gallery-dot ${index === currentIndex ? 'gallery-dot-active' : ''}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {showModal && (
        <div className="gallery-modal" onClick={closeModal}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="gallery-modal-close"
            aria-label="Close modal"
          >
            <X className="gallery-modal-close-icon" />
          </button>
          
          {/* Image container */}
          <div className="gallery-modal-content">
            <img 
              src={images[modalImageIndex]} 
              alt={`Image ${modalImageIndex + 1}`} 
              className="gallery-modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {/* Navigation controls */}
          <div className="gallery-modal-nav">
            <button 
              onClick={(e) => navigateModal('prev', e)}
              className="gallery-modal-nav-button gallery-modal-prev"
              aria-label="Previous image"
            >
              <ChevronLeft className="gallery-modal-nav-icon" />
            </button>
            
            <button 
              onClick={(e) => navigateModal('next', e)}
              className="gallery-modal-nav-button gallery-modal-next"
              aria-label="Next image"
            >
              <ChevronRight className="gallery-modal-nav-icon" />
            </button>
          </div>
          
          {/* Image counter */}
          <div className="gallery-modal-counter">
            {modalImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;