import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { PropertyStatus } from '../types';
import MetaTagManager from '../components/MetaTagManager';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === Number(id));

  const [mainImage, setMainImage] = useState(property?.image || '');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (property) {
      setMainImage(property.image);
    }
  }, [property, id]);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

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
      url: window.location.href,
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
  const message = `Hey I am interested in "${property.title}" (Property ID: ${property.id})`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


  return (
    <>
      <MetaTagManager 
        title={`${property.title} | 9 Property Wala`}
        description={property.description.substring(0, 160)}
      />
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark">{property.title}</h1>
                <div className="text-sm text-gray-600 mt-1">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/properties" className="hover:text-primary">Properties</Link>
                    <span className="mx-2">/</span>
                    <span>{property.title}</span>
                </div>
            </div>
        </div>
        
        <div className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Side - Image Gallery */}
                    <div className="lg:col-span-2">
                        <div className="relative mb-4 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                            <img src={mainImage} alt={property.title} className="w-full h-auto max-h-[500px] object-contain rounded-lg" />
                             <span className={`absolute top-4 left-4 text-white text-sm font-bold px-4 py-2 rounded-md ${getStatusColor()}`}>
                                {property.status}
                             </span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {property.images.map((img, index) => (
                                <button key={index} onClick={() => setMainImage(img)} className="flex-1 min-w-[80px]">
                                    <img src={img} alt={`${property.title} thumbnail ${index + 1}`} className={`w-full h-24 object-cover rounded-md cursor-pointer border-4 ${mainImage === img ? 'border-primary' : 'border-transparent hover:border-gray-300'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="font-heading text-2xl font-bold text-primary mb-4">{property.price}</h2>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-semibold text-dark">Property ID:</span>
                                    <span>#{property.id.toString().padStart(4, '0')}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-semibold text-dark">Beds:</span>
                                    <span>{property.beds > 0 ? property.beds : 'N/A'}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-semibold text-dark">Area:</span>
                                    <span>{property.area} sqft</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-semibold text-dark">Status:</span>
                                    <span>{property.status}</span>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-col gap-3">
                                <a 
                                  href={whatsappUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="w-full text-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                  <i className="fab fa-whatsapp text-xl"></i> Contact on WhatsApp
                                </a>
                                <button onClick={handleShare} className="w-full text-center bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2">
                                  <i className="fas fa-share-alt"></i> Share Property
                                </button>
                                {property.id === 1 && (
                                  <a
                                    href="https://www.instagram.com/p/DJvwvkJJvN6/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                                  >
                                    <i className="fab fa-instagram text-xl"></i> View Insta Post
                                  </a>
                                )}
                                {property.id === 2 && (
                                  <a
                                    href="https://www.instagram.com/p/DLWsPwCJXbO/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                                  >
                                    <i className="fab fa-instagram text-xl"></i> View Insta Post
                                  </a>
                                )}
                                {property.id === 3 && (
                                  <a
                                    href="https://www.instagram.com/p/DPGdDIuCRLV/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                                  >
                                    <i className="fab fa-instagram text-xl"></i> View Insta Post
                                  </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-16">
                    <h3 className="font-heading text-2xl font-bold text-dark mb-4 border-b-2 border-primary pb-2 inline-block">Description</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{property.description}</p>
                </div>

                {/* Amenities */}
                {property.amenities.length > 0 && (
                    <div className="mt-12">
                        <h3 className="font-heading text-2xl font-bold text-dark mb-6 border-b-2 border-primary pb-2 inline-block">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {property.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
                                    <i className="fas fa-check-circle text-primary"></i>
                                    <span className="text-gray-700">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Location */}
                <div className="mt-16">
                    <h3 className="font-heading text-2xl font-bold text-dark mb-4 border-b-2 border-primary pb-2 inline-block">Location</h3>
                     <p className="text-gray-700 mb-6 flex items-center gap-2"><i className="fas fa-map-marker-alt text-primary"></i> {property.address}</p>
                    <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
                         <iframe
                            src={property.mapEmbedUrl}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${property.title} Location`}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;