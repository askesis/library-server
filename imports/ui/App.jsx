import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Books from '../api/books'

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Hi</h1>
      </div>
    );
  }
}

const AppWithTracker = withTracker(() => {
  const booksSubs = Meteor.subscribe('books.public');
  const loading = booksSubs.ready();
  const books = Books.find().fetch();

  return {
    loading,
    books,
  };
})(App);


export default AppWithTracker;