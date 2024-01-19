import { CHANGE_CARD_SIDE } from '../actions/types';

type Action = {
  type: typeof CHANGE_CARD_SIDE;
  payload: boolean;
};

const initialState = {
  isLeftSide: true,
};

const changeCardSideReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_CARD_SIDE:
      return !state;
    default:
      return state;
  }
};

export default changeCardSideReducer;
