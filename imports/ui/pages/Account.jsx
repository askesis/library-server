import React from 'react';
import { Container } from 'reactstrap';

import Me from '../components/account/Me';

class Account extends React.Component {
  
  render() {
    return (
      <Container>
        <h1>Account</h1>
        <Me />
      </Container>
    );
  }
}

export default Account;