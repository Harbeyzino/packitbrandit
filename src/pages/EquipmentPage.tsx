import React from 'react';
import Hero from '../components/sections/Hero';
import EquipmentSection from '../components/sections/EquipmentSection';
import ContactForm from '../components/sections/ContactForm';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const EquipmentPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Packaging Equipment"
        subtitle="State-of-the-art machinery to optimize your packaging operations"
        image="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg"
        primaryButtonText="Request Information"
      />
      
      <EquipmentSection />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment Services & Support</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Dabi Packaging, we don't just provide high-quality packaging equipment – we offer comprehensive support to ensure your operations run smoothly and efficiently.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Installation & Setup</h3>
                    <p className="text-gray-600">Professional installation and configuration of your equipment by our certified technicians.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Operator Training</h3>
                    <p className="text-gray-600">Comprehensive training for your team on equipment operation and maintenance procedures.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Maintenance Programs</h3>
                    <p className="text-gray-600">Regular maintenance services to ensure optimal performance and extend equipment lifespan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Technical Support</h3>
                    <p className="text-gray-600">Responsive technical support from our experienced team whenever you need assistance.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="primary">
                  Learn About Our Support Plans
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg" 
                alt="Equipment technician providing service" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible financing solutions to help you acquire the packaging equipment your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Purchase</h3>
              <p className="text-gray-600 mb-4">
                Direct purchase options with competitive pricing and volume discounts available for multiple equipment orders.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lease</h3>
              <p className="text-gray-600 mb-4">
                Flexible leasing options that allow you to conserve capital while accessing the equipment you need.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rent</h3>
              <p className="text-gray-600 mb-4">
                Short-term rental options ideal for seasonal needs, special projects, or testing before purchase.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      <ContactForm 
        formType="quote" 
        title="Request Equipment Information"
        subtitle="Interested in learning more about our packaging equipment? Fill out the form below and our team will get back to you with detailed information and pricing."
      />
    </>
  );
};

export default EquipmentPage;