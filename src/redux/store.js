import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
//selectors
export const getFilteredCards = (state, columnId) =>
  state.cards.filter(card =>
    card.columnId === columnId &&
    strContains(card.title, state.searchString)
  );
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getAllLists = state => state.lists;
export const getAllColumns = state => state.columns;
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

const reducer = (state, action) => {
  switch(action.type) {

    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            ...action.payload,
            id: shortid()
          }
        ]
      };
      case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.payload,
            id: shortid()
          }
        ]
      };
      case 'SET_SEARCH':
      return {
        ...state,
        searchString: action.payload
      };

    default:
    return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;