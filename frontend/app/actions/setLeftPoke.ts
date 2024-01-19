import { Poke } from '../type/poke';
import { SET_LEFT_POKE } from './types';

export const setLeftPoke = (comparePoke: Poke) => {
  return {
    type: SET_LEFT_POKE,
    payload: comparePoke,
  };
};
