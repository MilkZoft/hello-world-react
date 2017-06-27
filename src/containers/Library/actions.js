// Actions Types
import * as types from '../../actions/actionTypes';

// Api
import libraryApi from './api';

export function loadBooks() {
  return {
    type: types.LIBRARY_LIST_BOOKS,
    payload: libraryApi.getAllBooks()
  };
}

export function loadSingleBook(query) {
  return {
    type: types.LIBRARY_SHOW_SINGLE_BOOK,
    payload: libraryApi.getSingleBook(query)
  };
}
