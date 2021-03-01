import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('reducer actions', () => {
  it('requestPokemon should create REQUEST_POKEMON action', () => {
    expect(actions.requestPokemon()).toEqual({
      type: c.REQUEST_POKEMON
    });
  });
  it('getPokemonSuccess should create GET_POKEMON_SUCCESS action', () => {
    const pokemon = ["Pikachu"];
    expect(actions.getPokemonSuccess(pokemon)).toEqual({
      type: c.GET_POKEMON_SUCCESS,
      pokemon
    });
  });
  it('getPokemonFail should create GET_POKEMON_FAILURE action', () => {
    const error = "an error";
    expect(actions.getPokemonFail(error)).toEqual({
      type: c.GET_POKEMON_FAIL,
      error
    });
  });
})