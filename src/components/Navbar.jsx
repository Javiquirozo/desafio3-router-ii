import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav>
      <NavLink
        className="nav-link"
        activeClassName="active"
        exact
        to="/"
      >
        Home
      </NavLink>

      {" | "}

      <NavLink
        className="nav-link"
        activeClassName="active"
        exact
        to="/pokemones"
      >
        Pokemones
      </NavLink>
    </nav>
  );
}