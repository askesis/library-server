import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Books from '../../api/books';
import Home from './Home';
import BooksList from '../components/Books';
import Main from './Main';

class Routes extends Component {
  
  render() {
    const account = true;
    const { books, loading } = this.props;
    
    if ( loading ) return null; 

    return (
      <React.Fragment>
        { account && (
          <Switch>
            <Main>
              <Route path="/" exact component={Home} />
              <Route path="/books" exact render={ () => <BooksList books={books}/> } />
              <Route path="/home" exact component={ Home } />
            </Main>
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

const RoutesWithTracker = withTracker(() => {
  const booksSubs = Meteor.subscribe('books.public');
  const loading = !booksSubs.ready();
  const books = Books.find().fetch();

  return {
    loading,
    books,
  };
})(Routes);


export default withRouter(RoutesWithTracker);