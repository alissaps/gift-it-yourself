import React from "react";
import { Navbar, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Navbar>
      <Navbar.Brand href="#">Gift It Yourself</Navbar.Brand>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gits">Gift</NavLink>
      <NavLink to="/newgift">New Gift</NavLink>
      <NavLink to="/random">Random message</NavLink>
      <NavBtn>
        <NavBtnLink to="/contact">Contact us</NavBtnLink>
      </NavBtn>
    </Navbar>
  );
}

export default Navbar;