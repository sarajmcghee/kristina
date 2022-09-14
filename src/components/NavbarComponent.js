import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar color="faded" dark sticky="top" expand="md" >
                    <NavbarBrand className="nav-link" to="/">Kristina Armstrong</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
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
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
