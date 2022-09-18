import React, { useState } from 'react';
import { Nav, Navbar, DropdownMenu, DropdownItem, Link, Button, Badge, DropdownToggle, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Dropdown, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CartState } from "../context/Context";
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";


// class Navigation extends Component {
//     constructor(props) {
//         super(props);
//         this.toggleNav = this.toggleNav.bind(this);
//         this.toggleDropdown = this.toggleDropdown.bind(this);
//         this.state = {
//             isNavOpen: false,
//             dropdownOpen: false
//         };
//     }
const Navigation = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();

    const [collapsed, setCollapsed] = useState(true);
    const [Dropcollapsed, dropSetCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const toggleDropdown = () => dropSetCollapsed(!Dropcollapsed);

    // const toggleNav=()=> {
    //     this.setState({
    //         isNavOpen: !this.state.isNavOpen
    //     });
    // }

    // const toggleDropdown=()=> {
    //     this.setState(prevState => ({
    //       dropdownOpen: !prevState.dropdownOpen
    //     }));
    //   }



    return (

        <Navbar color="dark" variant="dark" dark expand="md" style={{ height: 80 }}>

            <NavbarBrand className="nav-link" href="/">Kristina Armstrong</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
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
            <Nav>
                <Dropdown isOpen={!dropSetCollapsed} toggle={toggleDropdown} >
                    <DropdownToggle caret>
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </DropdownToggle>

                     <DropdownMenu style={{ minWidth: 370 }}>
                        <DropdownItem>EMPTY</DropdownItem>
                        {/* {cart.length > 0 ? (
                            <>
                                {cart.map((prod) => (
                                    <span className="cartitem" key={prod.id}>
                                        <img
                                            src={prod.image}
                                            className="cartItemImg"
                                            alt={prod.name}
                                        />
                                        <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })
                                            }
                                        />
                                    </span>
                                ))}
                                <NavLink to="/cart">
                                    <Button style={{ width: "95%", margin: "0 10px" }}>
                                        Go To Cart
                                    </Button>
                                </NavLink>
                            </>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        )}> */}

                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </Navbar>

    );
};


export default Navigation;