import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to Our Platform",
  subtitle = "Discover amazing features and services tailored just for you",
  ctaText = "Get Started",
  ctaLink = "#"
}) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;