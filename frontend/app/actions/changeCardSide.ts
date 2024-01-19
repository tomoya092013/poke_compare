import { Poke } from '../type/poke';
import { CHANGE_CARD_SIDE } from './types';

export const changeCardSide = () => {
  return {
    type: CHANGE_CARD_SIDE,
  };
};
