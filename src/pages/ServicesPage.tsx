import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import ContactForm from '../components/sections/ContactForm';
import Container from '../components/ui/Container';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Clock, Lightbulb, LineChart, Users } from 'lucide-react';

const ServiceProcess: React.FC<{
  number: number;
  title: string;
  description: string;
}> = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive packaging solutions from concept to delivery"
        image="https://images.pexels.com/photos/5589143/pexels-photo-5589143.jpeg"
        primaryButtonText="Get Started"
        secondaryButtonText="Talk to an Expert"
      />
      
      <ServicesSection 
        title="What We Offer"
        subtitle="Explore our range of services designed to meet all your packaging needs"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a collaborative, step-by-step approach to create the perfect packaging solution for your business.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <ServiceProcess 
                number={1}
                title="Initial Consultation"
                description="We start by understanding your product, brand, and specific packaging requirements through a detailed consultation."
              />
              
              <ServiceProcess 
                number={2}
                title="Design & Prototyping"
                description="Our design team creates packaging concepts and prototypes tailored to your specifications and brand identity."
              />
              
              <ServiceProcess 
                number={3}
                title="Refinement & Approval"
                description="We refine the design based on your feedback until we achieve the perfect solution that meets all your requirements."
              />
              
              <ServiceProcess 
                number={4}
                title="Production & Delivery"
                description="Once approved, we move to full-scale production with rigorous quality control and timely delivery."
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Dabi Packaging for your packaging needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Expertise & Innovation</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team of packaging experts brings years of industry experience and innovative thinking to every project, ensuring you get cutting-edge solutions that stand out in the market.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Efficiency & Timeliness</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We understand the importance of meeting deadlines. Our streamlined processes and dedicated project management ensure your packaging solutions are delivered on time, every time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <LineChart className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Quality & Consistency</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain rigorous quality control standards throughout the production process, ensuring every packaging unit meets our high standards of excellence and consistency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Customer-Centric Approach</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We take a collaborative approach, involving you at every step of the process and providing responsive support throughout our partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
      
      <ContactForm 
        formType="expert" 
        title="Speak with Our Packaging Experts"
        subtitle="Have questions about our services? Our team is ready to help you find the right packaging solution for your business."
      />
    </>
  );
};

export default ServicesPage;