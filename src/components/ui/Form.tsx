import React from 'react';
import Button from './Button';

interface FormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({
  title,
  description,
  buttonText = 'Submit',
  children,
  className = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="space-y-4">
        {children}
      </div>
      <Button type="submit" variant="primary" className="w-full">
        {buttonText}
      </Button>
    </form>
  );
};

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  required = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder = '',
  required = false,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  required = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};