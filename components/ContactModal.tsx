
import React from 'react';
import { Person } from '../types';

interface ContactModalProps {
  person: Person | null;
  onClose: () => void;
  index: number;
}

const ContactModal: React.FC<ContactModalProps> = ({ person, onClose, index }) => {
  // Updated fact backgrounds to match the yellow/orange card theme
  const factBgColors = ['bg-[#FFFBEB]', 'bg-[#FFF7ED]'];
  const factBgColor = factBgColors[index % factBgColors.length];

  if (!person) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#4F2C1D]/70 backdrop-blur-sm transition-all animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFCF5] rounded-[3rem] w-full max-w-sm overflow-hidden border-4 border-[#4F2C1D] shadow-[0_12px_0px_0px_rgba(0,0,0,0.2)] transform transition-all animate-in zoom-in-95 duration-200 flex flex-col items-center p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-4xl font-bold text-[#4F2C1D]/20 hover:text-[#4F2C1D] active:scale-90 transition-transform"
        >
          ×
        </button>

        <div className="relative mb-6">
          <img
            src={person.headshot}
            alt={person.name}
            className="relative w-32 h-32 rounded-full border-4 border-[#4F2C1D] object-cover shadow-lg"
          />
        </div>

        <h2 className="text-5xl font-bold text-[#4F2C1D] mb-1">{person.name}</h2>
        <p className="text-[#4F2C1D]/60 font-medium text-xs text-center mb-4 italic max-w-[200px]">
          {person.spiritAnimal}
        </p>

        <div className={`${factBgColor} p-5 rounded-3xl mb-8 w-full border-4 border-dotted border-[#4F2C1D]/10`}>
          <p className="text-center italic text-[#4F2C1D] font-medium leading-relaxed text-sm">
            "{person.funFact}"
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <a
            href={`tel:${person.phone}`}
            className="flex items-center gap-4 bg-[#FEF9C3] border-2 border-[#4F2C1D] active-press p-4 rounded-2xl text-[#4F2C1D] font-bold shadow-[0_4px_0px_0px_rgba(79,44,29,1)] transition-transform duration-75"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-base">{person.phone}</span>
          </a>

          <a
            href={`https://instagram.com/${person.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#FFEDD5] border-2 border-[#4F2C1D] active-press p-4 rounded-2xl text-[#4F2C1D] font-bold shadow-[0_4px_0px_0px_rgba(79,44,29,1)] transition-transform duration-75"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-base">Instagram</span>
          </a>

          <a
            href={`https://${person.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border-2 border-[#4F2C1D] active-press p-4 rounded-2xl text-[#4F2C1D] font-bold shadow-[0_4px_0px_0px_rgba(79,44,29,1)] transition-transform duration-75"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-base">LinkedIn</span>
          </a>

          <a
            href={`mailto:${person.email}`}
            className="flex items-center justify-center p-2 text-[#4F2C1D]/40 text-xs font-bold hover:text-[#4F2C1D] active:scale-95 transition-all mt-2"
          >
            {person.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
