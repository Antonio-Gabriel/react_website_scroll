import React from "react";
import { FaBars } from "react-icons/fa";

import { GlobalStyles } from "../../styles/GlobalStyles";

import {
  Container,
  Logo,
  NavbarElement,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavbtnLink,
} from "./styles";

function Navbar({ toggle }) {
  return (
    <>
      <NavbarElement>
        <Container>
          <Logo to="/">Dolla</Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavbtnLink to="signin">Sign In</NavbtnLink>
          </NavBtn>
        </Container>
      </NavbarElement>

      <GlobalStyles />
    </>
  );
}

export default Navbar;
