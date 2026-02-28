import { createStore, combineReducers } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';
import { strContains } from '../utils/strContains';

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

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;