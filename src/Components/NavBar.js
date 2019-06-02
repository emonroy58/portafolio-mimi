import React from 'react';
import Navigation from './Navigation';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/"> <img src="https://i.ibb.co/SNpxVVx/LOGO-MIMI.png" alt= "Logo" className="logo"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />          
            <Collapse isOpen={this.state.collapsed} navbar>
              <Navigation/> 
            </Collapse>
        </Navbar>
        
      </div>
    );
  }
}