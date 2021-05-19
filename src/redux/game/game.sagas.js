import { takeLatest, call, put, all } from 'redux-saga/effects';
import gameActionTypes from './game.types';
import { getGamesList } from './games.utils';
import {
  fetchGamesSuccess,
  fetchGamesFailure
} from './game.actions';

export function* fetchGames() {
  try {
    const gamesList = yield getGamesList();
    yield put(fetchGamesSuccess(gamesList))
  } catch (error) {
    yield put(fetchGamesFailure(error.message))
  }
}

export function* onFetchGamesStart() {
  yield takeLatest(gameActionTypes.FETCH_GAMES_START, fetchGames)
}

export function* gameSagas() {
  yield all([
    call(onFetchGamesStart)
  ])
}