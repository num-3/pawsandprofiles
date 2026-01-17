
import { Person } from './types';
import React from 'react';

export const PEOPLE: Person[] = [
  {
    id: '1',
    name: 'Amin',
    headshot: '/headshots/ameenHeadshot.jpg',
    instagram: '@ameendi',
    linkedin: 'linkedin.com/in/dameen',
    email: 'amin@hello.com',
    spiritAnimal: 'basically a loyal Golden Retriever who loves sunbeams and long walks',
    funFact: 'Once tried to high-five a cat and got left hanging.'
  },
  {
    id: '2',
    name: 'Pascal',
    headshot: '/headshots/pfkHeadshot.jpg',
    instagram: '@pascalfinnkrebs',
    linkedin: 'linkedin.com/in/pascal-finn-krebs',
    email: 'pascal@world.com',
    spiritAnimal: 'basically a mischievous Dachshund who thinks he is a giant Doberman',
    funFact: 'Believes socks are just feet blankets.'
  }
];

export const DOG_LOGO_SVG = (
  <img
    src="/headshots/Enzo-Sticker.png"
    alt="Dog Logo"
    className="w-24 h-24 drop-shadow-lg"
  />
);
