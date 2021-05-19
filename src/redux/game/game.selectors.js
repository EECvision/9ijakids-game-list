import { createSelector } from 'reselect';

const selectGame = state => state.game;

export const selectGameList = createSelector(
  [selectGame],
  game => game.list
);

export const selectSearchValue = createSelector(
  [selectGame],
  game => game.searchValue
);

export const selectFilterValue = createSelector(
  [selectGame],
  game => game.filterValue
);

export const selectToggleFilter = createSelector(
  [selectGame],
  game => game.toggleFilter
);