import { SET_LEFT_POKE } from '../actions/types';
import { Poke } from '../type/poke';

type Action = {
  type: typeof SET_LEFT_POKE;
  payload: Poke;
};

const initialState = {
  id: 0,
  name: undefined,
  speciesUrl: undefined,
  img: '',
  types: [],
  hp: 0,
  attack: 0,
  defence: 0,
  specialAttack: 0,
  specialDefence: 0,
  speed: 0,
};

const leftPokeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_LEFT_POKE:
      return action.payload;
    default:
      return state;
  }
};

export default leftPokeReducer;
