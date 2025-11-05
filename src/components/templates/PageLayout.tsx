import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle, className = '' }) => {
  return (
    <div className={`pt-24 pb-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-aa-primary-dark mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;