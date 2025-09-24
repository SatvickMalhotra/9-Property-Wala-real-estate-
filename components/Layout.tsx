
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
