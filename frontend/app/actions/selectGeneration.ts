import { SET_POKE_GENERATION_NO } from './types';

type PokeRange = {
  start: number;
  end: number;
};

export const setPokeGenerationNo = (newRange: PokeRange) => {
  return {
    type: SET_POKE_GENERATION_NO,
    payload: newRange,
  };
};
