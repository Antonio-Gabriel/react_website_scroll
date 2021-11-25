import React from "react";

import {
  Container,
  Icon,
  CloseIcon,
  SidebarContent,
  SidebarMenu,
  SidebarLink,
  SideBtnWraper,
  SidebarRoute,
} from "./styles";

function Sidebar({ isOpen, toggle }) {
  return (
    <div>
      <Container isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarContent>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
          </SidebarMenu>

          {/* Wrapper */}
          <SideBtnWraper>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWraper>
        </SidebarContent>
      </Container>
    </div>
  );
}

export default Sidebar;
