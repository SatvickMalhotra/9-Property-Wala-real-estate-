
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-dark text-light py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/p/9-Property-Wala-Real-Estate-Indirapuram-61558981883144/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-light-dark transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/9propertywala/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-light-dark transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/9propertywala" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-light-dark transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ssonumalhotra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-light-dark transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-center">
            <a href="tel:09311632755" className="flex items-center gap-2 hover:text-light-dark transition-colors">
              <i className="fa-solid fa-phone"></i>
              <span>093116 32755</span>
            </a>
            <a href="mailto:9propertywala@gmail.com" className="flex items-center gap-2 hover:text-light-dark transition-colors">
              <i className="fa-solid fa-envelope"></i>
              <span>9propertywala@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <img src="https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/logo1.png?v=1746597121263" alt="9 Property Wala Logo" className="h-12 md:h-14" />
            <span className="font-heading text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">9 Property Wala</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-heading font-medium text-dark-light hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                    isActive ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            className="lg:hidden text-2xl text-dark z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} pt-28`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `font-heading text-2xl font-semibold ${isActive ? 'text-primary' : 'text-dark'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
