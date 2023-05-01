import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function Navbar() {
  const { login, setLogin } = useContext(BlogContext);
  const handleLogout = (e) => {
    localStorage.removeItem("localLogin");
    setLogin(undefined);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="/">
                Home
              </Link>
              {!login && (
                <>
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                  <Link class="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
            {login && (
              <>
                <div class="dropdown ms-auto">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    {login.name}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/user/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/user/add-blog">
                        Create Blog
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/user/account">
                        Account
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        LOGOUT
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
