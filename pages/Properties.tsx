
import React from 'react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Properties: React.FC = () => {
  return (
    <div className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark">Our Properties</h1>
          <p className="text-lg text-gray-600 mt-2">Explore our curated list of properties for sale and rent.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
