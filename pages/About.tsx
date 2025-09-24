
import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark">About 9 Property Wala</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Your trusted partner for all real estate needs in Indirapuram and beyond. We specialize in making your property journey smooth and successful.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-3xl font-bold text-dark mb-4">Meet Your Real Estate Expert: Sonu Malhotra</h2>
              <p className="text-gray-700 mb-4">
                Welcome to 9 Property Wala! With years of dedicated experience in the Indirapuram real estate market, I, Sonu Malhotra, pride myself on understanding the unique needs of each client. Whether you're looking to buy your dream home, sell a cherished property, or find the perfect rental, my mission is to provide you with personalized, professional, and transparent service.
              </p>
              <p className="text-gray-700 mb-4">
                I believe in building lasting relationships based on trust and integrity. My deep local knowledge, combined with a passion for real estate, ensures you get the best advice and the best deals. Let me guide you through every step of your property transaction with confidence and ease.
              </p>
              <p className="text-gray-700">
                Contact us today to discuss how we can help you achieve your real estate goals!
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/Untitled%20design%20(2)%20(2).png?v=1746601132903" alt="Sonu Malhotra - Founder of 9 Property Wala" className="rounded-lg shadow-2xl w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-dark text-center mb-8">Our Location</h2>
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.35794560000001!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala%20%7C%20Flats%20in%20Indirapuram%20%7C%20Property%20Dealer%20Indirapuram%20Real%20Estate%20Agent!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="9 Property Wala Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
