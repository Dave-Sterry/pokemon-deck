import * as c from './ActionTypes'

export const requestPokemon = () => ({
  type: c.REQUEST_POKEMON
})

export const getPokemonSuccess = (pokemon) => ({
  type: c.GET_POKEMON_SUCCESS,
  pokemon
})

export const getPokemonFail = (error) => ({
  type: c.GET_POKEMON_FAIL,
  error
})