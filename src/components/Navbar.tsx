import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Container } from "./general";
import { Logo } from "./Logo";

const Navbar = () => {
  const { user } = useContext(GlobalContext);
  const path = useLocation().pathname;

  return (
    <nav className="top-menu">
      <Container className="d-flex align-center justify-s-b wrap">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="nav-list-page">
          <li>
            <NavLink to="/about" className="nav-page">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cocktails" className="nav-page">
              Recipes
            </NavLink>
          </li>
          <li>EN / ES</li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
