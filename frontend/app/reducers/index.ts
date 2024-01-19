import { combineReducers } from 'redux';

import changeCardSideReducer from './changeCardSideReducer';
import leftPokeReducer from './leftPokeReducer';
import pokeGenerationReducer from './pokeGenerationReducer';
import rightPokeReducer from './rightPokeReducer';

const rootReducer = combineReducers({
  pokeGenerationNo: pokeGenerationReducer,
  leftPokeData: leftPokeReducer,
  rightPokeData: rightPokeReducer,
  isLeftSide: changeCardSideReducer,
});

export default rootReducer;
