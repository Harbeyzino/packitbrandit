import React from 'react';
import Container from '../ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../ui/Card';
import Button from '../ui/Button';
import { PRODUCTS } from '../../utils/constants';

interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title = 'Our Products',
  subtitle = 'Innovative packaging solutions tailored to your needs',
  showButton = true,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group transition-all duration-300 hover:shadow-lg">
              <CardImage 
                src={product.imageUrl} 
                alt={product.name} 
                className="h-56 transition-transform duration-500 group-hover:scale-105"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showButton && (
          <div className="flex justify-center mt-12">
            <Button variant="primary" size="lg" className="px-8">
              View All Products
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductsSection;