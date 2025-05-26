import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import { PRODUCTS } from '../../utils/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    }),
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto pt-16">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={PRODUCTS[currentIndex].imageUrl}
                    alt={PRODUCTS[currentIndex].name}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{PRODUCTS[currentIndex].name}</h3>
                <p className="text-blue-100">{PRODUCTS[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="max-w-3xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 animate-fadeIn animation-delay-200">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;