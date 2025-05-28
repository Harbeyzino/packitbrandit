import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import { TESTIMONIALS } from '../../utils/constants';

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow right-[-25px] md:right-[-35px] before:text-xl before:text-gray-600 hover:before:text-blue-600`}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow left-[-25px] md:left-[-35px] before:text-xl before:text-gray-600 hover:before:text-blue-600`}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
};

// Placeholder logos (inline SVGs for simplicity)
const PlaceholderLogo1 = () => (
  <svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg" className="h-8 text-gray-500">
    <path d="M30.26 24.02V11.3H36.9v2.05h-4.59v3.28h4.2v2.06h-4.2v3.28h4.72v2.05h-6.76V24.02zM41.06 11.3h2.05v10.2h4.59v2.05H41.06V11.3zM53.11 13.35v-2.05h6.76v12.75h-2.2v-4.3h-4.56v4.3h-2.05V11.3h2.05v2.05h2.51zm2.51 3.28h-2.51v3.28h2.51v-3.28zM63.94 11.3h2.05v10.2h4.59v2.05h-6.64V11.3zM76.32 13.35l-1.36-2.05h2.5l2.65 4.08 2.65-4.08h2.5l-1.36 2.05L86.4 22v1.57h-2.05v-1.45l-2.65-4.08-2.65 4.08v1.45h-2.05V22l2.27-6.65zM92.15 11.3h2.05v12.75h-2.05V11.3zM98.17 24.02V11.3h6.76v2.05H100.2v3.28h4.2v2.06h-4.2v3.28h4.72v2.05h-6.76z" fill="currentColor"/>
    <circle cx="15" cy="20" r="10" fill="currentColor" />
  </svg>
);

const PlaceholderLogo2 = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 text-gray-500">
    <rect x="10" y="10" width="20" height="20" rx="4" fill="currentColor"/>
    <path d="M40 10h8v20h-8zM52 10h8v20h-8zM64 10h8v20h-8zM76 10h8l-4 10 4 10h-8l4-10-4-10zM90 10 a10 10 0 0 1 0 20 a10 10 0 0 1 0-20" fill="currentColor"/>
  </svg>
);

const PlaceholderLogo3 = () => (
  <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 text-gray-500">
    <polygon points="10,10 30,10 20,30" fill="currentColor"/>
    <path d="M40 30 Q 50 10 60 30 T 80 30" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);

const PlaceholderLogo4 = () => (
  <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className="h-8 text-gray-500">
    <path d="M10 10 L 30 30 L 10 30 Z M 10 10 L 30 10 L 10 30 Z M 40 10 H 70 A 10 10 0 0 1 70 30 H 40 A 10 10 0 0 0 40 10 M 80 20 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0 M 110 10 L 110 30 L 130 20 Z" fill="currentColor"/>
  </svg>
);

const TestimonialsSection: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: TESTIMONIALS.length > 1, // Only loop if more than 1 testimonial
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Slower speed for testimonials
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Show 1 slide on mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // You can add more breakpoints if needed, e.g., for 2 testimonials on medium screens
    ]
  };

  const trustedLogos = [
    { id: 1, component: <PlaceholderLogo1 />, name: "TechSolutions Co" },
    { id: 2, component: <PlaceholderLogo2 />, name: "Innovate Group" },
    { id: 3, component: <PlaceholderLogo3 />, name: "EcoBuilders Inc" },
    { id: 4, component: <PlaceholderLogo4 />, name: "Global Foods Ltd" },
    // Add a fifth one if desired
    // { id: 5, component: <PlaceholderLogo1 transform="scale(0.8)"/>, name: "Another Corp" }, 
  ];


  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don\'t just take our word for it. Here\'s what our clients have to say about our packaging solutions.
          </p>
        </div>

        {TESTIMONIALS.length > 0 ? (
          <div className="relative max-w-2xl mx-auto testimonial-slider-container">
            <Slider {...sliderSettings}>
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="px-2 md:px-4">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center min-h-[250px] flex flex-col justify-center">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-md" 
                      />
                    </div>
                    <p className="text-gray-700 italic text-md md:text-lg mb-4">
                      \"{testimonial.content}\"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900 text-md">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <p className="text-center text-gray-600">No testimonials available yet.</p>
        )}

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Trusted by Companies Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16 opacity-75">
            {trustedLogos.map(logo => (
              <div key={logo.id} title={logo.name} className="w-auto h-8 flex items-center justify-center">
                {logo.component}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;