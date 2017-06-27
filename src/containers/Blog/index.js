// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Posts from '../../components/Blog/Posts';
import Post from '../../components/Blog/Post';

class Blog extends Component {
  isSinglePost(params) {
    const { year, month, day, slug } = params;

    return year && month && day && slug;
  }

  render() {
    const {
      match: {
        params
      }
    } = this.props;

    return (
      <div className="Blog">
        <div className="Posts">
          {
            this.isSinglePost(params)
              ? <Post {...params} />
              : <Posts params={params} />
          }
        </div>
      </div>
    );
  }
}

export default Blog;
