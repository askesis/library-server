import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Books from '../api/books'

import Home from '../ui/components/Home';

class App extends React.Component {
  render() {
    const { loading, books } = this.props;
    return (
      <React.Fragment > 
        { !loading && <Home books={books} /> }
      </React.Fragment>
    );
  }
}

const AppWithTracker = withTracker(() => {
  const booksSubs = Meteor.subscribe('books.public');
  const loading = !booksSubs.ready();
  const books = Books.find().fetch();

  return {
    loading,
    books,
  };
})(App);


export default AppWithTracker;