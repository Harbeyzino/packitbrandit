import React from 'react';
import Container from '../ui/Container';
import { TESTIMONIALS } from '../../utils/constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our packaging solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by Companies Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Client logos */}
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 font-semibold">Client Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 font-semibold">Client Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 font-semibold">Client Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 font-semibold">Client Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-600 font-semibold">Client Logo</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;