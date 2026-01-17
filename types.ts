
export interface Person {
  id: string;
  name: string;
  headshot: string;
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
