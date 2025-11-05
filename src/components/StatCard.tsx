import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{number}</div>
      <div className="text-sm aa-primary font-medium">{label}</div>
    </div>
  );
};

export default StatCard;