// API
import libraryApi from './api';

// Actions
const LIBRARY_LIST_BOOKS = 'LIBRARY_LIST_BOOKS';
const LIBRARY_SHOW_SINGLE_BOOK = 'LIBRARY_SHOW_SINGLE_BOOK';

export function loadBooks() {
  return {
    type: LIBRARY_LIST_BOOKS,
    payload: libraryApi.getAllBooks()
  };
}

export function loadSingleBook(query) {
  return {
    type: LIBRARY_SHOW_SINGLE_BOOK,
    payload: libraryApi.getSingleBook(query)
  };
}
