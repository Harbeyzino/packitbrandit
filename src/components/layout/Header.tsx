import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { NAV_ITEMS } from '../../utils/constants';
import Button from '../ui/Button';
import QuotePopup from '../ui/QuotePopup';
import logo from '../../assets/logo.png';

interface HeaderProps {
  onHeightChange: (height: number) => void;
}

const Header: React.FC<HeaderProps> = ({ onHeightChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const updateHeight = () => {
      if (headerRef.current) {
        onHeightChange(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call updateHeight initially and on scroll or when isOpen changes (for mobile menu)
    updateHeight(); 
    window.addEventListener('resize', updateHeight); // Also update on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, [onHeightChange, isOpen]); // Add isOpen to dependencies

  // Update height when isScrolled changes, as this can change padding/height
  useEffect(() => {
    if (headerRef.current) {
      onHeightChange(headerRef.current.offsetHeight);
    }
  }, [isScrolled, onHeightChange]);

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Dabi Packaging Ltd Logo" 
                  className="h-16 w-auto"
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {item.title}
                </a>
              ))}
              <Button 
                variant="primary" 
                size="sm" 
                className="ml-4"
                onClick={() => setShowQuotePopup(true)}
              >
                Request Quote
              </Button>
            </nav>

            <div className="md:hidden flex items-center">
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={() => setShowQuotePopup(true)}
              >
                Get Started
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none ${
                  isScrolled ? 'text-gray-700 hover:text-gray-600' : 'text-gray-800 hover:text-gray-700'
                } transition-colors duration-150`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6"> {/* Container for icons, w-6 h-6 corresponds to size 24 */}
                  {/* Menu Icon */}
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform ${
                      isOpen 
                        ? 'rotate-90 opacity-0 scale-75' // Rotates out, fades, shrinks
                        : 'rotate-0 opacity-100 scale-100' // Normal state
                    }`}
                    aria-hidden="true"
                  >
                    <Menu size={24} />
                  </span>
                  {/* X Icon */}
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform ${
                      isOpen 
                        ? 'rotate-0 opacity-100 scale-100' // Normal state when open
                        : '-rotate-90 opacity-0 scale-75' // Rotates in from other direction, fades in, grows
                    }`}
                    aria-hidden="true"
                  >
                    <X size={24} />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </Container>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <Container>
              <nav className="py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <Button 
                  variant="primary" 
                  className="w-full mt-4"
                  onClick={() => {
                    setShowQuotePopup(true);
                    setIsOpen(false);
                  }}
                >
                  Request Quote
                </Button>
              </nav>
            </Container>
          </div>
        )}
      </header>

      <QuotePopup 
        isOpen={showQuotePopup} 
        onClose={() => setShowQuotePopup(false)} 
      />
    </>
  );
};

export default Header;