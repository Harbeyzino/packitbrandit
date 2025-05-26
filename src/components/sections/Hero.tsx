import React from 'react';
import Container from '../ui/Container';
import { PRODUCTS } from '../../utils/constants';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image = 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg',
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fadeIn animation-delay-200">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-blue-100">{product.description}</p>
            </div>
          ))}
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,74.7C672,85,768,107,864,101.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;