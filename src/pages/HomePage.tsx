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
      />
      
      <ProductsSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <BlogPreview />
      
      <ContactForm formType="quote" />
    </>
  );
};

export default HomePage;