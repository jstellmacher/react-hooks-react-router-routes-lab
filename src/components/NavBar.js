import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "orange",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>

      <NavLink exact to="/"
        style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}>

        Home
      </NavLink>

      <NavLink to="/movies"
        style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}>Movies</NavLink>

      <NavLink to="/directors"
        style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}>Directors</NavLink>

      <NavLink to="/actors"
        style={linkStyles}
        activeStyle={{
          background: "darkgreen",
        }}>Actors</NavLink>
    </div>
  );
}

export default NavBar;