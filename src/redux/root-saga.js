import { call, all } from 'redux-saga/effects';
import { gameSagas } from './game/game.sagas';

export default function* rootSaga() {
  yield all([
    call(gameSagas)
  ]);
}
