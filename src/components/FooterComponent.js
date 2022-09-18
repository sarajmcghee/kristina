import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="footer">
        <Navbar color="dark" variant="dark" dark>
            <NavbarBrand style={{display: "table-cell"}} href="https://www.linkedin.com/in/" target= "_blank">Linkdin</NavbarBrand>
            <NavbarBrand style={{display: "table-cell"}} href="https://www.instagram.com/" target= "_blank">Instagram</NavbarBrand>
            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
            <NavbarBrand style={{display: "table-cell"}} href="https://www.twitter.com/" target= "_blank">Twitter</NavbarBrand>
        </Navbar>
    </footer>
);

export default Footer;