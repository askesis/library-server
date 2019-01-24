import React, { Component } from 'react';
import { NavItem, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class LogOut extends Component {
  
  handleLogout() {
    localStorage.clear();
    this.props.history.push('/sign-in');
  }

  render() {    
    return (
      <NavItem style={{ margin: '5px' }}>
        <Button size="sm" onClick={ ()=> this.handleLogout() }>Log out</Button>
      </NavItem>
    );
  }
}

export default withRouter(LogOut);