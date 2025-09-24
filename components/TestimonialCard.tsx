
import React from 'react';
import { type Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
  }
  if (halfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
  }

  return <div className="text-yellow-400 text-lg mb-4">{stars}</div>;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center h-full mx-2">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover mb-5 border-4 border-primary"
      />
      <div className="flex-grow">
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
      </div>
      <div>
        <p className="font-heading font-bold text-dark">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
