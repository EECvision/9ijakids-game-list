import gameActionTypes from './game.types';
import { GAME_LIST } from './RAW_GAME_DATA';

const INITIAL_STATE = {
  list: GAME_LIST,
  searchValue: '',
  filterValue: '',
  toggleFilter: false,
  isFetching: false,
  error: null
}

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gameActionTypes.FETCH_GAMES_START:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case gameActionTypes.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      }
    case gameActionTypes.FETCH_GAMES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case gameActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case gameActionTypes.SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload
      }
    case gameActionTypes.TOGGLE_FILTER:
      return {
        ...state,
        toggleFilter: action.payload
      }
    default:
      return state;
  }
}