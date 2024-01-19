import { GenerationNo, Poke } from './poke';

export type RootState = {
  pokeGenerationNo: GenerationNo;
  leftPokeData: Poke;
  rightPokeData: Poke;
  isLeftSide: boolean;
};
