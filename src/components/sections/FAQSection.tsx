import React, { useState } from 'react';
import Container from '../ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../../utils/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our packaging solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">Don't see your question here?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600 focus:shadow-outline focus:outline-none"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;