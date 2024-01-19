export type Poke = {
  id: number;
  name?: string;
  img: string;
  types: string[];
  speciesUrl?: string;
  hp: number;
  attack: number;
  defence: number;
  specialAttack: number;
  specialDefence: number;
  speed: number;
};

export type GenerationNo = {
  start: number;
  end: number;
};

export type Generation = {
  title: string;
  generationNo: GenerationNo;
};

export type PokeUrl = {
  name: string;
  url: string;
};

// export type ComparePoke = {
//   id: number;
//   name?: string;
//   img: string;
//   types: string[];
//   hp: number;
//   attack: number;
//   defence: number;
//   specialAttack: number;
//   specialDefence: number;
//   speed: number;
// };
