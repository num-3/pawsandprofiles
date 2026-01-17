
export interface Person {
  id: string;
  name: string;
  role: string;
  headshot: string;
  phone: string;
  instagram: string;
  linkedin: string;
  email: string;
  spiritAnimal: string;
  funFact: string;
}

export enum ModalState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN'
}
