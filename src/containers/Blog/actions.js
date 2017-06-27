// Api
import blogApi from './api';

// Blog Actions
export const BLOG_LIST_POSTS = 'BLOG_LIST_POSTS';
export const BLOG_SHOW_SINGLE_POST = 'BLOG_SHOW_SINGLE_POST';

export function loadPosts() {
  return {
    type: BLOG_LIST_POSTS,
    payload: blogApi.getAllPosts()
  };
}

export function loadSinglePost(query) {
  return {
    type: BLOG_SHOW_SINGLE_POST,
    payload: blogApi.getSinglePost(query)
  };
}
