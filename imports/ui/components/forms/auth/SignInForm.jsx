import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { 
  Row,
  Col, 
  Label, 
  Form, 
  FormGroup, 
  Input,
  Button
} from 'reactstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.pressSubmit = this.pressSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  pressSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    Meteor.loginWithPassword( 
      email, 
      password, 
      () => { 
        this.props && this.props.history && this.props.history.push('/home') 
      }
    );
  }

  render() {
    const { email, password } = this.state;

    return (
      <div style={{ marginTop: '50px'}}>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h2 style={{marginBottom: '30px'}}>Sign In</h2>
            <Form onSubmit={this.pressSubmit}>
              <FormGroup row>
                <Label for="email" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input 
                    required
                    type="email" 
                    name="email" 
                    value={email}
                    id="email" 
                    placeholder="Enter your email"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={4}>Password</Label>
                <Col sm={8}>
                  <Input
                    required
                    type="password"
                    name="password"
                    value={password}
                    id="password" 
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <Row>
                <Col md={{ size: 8, offset: 4 }}>
                  <Button type="submit">
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default withRouter(SignInForm);