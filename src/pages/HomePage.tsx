import React from 'react';
import Hero from '../components/sections/Hero';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogPreview from '../components/sections/BlogPreview';
import ContactForm from '../components/sections/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Innovative Packaging Solutions for Your Business"
        subtitle="We help businesses create custom packaging that protects products, enhances brand identity, and delights customers."
        primaryButtonText="Get Started"
        secondaryButtonText="Speak to an Expert"
      />
      
      <ProductsSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <div className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Packaging?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Dabi for innovative, sustainable, and effective packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-blue-600 transition duration-200 bg-white rounded-md hover:bg-gray-100 focus:shadow-outline focus:outline-none"
            >
              Request a Quote
            </a>
            <a 
              href="/products" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-transparent border-2 border-white rounded-md hover:bg-white/10 focus:shadow-outline focus:outline-none"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
      
      <BlogPreview />
      
      <ContactForm formType="quote" />
    </>
  );
};

export default HomePage;