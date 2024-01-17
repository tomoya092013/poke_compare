export type Poke = {
  id: number;
  name?: string;
  img: string;
  types: string[];
  speciesUrl: string;
  hp: number;
  attack: number;
  defence: number;
  specialAttack: number;
  specialDefence: number;
  speed: number;
};

export type PokeNo = {
  start: number;
  end: number;
};

export type PokeUrl = {
  name: string;
  url: string;
};
