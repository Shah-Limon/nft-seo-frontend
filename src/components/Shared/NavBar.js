import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);
  return (
    <>
      <header id="header_main" className="header">
        <div className="container big">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  <Link to="/">
                    <img
                      id="site-logo"
                      src="https://themesflat.co/html/cyfoniihtml/assets/images/logo/logo.png"
                      alt="Peson"
                      width={160}
                      height={38}
                      data-retina="https://themesflat.co/html/cyfoniihtml/assets/images/logo/logo@2x.png"
                      data-width={160}
                      data-height={38}
                    />
                  </Link>
                </div>
                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children">
                        <Link to="/">Home</Link>
                      </li>

                      <li className="menu-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-button">
                    <span />
                  </div>
                </div>
                <div className="header__action">
                  <a href="#" className="search-btn">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.7659"
                        cy="9.76639"
                        r="8.98856"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0176 16.4849L19.5416 19.9997"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {user ? (
                    <Link className="action-btn" to="/user-dashboard">
                      {" "}
                      <span>dashboard</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="action-btn">
                      {" "}
                      <span>Login Now</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
