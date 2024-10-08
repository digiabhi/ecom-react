import "./Header.css";

import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    UncontrolledDropdown,
} from 'reactstrap';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...props}>
                <NavbarBrand id="title">
                    <Link to="/">Shop Cart</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <UncontrolledDropdown nav inNavbar style={{ marginRight: '2rem' }}>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Cart</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><Link to="/signin">Logout</Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavbarText>Username</NavbarText>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;