
import React from 'react';
import { Person } from '../types';

interface PersonCardProps {
  person: Person;
  onClick: () => void;
  index: number;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, onClick, index }) => {
  // First card is light yellow, second card is now light orange
  const bgColors = ['bg-[#FEF9C3]', 'bg-[#FFEDD5]']; 
  const bgColor = bgColors[index % bgColors.length];

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-5 p-5 rounded-[2.5rem] border-4 border-[#4F2C1D] custom-shadow ${bgColor} active-press transition-all duration-150 relative overflow-hidden text-left`}
    >
      {/* Decorative background paw */}
      <div className="absolute -right-2 -bottom-2 opacity-10 rotate-12 text-[#4F2C1D]">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="25" />
            <circle cx="25" cy="25" r="10" />
            <circle cx="50" cy="15" r="10" />
            <circle cx="75" cy="25" r="10" />
        </svg>
      </div>

      <div className="relative flex-shrink-0">
        <img 
          src={person.headshot} 
          alt={person.name} 
          className="relative w-20 h-20 rounded-full border-4 border-[#4F2C1D] object-cover shadow-sm"
        />
      </div>

      <div className="flex flex-col items-start z-10 pr-4">
        <h3 className="text-3xl font-bold text-[#4F2C1D] leading-none mb-1">{person.name}</h3>
        <p className="text-[#4F2C1D]/80 font-medium text-xs leading-tight mb-2 italic">
          {person.spiritAnimal}
        </p>
        <span className="text-[10px] uppercase tracking-widest font-black bg-white/40 px-3 py-1 rounded-full text-[#4F2C1D] border border-[#4F2C1D]/10">
          Get my Contact 🐾
        </span>
      </div>
    </button>
  );
};

export default PersonCard;
