import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="properties" element={<Properties />} />
            <Route path="property/:id" element={<PropertyDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;