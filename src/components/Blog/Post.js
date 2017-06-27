// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as actions from '../../containers/Blog/actions';

// Utils
import { isFirstRender } from '../../../lib/utils/frontend';

class Post extends Component {
  static propTypes = {
    day: PropTypes.string,
    loadSinglePost: PropTypes.func.isRequired,
    month: PropTypes.string,
    post: PropTypes.object,
    posts: PropTypes.array,
    singlePost: PropTypes.array,
    slug: PropTypes.string,
    year: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      post: false
    };
  }

  componentWillMount() {
    const { year, month, day, slug, posts } = this.props;

    if (year && month && day && slug) {
      this.props.loadSinglePost({ year, month, day, slug });
    }
  }

  getPostData(post, key, single = false) {
    const { year, month, day, slug, title, content, author } = post;
    const url = `blog/${year}/${month}/${day}/${slug}`;

    return {
      title,
      url,
      content,
      author,
      key,
      single,
      year,
      month,
      day
    };
  }

  renderPostBody(post) {
    const {
      title,
      url,
      content,
      codes,
      key,
      single,
      author,
      year,
      month,
      day
    } = post;
    const authorLink = `/users/${author}`;
    const createdAt = `${monthName} ${day}, ${year}`;

    return (
      <div className="Post" key={key}>
        <h2>
          <Link to={url}>{title}</Link>
        </h2>

        <p className="information">
          Published by <Link to={authorLink} className="author">{author}</Link>
          &nbsp; - {createdAt}
        </p>

        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }

  renderSinglePost(post) {
    return this.renderPostBody(this.getPostData(post[0], 0, true));
  }

  renderPost(post, key) {
    return this.renderPostBody(this.getPostData(post, key));
  }

  render() {
    const { post, key, singlePost } = this.props;

    if (post) {
      return this.renderPost(post, key);
    } else if (!isFirstRender(this.state.post ? this.state.post : singlePost)) {
      return this.renderSinglePost(this.state.post ? this.state.post : singlePost);
    }

    return null;
  }
}

export default connect(state => ({
  posts: state.blog.posts,
  singlePost: state.blog.post
}), actions)(Post);
