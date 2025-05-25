import React from 'react';
import Container from '../ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../ui/Card';
import Button from '../ui/Button';
import { EQUIPMENT } from '../../utils/constants';
import { Check } from 'lucide-react';
import QuotePopup from '../ui/QuotePopup';

const EquipmentSection: React.FC = () => {
  const [showQuotePopup, setShowQuotePopup] = React.useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Packaging Equipment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art packaging equipment to optimize your production process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EQUIPMENT.map((item) => (
            <Card key={item.id} className="h-full flex flex-col">
              <CardImage 
                src={item.imageUrl} 
                alt={item.name} 
                className="h-56"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => setShowQuotePopup(true)}
                  >
                    Request Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <QuotePopup 
          isOpen={showQuotePopup} 
          onClose={() => setShowQuotePopup(false)} 
        />
      </Container>
    </section>
  );
};

export default EquipmentSection;