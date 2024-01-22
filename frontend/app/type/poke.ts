export type Poke = {
  id: number;
  name?: string;
  flavorText?: string;
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

export type PokeFlavorTextEntry = {
  language: {
    name: string;
  };
  version: {
    name: string;
  };
};

export type PokeJaData = {
  name: string;
  flavorText?: string;
};
