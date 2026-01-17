
import React, { useState } from 'react';
import { PEOPLE, DOG_LOGO_SVG } from './constants';
import { Person } from './types';
import PersonCard from './components/PersonCard';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedPersonIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPersonIndex(null);
  };

  const selectedPerson = selectedPersonIndex !== null ? PEOPLE[selectedPersonIndex] : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FFFDF9] to-[#FEF3C7] relative overflow-hidden">
      {/* Warm background accent blobs */}
      <div className="absolute top-[-5%] left-[-15%] w-64 h-64 bg-yellow-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[15%] right-[-20%] w-80 h-80 bg-orange-50/20 rounded-full blur-3xl -z-10"></div>

      <div className="min-h-screen flex flex-col items-center px-6 py-10 max-w-md mx-auto relative">
        <header className="flex flex-col items-center mb-12 text-center">
          <div className="drop-shadow-md">
            {DOG_LOGO_SVG}
          </div>
          <p className="text-[#4F2C1D]/60 font-bold text-base mt-2 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full border-2 border-[#4F2C1D]/5">
            Say hi to my favorite humans! 🐾
          </p>
        </header>

        <main className="w-full space-y-6">
          {PEOPLE.map((person, index) => (
            <div
              key={person.id}
              className="animate-in slide-in-from-bottom-8 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PersonCard
                person={person}
                index={index}
                onClick={() => handleOpenModal(index)}
              />
            </div>
          ))}
        </main>

        <footer className="mt-auto pt-16 pb-4">
          <div className="flex items-center gap-2 text-[#4F2C1D]/30 font-bold text-[10px] uppercase tracking-[0.2em]">
            <span>Made with ❤️ & Puppy Power 🐶</span>
          </div>
        </footer>
      </div>

      {/* Conditional Modal */}
      {selectedPersonIndex !== null && selectedPerson && (
        <ContactModal
          person={selectedPerson}
          index={selectedPersonIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
