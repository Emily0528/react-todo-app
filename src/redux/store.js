import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import { addList, addColumn, addCard, updateSearchString } from '../redux/actions';

export const getFilteredCards = (state, columnId) =>
  state.cards.filter(card =>
    card.columnId === columnId &&
    strContains(card.title, state.searchString)
  );
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter(column => column.listId === listId);
export const getAllCards = ({ cards }) => cards;
export const getAllLists = state => state.lists;
export const getAllColumns = state => state.columns;
export const toggleCardFavorite = payload => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});


const reducer = (state, action) => {
  switch(action.type) {

    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists, 
          { 
            ...action.payload, 
            id: shortid() }] 
      };

    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            ...action.payload,
            id: shortid(),
            listId: action.payload.listId, 
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
            id: shortid(),
            listId: action.payload.listId,
            isFavorite: false,
          }
        ]
      };
      case 'SET_SEARCH':
      return {
        ...state,
        searchString: action.payload
      };
      case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map(card =>
        card.id === action.payload
        ? { ...card, isFavorite: !card.isFavorite }
        : card
        ),
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