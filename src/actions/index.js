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

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestPokemon);
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then((jsonResponse) => dispatch(getPokemonSuccess(jsonResponse)))
      .catch(error => {
        dispatch(getPokemonFail(error))
      })
  }
};

// export const makeApiCall = () => {
//   return dispatch => {
//     dispatch(requestHeadlines);
//     return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getHeadlinesSuccess(jsonifiedResponse.results));
//         })
//       .catch((error) => {
//         dispatch(getHeadlinesFailure(error));
//       });
//   }
// }