import React, { Component } from 'react';
import { Nav, Navbar, DropdownMenu, DropdownItem, Link, Button, Badge, DropdownToggle, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Dropdown, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CartState } from "../context/Context";
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";


    class Header extends Component {
      constructor(props) {
          super(props);
          this.toggleNav = this.toggleNav.bind(this);
          this.toggleDropdown = this.toggleDropdown.bind(this);
          this.state = {
              isNavOpen: false,
              dropdownOpen: false
          };
      }
  
      toggleNav() {
          this.setState({
              isNavOpen: !this.state.isNavOpen
          });
      }

      toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
  
      render() {


    return (

        <Navbar color="dark" variant="dark" sticky="top" dark expand="md" className="header">

            
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavbarBrand className="nav-link" href="/">Kristina Armstrong</NavbarBrand>
                    <NavItem>
                        <NavLink className="nav-link" to="/book">Book</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/faqs">Faqs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/giftcards">Giftcards</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} >
                    <DropdownToggle caret>
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{10}</Badge>
                    </DropdownToggle>

                     <DropdownMenu style={{ minWidth: 370 }}>
                        <DropdownItem>EMPTY</DropdownItem> 

                     </DropdownMenu>
                </Dropdown>
        
        </Navbar>

    );
  }
};


export default Header;