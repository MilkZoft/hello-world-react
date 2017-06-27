// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from '../../containers/Library/actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    book: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      displaySingleBook: false
    };
  }

  componentWillMount() {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    if (id > 0) {
      this.setState({
        displaySingleBook: true
      });

      this.props.loadSingleBook({ id });
    } else {
      this.setState({
        displaySingleBook: false
      });

      this.props.loadBooks();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = nextProps;

    if (nextProps.match.params !== this.props.match.params) {
      if (id > 0) {
        this.setState({
          displaySingleBook: true
        });

        this.props.loadSingleBook({ id });
      } else {
        this.setState({
          displaySingleBook: false
        });
      }
    }
  }

  renderSingleBook(book) {
    return (
      <div>
        <h1>{book.title}</h1>
        <p>Autor: {book.author}</p>
        <p><img src={book.image} style={{ maxWidth: '300px' }} /></p>
        <p><Link to="/library">Go back</Link></p>
      </div>
    );
  }

  renderBooksList(books) {
    return (
      <div>
        <h1>Library</h1>
        <ul>
          {
            books.map((book, key) => {
              return (
                <li key={key}>
                  <Link to={`/library/${book.id}`}>{book.title}</Link> - {book.author}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    const {
      books,
      book
    } = this.props;

    if (isFirstRender(books) && book.length === 0) {
      return null;
    }

    let show = this.renderBooksList(books);

    if (this.state.displaySingleBook && book.length > 0) {
      show = this.renderSingleBook(book[0]);
    }

    return (
      <div className="Home">
        {show}
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);
