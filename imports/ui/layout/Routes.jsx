import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import SignIn from '../pages/auth/SignIn';
import Books from '../../api/books';
import Home from './Home';
import BooksList from '../components/Books';
import Main from './Main';

class Routes extends Component {
  
  render() {
    const { books, loading, user, location } = this.props;
    console.log( loading, user);
    if ( loading ) return null; 
    
    if ( !loading && !user && location.pathname !== "/sign-in" ) {
       return <Redirect to="/sign-in" />
    }

    return (
      <React.Fragment>

        { !user && <Route path="/sign-in" exact component={SignIn} />}

        { user && (
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
  const user = Meteor.user();

  return {
    loading,
    books,
    user
  };
})(Routes);


export default withRouter(RoutesWithTracker);