export const addList = payload => ({ type: 'ADD_LIST', payload });

export const addColumn = payload => ({
  type: 'ADD_COLUMN',
  payload
});

export const addCard = payload => ({
  type: 'ADD_CARD',
  payload
});

export const updateSearchString = payload => ({
  type: 'SET_SEARCH',
  payload
});

export const toggleFavoriteCard = cardId => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: cardId
});