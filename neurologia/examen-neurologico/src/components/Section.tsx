import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 lg:p-12 space-y-8">
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-500">{subtitle}</p>
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    </div>
    {children}
  </section>
);

export default Section;