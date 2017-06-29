// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  books: [],
  book: []
};

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIBRARY_LIST_BOOKS_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        books: response
      });
    }

    case 'LIBRARY_SHOW_SINGLE_BOOK_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        book: response
      });
    }

    default:
      return state;
  }
}
