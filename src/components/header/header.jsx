import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavbarBrand, Button, Nav, NavItem } from "reactstrap";

const Header = () => {
    const history = useHistory();
    
    const toContents = () => {
        history.push("/");
    }

    return (
        <div>
            <Navbar color="primary" dark expand="lg">
                <Nav pills>
                    <NavItem className="ml-3">
                        <Button color="light" onClick={toContents}>К оглавлению</Button>
                    </NavItem>
                </Nav>
                <NavbarBrand className="m-auto"><h3>Экономия электрической энергии на производстве и в быту</h3></NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;
