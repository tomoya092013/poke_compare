import { Poke } from '../type/poke';
import { SET_RIGHT_POKE } from './types';

export const setRightPoke = (comparePoke: Poke) => {
  return {
    type: SET_RIGHT_POKE,
    payload: comparePoke,
  };
};
