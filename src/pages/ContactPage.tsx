import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ContactForm from '../components/sections/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for any inquiries or to discuss your packaging needs"
        image="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We're Here to Help</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have questions about our products, need a custom quote, or want to discuss a packaging project, our team is ready to assist you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <address className="not-italic text-gray-600">
                      <p>123 Packaging Lane</p>
                      <p>Business District</p>
                      <p>Toronto, ON M5V 2H1</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+11234567890" className="hover:text-blue-500 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday to Friday, 9am to 5pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@dabipackaging.com" className="hover:text-blue-500 transition-colors">
                        info@dabipackaging.com
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Contacts</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Sales Inquiries:</span>{' '}
                    <a href="mailto:sales@dabipackaging.com" className="text-blue-500 hover:underline">
                      sales@dabipackaging.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Customer Support:</span>{' '}
                    <a href="mailto:support@dabipackaging.com" className="text-blue-500 hover:underline">
                      support@dabipackaging.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Media Inquiries:</span>{' '}
                    <a href="mailto:media@dabipackaging.com" className="text-blue-500 hover:underline">
                      media@dabipackaging.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm title="" buttonText="Send Message" />
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our headquarters in Toronto, or contact one of our regional offices.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-96 mb-8">
            {/* This would be a Google Maps embed in a real implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Toronto (Headquarters)</h3>
              <address className="not-italic text-gray-600">
                <p>123 Packaging Lane</p>
                <p>Business District</p>
                <p>Toronto, ON M5V 2H1</p>
                <p className="mt-2">
                  <a href="tel:+11234567890" className="text-blue-500 hover:underline">
                    (123) 456-7890
                  </a>
                </p>
              </address>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vancouver Office</h3>
              <address className="not-italic text-gray-600">
                <p>456 Pacific Avenue</p>
                <p>Downtown Core</p>
                <p>Vancouver, BC V6B 1Z1</p>
                <p className="mt-2">
                  <a href="tel:+12509876543" className="text-blue-500 hover:underline">
                    (250) 987-6543
                  </a>
                </p>
              </address>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Montreal Office</h3>
              <address className="not-italic text-gray-600">
                <p>789 St. Laurent Blvd</p>
                <p>Le Plateau</p>
                <p>Montreal, QC H2T 1R1</p>
                <p className="mt-2">
                  <a href="tel:+15142345678" className="text-blue-500 hover:underline">
                    (514) 234-5678
                  </a>
                </p>
              </address>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;