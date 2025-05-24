import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Form, Input, Select, Textarea } from './Form';
import Button from './Button';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ isOpen, onClose }) => {
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

  const steps = [
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
      alert('Quote request submitted! We will contact you shortly.');
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
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request a Quote</h2>

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
    </div>
  );
};

export default QuotePopup;