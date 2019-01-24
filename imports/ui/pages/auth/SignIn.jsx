import React, { Component } from 'react';
import { Container } from 'reactstrap';

import SignInForm from '../../components/forms/auth/SignInForm';

class SignIn extends Component {
  render() {
    return (
      <Container>
        <SignInForm {...this.props} />
      </Container>
    );
  }
}

export default SignIn;