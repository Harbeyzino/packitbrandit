import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';
import { NAV_ITEMS } from '../../utils/constants';
import { Form, Input } from '../ui/Form';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dabi Packaging Ltd</h3>
            <p className="text-gray-400 mb-4">Let's Build A Brand Together!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Packaging Lane</p>
              <p className="mb-2">Business District</p>
              <p className="mb-2">Toronto, ON M5V 2H1</p>
              <p className="mb-2">Email: info@dabipackaging.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <Form 
              buttonText="Subscribe"
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
            >
              <Input
                label=""
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />
            </Form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dabi Packaging Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;