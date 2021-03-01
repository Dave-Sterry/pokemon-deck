import reducer from './../../reducers/reducer'
import * as c from './../../actions/ActionTypes'

describe('reducer', () => {
  let action;
  const defaultState = {
    isLoading: false,
    pokemon: [],
    error: null
  };
  const loadingState = {
    isLoading: true,
    pokemon: [],
    error: null
  };

  it('return default state when no action type is specified', () => {
    expect(reducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        pokemon: [],
        error: null
      });
  })

  it('should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_POKEMON
    }
    expect(reducer(defaultState, action)).toEqual({
      isLoading: true,
      pokemon: [],
      error: null
    });
  });

  it('should successfully get a pokemon, change isLoading to false and update pokemon', () => {
    const pokemon = ["Pikachu"];
    action = {
      type: c.GET_POKEMON_SUCCESS,
      pokemon
    };

    expect(reducer(loadingState, action)).toEqual({
      isLoading: false,
      pokemon: ["Pikachu"],
      error: null
    })
  })

  it('should successfully get a pokemon, change isLoading to false and update error', () => {
    const error = "this is an error";
    action = {
      type: c.GET_POKEMON_FAIL,
      error
    }
    expect(reducer(loadingState, action)).toEqual({
      isLoading: false,
      pokemon: [],
      error: 'this is an error'
    })
  })
})