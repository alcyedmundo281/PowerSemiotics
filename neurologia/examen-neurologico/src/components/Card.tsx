import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
    <div className="mt-6">
      {children}
    </div>
  </div>
);

export default Card;