import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import LogOut from '../components/common/LogOut';

class TopNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClick(path, e) {
    e.preventDefault();
    path && this.props.history.push(path);
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Navbar dark className="bg-dark" expand="md">
        <NavbarBrand href="/" onClick={e => this.handleClick('/', e)}>
          Library
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="/home"
                onClick={e => this.handleClick('/home', e)}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/books"
                onClick={e => this.handleClick('/books', e)}
              >
                Books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/account"
                onClick={e => this.handleClick('/account', e)}
              >
                Account
              </NavLink>
            </NavItem>
            <LogOut />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(TopNavbar);
