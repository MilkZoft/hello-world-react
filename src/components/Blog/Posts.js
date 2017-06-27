// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as actions from '../../containers/Blog/actions';

// Utils
import { isFirstRender } from '../../../lib/utils/frontend';

// Components
import Post from './Post';

class Posts extends Component {
  static propTypes = {
    loadPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { params = {} } = this.props;

    this.props.loadPosts(params);
  }

  render() {
    const {
      posts
    } = this.props;

    return (
      <div>
        { posts.map((post, key) => <Post post={post} key={key} />) }
      </div>
    );
  }
}

export default connect(state => ({
  posts: state.blog.posts
}), actions)(Posts);
