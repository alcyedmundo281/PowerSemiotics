
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProbabilityFundamentals from './components/ProbabilityFundamentals';
import AsideContent from './components/AsideContent';
import TranslationTable from './components/TranslationTable';
import MiniCase from './components/MiniCase';
import LearningPaths from './components/LearningPaths';
import Footer from './components/Footer';
import GeminiTutor from './components/GeminiTutor';
import InteractiveFormulaLab from './components/InteractiveFormulaLab';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-6 py-12 lg:py-16">
        <HeroSection />

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <ProbabilityFundamentals />
            <InteractiveFormulaLab />
          </div>
          <aside className="space-y-8">
            <AsideContent />
          </aside>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <TranslationTable />
          <MiniCase />
        </section>

        <section className="mt-12">
          <LearningPaths />
        </section>
      </main>
      <Footer />
      <GeminiTutor />
    </div>
  );
};

export default App;
