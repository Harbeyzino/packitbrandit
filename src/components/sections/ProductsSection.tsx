import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../ui/Card';
import Button from '../ui/Button';
import { PRODUCTS } from '../../utils/constants';
import QuotePopup from '../ui/QuotePopup';

interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
  displayAsCarousel?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title = 'Our Products',
  subtitle = 'Innovative packaging solutions tailored to your needs',
  showButton = true,
  displayAsCarousel = false,
}) => {
  const [showQuotePopup, setShowQuotePopup] = React.useState(false);

  const sliderSettings = {
    dots: false,
    infinite: PRODUCTS.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: PRODUCTS.length > 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: PRODUCTS.length > 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: PRODUCTS.length > 1,
        }
      }
    ]
  };

  const renderProductCard = (product: typeof PRODUCTS[0]) => (
    <Card 
      key={product.id} 
      className="group transition-all duration-300 hover:shadow-lg h-full flex flex-col"
    >
      <CardImage 
        src={product.imageUrl} 
        alt={product.name} 
        className="h-56 transition-transform duration-500 group-hover:scale-105 object-cover"
      />
      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{product.description}</p>
        <div className="mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => setShowQuotePopup(true)}
          >
            Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {displayAsCarousel ? (
          <Slider {...sliderSettings} className="pb-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="px-2 md:px-4">
                {renderProductCard(product)}
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => renderProductCard(product))}
          </div>
        )}

        {showButton && displayAsCarousel && (
          <div className="flex justify-center mt-12">
            <Link to="/products">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-8"
              >
                More Products
              </Button>
            </Link>
          </div>
        )}

        <QuotePopup 
          isOpen={showQuotePopup} 
          onClose={() => setShowQuotePopup(false)} 
        />
      </Container>
    </section>
  );
};

export default ProductsSection;