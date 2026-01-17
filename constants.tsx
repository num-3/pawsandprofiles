
import { Person } from './types';
import React from 'react';

export const PEOPLE: Person[] = [
  {
    id: '1',
    name: 'Amin',
    role: 'Chief Romantic Officer',
    headshot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    phone: '+1 (555) 012-3456',
    instagram: '@amin_vibes',
    linkedin: 'linkedin.com/in/amin-date',
    email: 'amin@hello.com',
    spiritAnimal: 'basically a loyal Golden Retriever who loves sunbeams and long walks',
    funFact: 'Once tried to high-five a cat and got left hanging.'
  },
  {
    id: '2',
    name: 'Pascal',
    role: 'Professional Sunset Chaser',
    headshot: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    phone: '+1 (555) 987-6543',
    instagram: '@pascal_adventures',
    linkedin: 'linkedin.com/in/pascal-hello',
    email: 'pascal@world.com',
    spiritAnimal: 'basically a mischievous Dachshund who thinks he is a giant Doberman',
    funFact: 'Believes socks are just feet blankets.'
  }
];

export const DOG_LOGO_SVG = (
  <svg viewBox="0 0 200 200" className="w-24 h-24 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="#FEF08A" />
    <path d="M50 80 Q 40 40 80 50" fill="none" stroke="#4F2C1D" strokeWidth="8" strokeLinecap="round" />
    <path d="M150 80 Q 160 40 120 50" fill="none" stroke="#4F2C1D" strokeWidth="8" strokeLinecap="round" />
    <circle cx="75" cy="90" r="10" fill="#4F2C1D" />
    <circle cx="125" cy="90" r="10" fill="#4F2C1D" />
    <path d="M85 130 Q 100 150 115 130" fill="none" stroke="#60A5FA" strokeWidth="8" strokeLinecap="round" />
    <path d="M95 115 Q 100 125 105 115" fill="#4F2C1D" />
  </svg>
);
