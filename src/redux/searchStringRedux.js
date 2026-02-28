
export const getSearchString = ({ searchString }) => searchString;

const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCH_STRING = createActionName('UPDATE_SEARCH_STRING');

export const updateSearchString = payload => ({
  type: 'SET_SEARCH',
  payload
});

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  };
};

export default searchStringReducer;