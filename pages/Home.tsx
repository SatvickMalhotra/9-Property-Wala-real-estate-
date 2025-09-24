import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES, TESTIMONIALS } from '../constants';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [updateSlidesToShow]);

  const maxIndex = TESTIMONIALS.length - slidesToShow;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <>
      {/* Hero Section */}
      <section className="h-[calc(100vh-112px)] min-h-[450px] relative flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/background1.jpeg?v=1746597212978')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">Buy, Sell or Rent</h1>
          <p className="text-xl md:text-2xl font-light animate-fade-in-up">Your Property With us and Secure The Best Deal.</p>
        </div>
      </section>

      {/* Latest Listings Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-dark mb-4">Latest Listings</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Check out some of the latest and best properties published on our website.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 6).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/properties" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-300 transform hover:scale-105 inline-block">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-dark mb-4">Client Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">What people say about us.</p>
          <div className="relative">
             <div className="overflow-hidden" ref={sliderRef}>
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)` }}>
                 {TESTIMONIALS.map(testimonial => (
                    <div key={testimonial.id} style={{ flex: `0 0 ${100 / slidesToShow}%` }} className="px-2">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
               </div>
             </div>
             {/* Slider Controls */}
             <button onClick={prevSlide} className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 z-10">
                <i className="fas fa-chevron-left"></i>
             </button>
             <button onClick={nextSlide} className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 z-10">
                <i className="fas fa-chevron-right"></i>
             </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;