
import { Person } from './types';
import React from 'react';

export const PEOPLE: Person[] = [
  {
    id: '1',
    name: 'Amin',
    headshot: 'https://scontent-bos5-1.cdninstagram.com/v/t51.2885-19/454492950_1217273556356452_1648005730430181871_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-bos5-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QEqNOjDs7P-eG4GaqxTrHVD4NFDchf1EQzT-NMmO61jpWGkURqQfHNZnfWDBdDFpgU&_nc_ohc=wtjXSqSWSA8Q7kNvwHAW2-O&_nc_gid=DYdnazCBzdZjrDci2gOJcA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfpPIwfw5r5tUEO3NaFgJP9ivaSCAWB8Ylx3WDKzaO-DcQ&oe=69717227&_nc_sid=7a9f4b',
    instagram: '@ameendi',
    linkedin: 'linkedin.com/in/dameen',
    email: 'amin@hello.com',
    spiritAnimal: 'basically a loyal Golden Retriever who loves sunbeams and long walks',
    funFact: 'Once tried to high-five a cat and got left hanging.'
  },
  {
    id: '2',
    name: 'Pascal',
    headshot: 'https://scontent-bos5-1.cdninstagram.com/v/t51.2885-19/580941486_18535387837021309_8632684023771258924_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-bos5-1.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QGlqK772f0eRbL4euSbMcwRFMzPSldkDEZRaboHOnxvX1FgF5AGezDsfeYmAtjmRTo&_nc_ohc=6b-c4mxgIwMQ7kNvwEgpqGt&_nc_gid=-zha-VCg-dYWl3DnmDSjYQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfquuLxatUCM97QOIzbz6fKfqBt4GEoRw_vI7CeCwLcjvQ&oe=6971791E&_nc_sid=7a9f4b',
    instagram: '@pascalfinnkrebs',
    linkedin: 'linkedin.com/in/pascal-finn-krebs',
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
