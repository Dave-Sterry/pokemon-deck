import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  pokemon: [],
  error: null
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case c.REQUEST_POKEMON:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: action.pokemon
      });
    case c.GET_POKEMON_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};