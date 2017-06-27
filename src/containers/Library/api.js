// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class LibraryApi {
  static getAllBooks(query) {
    return apiFetch(API.LIBRARY.BOOKS, {}, query);
  }

  static getSingleBook(query) {
    return apiFetch(API.LIBRARY.BOOK, {}, query);
  }
}

export default LibraryApi;
