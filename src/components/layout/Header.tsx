import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { NAV_ITEMS } from '../../utils/constants';
import Button from '../ui/Button';
import QuotePopup from '../ui/QuotePopup';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
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
                className={`p-2 rounded-md ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
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