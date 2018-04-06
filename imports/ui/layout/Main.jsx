import React from 'react';
import { Container } from 'reactstrap';

import Navbar from './Navbar';

class Main extends React.Component {  
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;