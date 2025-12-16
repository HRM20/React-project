import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* برند بالا */}
      <div className="brand-name">
        <h1>LUXURY WATCHES</h1>
      </div>

      {/* Navbar لینک‌ها و همبرگر */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex align-items-center">
          {/* Search Box در موبایل کنار همبرگر */}
          <div className="d-lg-none me-2">
            <input type="text" placeholder="Search" className="inp-promp" />
          </div>

          {/* دکمه همبرگر */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* لینک‌ها و Search Box دسکتاپ */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex w-100 justify-content-between align-items-center">
              {/* Search Box دسکتاپ سمت راست */}
              <div className="d-none d-lg-block">
                <input type="text" placeholder="Search" className="inp-promp" />
              </div>

              {/* لینک‌ها سمت چپ */}
              <ul className="navbar-nav navbar-list mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    CONTACT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/card">
                    PRODUCTS <i className="bi bi-cart"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
