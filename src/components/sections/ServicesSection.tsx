import React from 'react';
import Container from '../ui/Container';
import { Factory, Lightbulb, Palette, Truck } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import ContactForm from './ContactForm';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = 'Our Services',
  subtitle = 'Comprehensive packaging solutions from concept to delivery',
}) => {
  const [showExpertForm, setShowExpertForm] = React.useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-10 h-10 text-blue-500" />;
      case 'Factory':
        return <Factory className="w-10 h-10 text-blue-500" />;
      case 'Truck':
        return <Truck className="w-10 h-10 text-blue-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-10 h-10 text-blue-500" />;
      default:
        return <Palette className="w-10 h-10 text-blue-500" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="flex p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mr-4">
                {getIcon(service.icon)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need expert advice on your packaging needs?</h3>
          <p className="text-lg text-gray-600 mb-6">Our team of specialists is ready to help you find the perfect solution.</p>
          <button 
            onClick={() => setShowExpertForm(true)}
            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600 focus:shadow-outline focus:outline-none"
          >
            Talk to an Expert
          </button>
        </div>
      </Container>

      {showExpertForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowExpertForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <ContactForm
              title="Speak with Our Expert"
              subtitle="Tell us about your needs and our packaging specialist will get in touch with you shortly."
              formType="expert"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;