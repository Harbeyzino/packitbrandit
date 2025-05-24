import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 pt-0 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 pt-0 flex items-center ${className}`}>
      {children}
    </div>
  );
};

export const CardImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto object-cover ${className}`}
      />
    </div>
  );
};

export default Card;