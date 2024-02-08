import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`navbar-container${scrolling ? " scrolling" : ""}`}>
      <nav className={isActive ? "active" : ""}>
        <div className="menu-icons" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className="navbar-logo-container">
          <Link to="/" className="logo">
            <img src={logo} alt="comapny-logo" className="navbar-logo-image" />
          </Link>
        </div>
        <div className="navbar-menu-container">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/about-us" className="nav-link-item">
                About
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="#" className="nav-link-item">
                Services <FaCaretDown />
              </Link>
              <ul className="sub-menu">
                <Link to="#" className="sub-menu-list-item">
                  <li>
                    Enterprise Systems
                    <ul className="enter-prise-menu">
                      <Link to="#" className="sub-menu-list-item">
                        <li>Cara Cara</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Tangerine</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Others</li>
                      </Link>
                    </ul>
                    <FaCaretRight />
                  </li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>
                    Innovation Solutions
                    <ul className="innovation-menu">
                      <Link to="#" className="sub-menu-list-item">
                        <li>Cara Cara</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Tangerine</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>
                          Others
                          {/* <ul className="sub-menu">
                      <li>
                        <Link to="#" className="nav-link-item">
                          Lima
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-link-item">
                          Seville
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-link-item">
                          Lime
                        </Link>
                      </li>
                    </ul> */}
                        </li>
                      </Link>
                    </ul>
                    <FaCaretRight />
                  </li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>
                    Managed Services
                    <ul className="managed-menu">
                      <Link to="#" className="sub-menu-list-item">
                        <li>Cara Cara</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Tangerine</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Others</li>
                      </Link>
                    </ul>
                    <FaCaretRight />
                  </li>
                </Link>
              </ul>
            </li>
            <li className="nav-list-item">
              <Link to="#" className="nav-link-item">
                Solutions <FaCaretDown />
              </Link>
              <ul className="sub-menu">
                <Link to="#" className="sub-menu-list-item">
                  <li>SAP on Google Cloud</li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>Retail End-to-End</li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>SAP Moderization</li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>Open Finance</li>
                </Link>
              </ul>
            </li>
            <li className="nav-list-item">
              <Link to="#" className="nav-link-item">
                Insights <FaCaretDown />
              </Link>
              <ul className="sub-menu">
                <Link to="#" className="sub-menu-list-item">
                  <li>News</li>
                </Link>
                <Link to="#" className="sub-menu-list-item">
                  <li>Blogs</li>
                </Link>
              </ul>
            </li>

            <li className="nav-list-item">
              <Link to="/contactUs" className="nav-link-item">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
