import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { DillonNavigation } from './components/DillonNavigation';
import { DillonHero } from './components/DillonHero';
import { DillonAbout } from './components/DillonAbout';
import { DillonServices } from './components/DillonServices';
import { DillonWork } from './components/DillonWork';
import { DillonJourney } from './components/DillonJourney';
import { DillonContact } from './components/DillonContact';
import { DillonFooter } from './components/DillonFooter';
import { Language } from './utils/translations';
import { Toaster } from 'sonner@2.0.3';

function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <DillonNavigation />
      <main>
        <DillonHero />
        <DillonAbout />
        <DillonWork />
        <DillonJourney />
        <DillonServices />
        <DillonContact />
      </main>
      <DillonFooter />
    </div>
  );
}

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  if (!selectedLanguage) {
    return <LanguageSelector onLanguageSelect={setSelectedLanguage} />;
  }

  return (
    <LanguageProvider initialLanguage={selectedLanguage}>
      <Portfolio />
      <Toaster position="bottom-right" richColors />
    </LanguageProvider>
  );
}
