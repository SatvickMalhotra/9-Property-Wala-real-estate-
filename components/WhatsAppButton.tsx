import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "919311632755";
  const message = "Hello! I'm interested in your properties.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center justify-start bg-green-500 w-16 h-16 rounded-full shadow-lg transition-all duration-300 ease-in-out group-hover:w-48 group-hover:bg-green-600 animate-bob-and-rotate">
        {/* Icon container to keep it centered in the 16x16 area */}
        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
            <i className="fab fa-whatsapp text-white text-4xl"></i>
        </div>
        {/* Text container */}
        <span className="text-white text-sm font-bold whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 pr-5">
          Chat with us
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;