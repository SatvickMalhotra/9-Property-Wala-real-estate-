import React from 'react';
import { Link } from 'react-router-dom';
import { type Property, PropertyStatus } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const getStatusColor = () => {
    switch (property.status) {
      case PropertyStatus.ForSale:
        return 'bg-primary';
      case PropertyStatus.ForRent:
        return 'bg-secondary';
      case PropertyStatus.SaleOrRent:
        return 'bg-green-600';
      default:
        return 'bg-gray-500';
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `9 Property Wala: ${property.title}`,
      text: `Check out this property: ${property.title}. Price: ${property.price}`,
      url: `${window.location.origin}/#/property/${property.id}`,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const whatsappNumber = "919311632755";
  const message = `Hey I am interested in "${property.title}"`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative overflow-hidden h-56">
        <Link to={`/property/${property.id}`}>
            <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </Link>
        <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-md ${getStatusColor()}`}>
          {property.status}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/property/${property.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-heading text-xl font-bold text-dark mb-2 truncate">{property.title}</h3>
        </Link>
        <p className="text-lg font-semibold text-primary mb-3">{property.price}</p>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{property.description.substring(0, 100)}...</p>
        <div className="flex flex-col items-start gap-3 text-sm text-gray-700 pt-3 border-t border-gray-100 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><i className="fas fa-bed text-primary"></i>{property.beds} Beds</span>
            <span className="flex items-center gap-2"><i className="fas fa-ruler-combined text-primary"></i>{property.area} sqft</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-green-600 hover:text-green-800 transition-colors font-medium"
              aria-label="Contact on WhatsApp"
            >
              <i className="fab fa-whatsapp text-base"></i> WhatsApp
            </a>
            <button onClick={handleShare} className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors font-medium">
              <i className="fas fa-share-alt"></i> Share
            </button>
            <Link to={`/property/${property.id}`} className="flex items-center gap-1.5 text-dark-light hover:text-primary transition-colors font-medium" aria-label="View property details">
                <i className="fas fa-eye"></i> View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;