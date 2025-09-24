
import React from 'react';

const Contact: React.FC = () => {
    const openingHours = [
        { day: 'Monday', hours: '10:00 am – 8:00 pm' },
        { day: 'Tuesday', hours: '10:00 am – 8:00 pm' },
        { day: 'Wednesday', hours: '10:00 am – 8:00 pm' },
        { day: 'Thursday', hours: '10:00 am – 8:00 pm' },
        { day: 'Friday', hours: '10:00 am – 8:00 pm' },
        { day: 'Saturday', hours: '10:00 am – 8:00 pm' },
        { day: 'Sunday', hours: '10:00 am – 8:00 pm' },
    ];

  return (
    <>
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We're here to help with all your property needs. Reach out to us through any of the methods below.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-dark mb-6 border-b-2 border-primary pb-3 inline-block">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <i className="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-dark">Address</h3>
                            <p className="text-gray-600">9 - Shop Number, Amrapali Village Apartments Market, Kala Pathar Rd, Indirapuram, Ghaziabad, UP 201014</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <i className="fas fa-phone text-primary text-2xl mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-dark">Phone</h3>
                            <a href="tel:09311632755" className="text-gray-600 hover:text-primary">093116 32755</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <i className="fas fa-envelope text-primary text-2xl mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-dark">Email</h3>
                            <a href="mailto:9propertywala@gmail.com" className="text-gray-600 hover:text-primary">9propertywala@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-dark mb-4">Follow Us</h3>
                    <div className="flex items-center gap-5 text-2xl text-dark">
                         <a href="https://www.facebook.com/p/9-Property-Wala-Real-Estate-Indirapuram-61558981883144/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
                         <a href="https://www.instagram.com/9propertywala/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
                         <a href="https://x.com/9propertywala" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
                         <a href="https://www.linkedin.com/in/ssonumalhotra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            
            {/* Opening Hours */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-dark mb-6 border-b-2 border-primary pb-3 inline-block">Shop Opening Hours</h2>
                <table className="w-full text-left">
                    <tbody>
                        {openingHours.map(item => (
                            <tr key={item.day} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                <td className="py-3 font-medium text-dark">{item.day}</td>
                                <td className="py-3 text-primary font-semibold">{item.hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-6 text-sm text-gray-500 italic">Phone assistance is available 24/7. Please feel free to call us anytime for urgent inquiries.</p>
            </div>
          </div>

           <div className="mt-20">
              <h2 className="font-heading text-3xl font-bold text-dark text-center mb-8">Find Us On Map</h2>
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
        </div>
      </section>
    </>
  );
};

export default Contact;
