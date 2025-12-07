import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="brand-name">
        <h1 style={{ fontSize: "2rem" }}>LUXURY WATCHES</h1>
      </div>
      <div className="navbar">
        <div className="navbar-searchbox">
          <input type="text" placeholder="search" />
        </div>
        <div className="navbar-list">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/card">
            PRODUCTS <i className="bi bi-cart"></i>
          </NavLink>
          <NavLink to="/Home">HOME</NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;