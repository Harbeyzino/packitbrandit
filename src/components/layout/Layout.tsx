import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import Preloader from '../ui/Preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust timing as needed, e.g., 1500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Header onHeightChange={setHeaderHeight} />
          <main className="flex-grow" style={{ paddingTop: `${headerHeight}px` }}>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
};

export default Layout;