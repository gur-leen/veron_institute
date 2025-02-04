import React, { useState, useEffect } from 'react';
import './Carousel.css';
import next from '../../assets/right-arrow.png';
import prev from '../../assets/left-arrow.png';

const Carousel = ({ autoSlide = true, slideInterval = 3000 }) => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: 'https://media.cntraveler.com/photos/5e74f9de2e6ca30009d1d4fa/16:9/w_2560%2Cc_limit/Argentina-GettyImages-1146497849.jpg',
      alt_text: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://images.goway.com/production/hero/iStock-1919241099.jpeg',
      alt_text: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://www.itsholidaysltd.com/_next/image?url=%2Fimages%2Fblog%2Fwhat-is-the-difference-between-tour-and-travel.jpg&w=3840&q=100',
      alt_text: 'Slide 3',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const fetchCarouselImages = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/admin_panel/list_carousel_images/`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({}),
  //       });
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setSlides(data.carousel_images);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchCarouselImages();
  // }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    let interval;
    if (autoSlide && slides.length > 0) {
      interval = setInterval(() => {
        nextSlide();
      }, slideInterval);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval, slides.length]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="carousel">
      <button className="prev btn" onClick={prevSlide}>
        <img src={prev} className="arrow" />
      </button>
      <div className="carousel-content" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={slide.alt_text} className="carousel-image" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button className="next btn" onClick={nextSlide}>
        <img src={next} className="arrow" />
      </button>
    </div>
  );
};

export default Carousel;
