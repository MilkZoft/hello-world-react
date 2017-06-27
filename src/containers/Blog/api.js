// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../../lib/utils/api';

class BlogApi {
  static getAllPosts(query) {
    return apiFetch(API.BLOG.POSTS, {}, query);
  }

  static getSinglePost(query) {
    return apiFetch(API.BLOG.POST, {}, query);
  }
}

export default BlogApi;
