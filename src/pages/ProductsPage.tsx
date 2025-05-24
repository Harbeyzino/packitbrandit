import React from 'react';
import Hero from '../components/sections/Hero';
import ProductsSection from '../components/sections/ProductsSection';
import ContactForm from '../components/sections/ContactForm';
import Container from '../components/ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Recycle, ShieldCheck, Truck } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Product Range"
        subtitle="Discover our comprehensive range of packaging solutions designed to meet your specific needs."
        image="https://images.pexels.com/photos/4498159/pexels-photo-4498159.jpeg"
        primaryButtonText="Request a Quote"
        secondaryButtonText="Speak to an Expert"
      />
      
      <ProductsSection 
        title="Packaging Solutions" 
        subtitle="Explore our diverse range of packaging products tailored for different industries and applications."
        showButton={false}
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized packaging for various industries, ensuring your products are perfectly presented and protected.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardImage 
                src="https://images.pexels.com/photos/4040646/pexels-photo-4040646.jpeg" 
                alt="Food & Beverage Packaging" 
                className="h-48 transition-transform duration-500 hover:scale-105"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Food & Beverage</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  FDA-compliant packaging solutions that maintain freshness, extend shelf life, and showcase your food products.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardImage 
                src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg" 
                alt="Retail Packaging" 
                className="h-48 transition-transform duration-500 hover:scale-105"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Retail</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Eye-catching packaging designed to make your products stand out on store shelves and enhance brand recognition.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardImage 
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg" 
                alt="E-commerce Packaging" 
                className="h-48 transition-transform duration-500 hover:scale-105"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">E-commerce</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Durable, right-sized packaging solutions designed for shipping efficiency and memorable unboxing experiences.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Packaging Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you choose Dabi Packaging, you're getting more than just boxes – you're investing in solutions that deliver real value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Protection</h3>
              <p className="text-gray-600">
                Our packaging is engineered to provide optimal protection throughout the supply chain, reducing damage and returns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Recycle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly materials and designs that minimize environmental impact while maintaining performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics Efficiency</h3>
              <p className="text-gray-600">
                Optimized dimensions and weights to reduce shipping costs and improve warehouse utilization.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <ContactForm 
        formType="quote" 
        title="Need Help Choosing the Right Packaging?"
        subtitle="Tell us about your product and requirements, and our team will recommend the perfect packaging solution."
      />
    </>
  );
};

export default ProductsPage;