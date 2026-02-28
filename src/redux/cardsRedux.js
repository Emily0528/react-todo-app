import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = (state, columnId) =>
  state.cards.filter(card =>
    card.columnId === columnId &&
    strContains(card.title, state.searchString)
  );
export const getAllCards = ({ cards }) => cards;

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');


export const addCard = payload => ({
  type: 'ADD_CARD',
  payload
});

export const toggleFavoriteCard = cardId => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: cardId
});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

export default cardsReducer;