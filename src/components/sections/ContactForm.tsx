import React from 'react';
import Container from '../ui/Container';
import { Form, Input, Select, Textarea } from '../ui/Form';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  formType?: 'contact' | 'quote' | 'expert';
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = 'Get in Touch',
  subtitle = 'Have questions about our packaging solutions? Fill out the form below and our team will get back to you shortly.',
  formType = 'contact',
  className = '',
}) => {
  const getFormTitle = () => {
    switch (formType) {
      case 'quote':
        return 'Request a Quote';
      case 'expert':
        return 'Speak with an Expert';
      default:
        return title;
    }
  };

  const getFormSubtitle = () => {
    switch (formType) {
      case 'quote':
        return "Tell us about your packaging needs and we'll provide you with a customized quote.";
      case 'expert':
        return 'Schedule a consultation with our packaging specialists to discuss your specific requirements.';
      default:
        return subtitle;
    }
  };

  const getButtonText = () => {
    switch (formType) {
      case 'quote':
        return 'Request Quote';
      case 'expert':
        return 'Schedule Consultation';
      default:
        return 'Send Message';
    }
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{getFormTitle()}</h2>
            <p className="text-lg text-gray-600">{getFormSubtitle()}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Form 
              buttonText={getButtonText()}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted! We will contact you shortly.');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  label="First Name" 
                  name="firstName" 
                  required 
                />
                <Input 
                  label="Last Name" 
                  name="lastName" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  label="Email" 
                  name="email" 
                  type="email" 
                  required 
                />
                <Input 
                  label="Phone" 
                  name="phone" 
                  type="tel" 
                />
              </div>

              {formType === 'quote' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Product Type"
                      name="productType"
                      options={[
                        { value: 'custom', label: 'Custom Packaging' },
                        { value: 'retail', label: 'Retail Packaging' },
                        { value: 'shipping', label: 'Shipping Containers' },
                        { value: 'sustainable', label: 'Sustainable Packaging' },
                      ]}
                      required
                    />
                    <Input 
                      label="Estimated Quantity" 
                      name="quantity" 
                      type="number" 
                      required 
                    />
                  </div>
                </>
              )}

              {formType === 'expert' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Industry"
                    name="industry"
                    options={[
                      { value: 'food', label: 'Food & Beverage' },
                      { value: 'retail', label: 'Retail' },
                      { value: 'ecommerce', label: 'E-commerce' },
                      { value: 'healthcare', label: 'Healthcare' },
                      { value: 'other', label: 'Other' },
                    ]}
                  />
                  <Select
                    label="Preferred Contact Method"
                    name="contactMethod"
                    options={[
                      { value: 'email', label: 'Email' },
                      { value: 'phone', label: 'Phone' },
                    ]}
                  />
                </div>
              )}

              <Textarea 
                label="Message" 
                name="message" 
                placeholder="Tell us about your packaging needs..." 
                required 
                rows={5}
              />
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;