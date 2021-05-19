import gameActionTypes from './game.types'

export const fetchGamesStart = () => ({
  type: gameActionTypes.FETCH_GAMES_START,
})

export const fetchGamesSuccess = gameList => ({
  type: gameActionTypes.FETCH_GAMES_SUCCESS,
  payload: gameList
})

export const fetchGamesFailure = error => ({
  type: gameActionTypes.FETCH_GAMES_FAILURE,
  payload: error
})

export const setSearchValue = value => ({
  type: gameActionTypes.SET_SEARCH_VALUE,
  payload: value
})

export const setFilterValue = value => ({
  type: gameActionTypes.SET_FILTER_VALUE,
  payload: value
})

export const toggleFilter = value => ({
  type: gameActionTypes.TOGGLE_FILTER,
  payload: value
})