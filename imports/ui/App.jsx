import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './layout/Routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

class App extends React.Component {
  render() {
    const { loading, books } = this.props;
    return (
      <React.Fragment > 
        <Router>
          <Routes/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;