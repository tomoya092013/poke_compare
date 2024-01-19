import { SET_POKE_GENERATION_NO } from '../actions/types';

type Action = {
  type: typeof SET_POKE_GENERATION_NO;
  payload: {
    start: number;
    end: number;
  };
};

const initialState = {
  start: 0,
  end: 151,
};

const pokeGenerationNoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_POKE_GENERATION_NO:
      return action.payload;
    default:
      return state;
  }
};

export default pokeGenerationNoReducer;
