import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div 
      className={`preloader-overlay ${isLoading ? 'visible' : 'hidden'}`}
    >
      <div className="snake-loader">
        <span className="snake-loader-dot"></span>
        <span className="snake-loader-dot"></span>
        <span className="snake-loader-dot"></span>
        <span className="snake-loader-dot"></span>
        <span className="snake-loader-dot"></span>
      </div>
    </div>
  );
};

export default Preloader; 