import React, { useState } from 'react';
import Container from '../ui/Container';
import { Form, Input, Select, Textarea } from '../ui/Form';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  formType?: 'contact' | 'quote' | 'expert';
  className?: string;
}

interface FormStep {
  title: string;
  fields: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = 'Get in Touch',
  subtitle = "Have questions about our packaging solutions? Fill out the form below and our team will get back to you shortly.",
  formType = 'contact',
  className = '',
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    timeline: '',
    message: '',
  });

  const steps: FormStep[] = [
    {
      title: 'Basic Information',
      fields: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <Input
              label="Last Name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <Input
            label="Company Name"
            name="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      ),
    },
    {
      title: 'Project Details',
      fields: (
        <div className="space-y-4">
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
            value={formData.productType}
            onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
          />
          <Input
            label="Estimated Quantity"
            name="quantity"
            type="number"
            required
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
          <Select
            label="Timeline"
            name="timeline"
            options={[
              { value: 'immediate', label: 'Immediate Need' },
              { value: '1month', label: 'Within 1 Month' },
              { value: '3months', label: '1-3 Months' },
              { value: 'future', label: 'Future Project' },
            ]}
            required
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          />
        </div>
      ),
    },
    {
      title: 'Additional Information',
      fields: (
        <div className="space-y-4">
          <Textarea
            label="Project Description"
            name="message"
            placeholder="Tell us about your packaging needs..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Form submitted! We will contact you shortly.');
      setCurrentStep(0);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        productType: '',
        quantity: '',
        timeline: '',
        message: '',
      });
    }
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{subtitle}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center ${
                      index === currentStep
                        ? 'text-blue-600 font-semibold'
                        : index < currentStep
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>

            <Form
              buttonText={currentStep === steps.length - 1 ? 'Submit Request' : 'Next Step'}
              onSubmit={handleSubmit}
            >
              {steps[currentStep].fields}
              
              {currentStep > 0 && (
                <button
                  type="button"
                  className="mt-4 text-blue-500 hover:text-blue-600"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  ← Back to Previous Step
                </button>
              )}
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;