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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

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
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (direction) => {
    setCurrentIndex(prev =>
      direction === 'next'
        ? (prev === images.length - 1 ? 0 : prev + 1)
        : (prev === 0 ? images.length - 1 : prev - 1)
    );
  };

  const navigateModal = (direction, e) => {
    e.stopPropagation();
    setModalImageIndex(prev =>
      direction === 'next'
        ? (prev === images.length - 1 ? 0 : prev + 1)
        : (prev === 0 ? images.length - 1 : prev - 1)
    );
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
    const total = images.length;
    if (isMobile) {
      return {
        leftIndex:  (currentIndex - 1 + total) % total,
        rightIndex: (currentIndex + 1) % total,
        farLeftIndex:  null,
        farRightIndex: null
      };
    } else {
      return {
        farLeftIndex:  (currentIndex - 2 + total) % total,
        leftIndex:     (currentIndex - 1 + total) % total,
        rightIndex:    (currentIndex + 1) % total,
        farRightIndex: (currentIndex + 2) % total
      };
    }
  };
  const { farLeftIndex, leftIndex, rightIndex, farRightIndex } = getCardIndices();

  return (
    <section id="gallery" ref={galleryRef} className="gallery-section">
      <h2 className="gallery-title">MOMENTS AT BANANA SPORTS</h2>

      <div className="gallery-display">
        {!isMobile && farLeftIndex !== null && (
          <div className="gallery-card gallery-card-far-left"
               onClick={() => openModal(farLeftIndex)}>
            <img src={images[farLeftIndex]} alt="" className="gallery-image"/>
          </div>
        )}

        <div className="gallery-card gallery-card-left"
             onClick={() => openModal(leftIndex)}>
          <img src={images[leftIndex]} alt="" className="gallery-image"/>
        </div>

        <div className="gallery-card gallery-card-center"
             onClick={() => openModal(currentIndex)}>
          <img src={images[currentIndex]} alt="" className="gallery-image"/>
        </div>

        <div className="gallery-card gallery-card-right"
             onClick={() => openModal(rightIndex)}>
          <img src={images[rightIndex]} alt="" className="gallery-image"/>
        </div>

        {!isMobile && farRightIndex !== null && (
          <div className="gallery-card gallery-card-far-right"
               onClick={() => openModal(farRightIndex)}>
            <img src={images[farRightIndex]} alt="" className="gallery-image"/>
          </div>
        )}

        <button onClick={e => { e.stopPropagation(); navigate('prev'); }}
                className="gallery-nav-button gallery-nav-prev"
                aria-label="Previous image">
          <ChevronLeft className="gallery-nav-icon"/>
        </button>
        <button onClick={e => { e.stopPropagation(); navigate('next'); }}
                className="gallery-nav-button gallery-nav-next"
                aria-label="Next image">
          <ChevronRight className="gallery-nav-icon"/>
        </button>
      </div>

      <div className="gallery-pagination">
        {images.map((_, i) => (
          <button key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`gallery-dot ${i === currentIndex ? 'gallery-dot-active' : ''}`}
                  aria-label={`Go to image ${i + 1}`}/>
        ))}
      </div>

      {showModal && (
        <div className="gallery-modal" onClick={closeModal}>
          <button onClick={e => { e.stopPropagation(); closeModal(); }}
                  className="gallery-modal-close"
                  aria-label="Close modal">
            <X className="gallery-modal-close-icon"/>
          </button>

          <div className="gallery-modal-content">
            <img src={images[modalImageIndex]}
                 alt=""
                 className="gallery-modal-image"
                 onClick={e => e.stopPropagation()}/>
          </div>

          <div className="gallery-modal-nav">
            <button onClick={e => navigateModal('prev', e)}
                    className="gallery-modal-nav-button"
                    aria-label="Previous image">
              <ChevronLeft className="gallery-modal-nav-icon"/>
            </button>
            <button onClick={e => navigateModal('next', e)}
                    className="gallery-modal-nav-button"
                    aria-label="Next image">
              <ChevronRight className="gallery-modal-nav-icon"/>
            </button>
          </div>

          <div className="gallery-modal-counter">
            {modalImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
