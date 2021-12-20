import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// styles
import "./Navbar.css";

// logo
import logo from "../../assets/logo.png";

export default function Navbar({ Sidenav }) {
  const sidenav = useRef(null);

  useEffect(() => {
    Sidenav.init(sidenav.current, {});
  }, [Sidenav]);
  return (
    <>
      <nav className="grey lighten-2">
        <div className="container nav-wrapper">
          <button data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </button>
          <NavLink to="/home" className="brand-logo center">
            <img src={logo} height="60px" alt="logo" />
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink className="grey-text text-darken-4" to="/admin">
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink className="grey-text text-darken-4" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="grey-text text-darken-4" to="/stats">
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        ref={sidenav}
        className="sidenav grey lighten-4 grey-text text-darken-4"
        id="mobile-demo"
      >
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/stats">Stats</NavLink>
        </li>
      </ul>
    </>
  );
}
