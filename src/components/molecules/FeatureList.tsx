import React from 'react';

interface FeatureListProps {
  features: string[];
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ features, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="w-2 h-2 bg-aa-cyan rounded-full mr-3"></div>
          <span className="text-sm text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;