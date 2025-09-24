
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_AREAS } from '../constants';
import type { ServiceArea } from '../types';

const AccordionItem: React.FC<{ area: ServiceArea }> = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-sm text-light-dark hover:text-white transition-colors py-1"
        aria-expanded={isOpen}
      >
        <span>{area.name}</span>
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
           <ul className="pl-4 pt-2 pb-1 space-y-1">
            {area.subLinks.map((linkText, index) => (
              <li key={index}>
                <Link to="/properties" className="text-xs text-light-dark hover:text-white hover:pl-1 transition-all duration-300 block">{linkText}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light-dark pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-white">9 Property Wala</h4>
            <p className="text-sm">Your trusted partner in real estate. Sale, Purchase, Collaboration & Renting.</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/p/9-Property-Wala-Real-Estate-Indirapuram-61558981883144/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl hover:text-white transition-all duration-300 hover:scale-110"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/9propertywala/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl hover:text-white transition-all duration-300 hover:scale-110"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/9propertywala" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-xl hover:text-white transition-all duration-300 hover:scale-110"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/ssonumalhotra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl hover:text-white transition-all duration-300 hover:scale-110"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white hover:pl-2 transition-all duration-300">Home</Link></li>
              <li><Link to="/properties" className="hover:text-white hover:pl-2 transition-all duration-300">Properties</Link></li>
              <li><Link to="/about" className="hover:text-white hover:pl-2 transition-all duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:pl-2 transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Areas We Serve Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-white">Areas We Serve</h4>
            <div className="space-y-1">
              {SERVICE_AREAS.map(area => (
                <AccordionItem key={area.name} area={area} />
              ))}
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span>9 - Shop Number, Amrapali Village Apartments Market, Kala Pathar Rd, Indirapuram, Ghaziabad, UP 201014</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-primary mt-1"></i>
                <a href="tel:09311632755" className="hover:text-white">093116 32755</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-primary mt-1"></i>
                <a href="mailto:9propertywala@gmail.com" className="hover:text-white">9propertywala@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-dark-light text-sm">
          <p>© {currentYear} 9 Property Wala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
