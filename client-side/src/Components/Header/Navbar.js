import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoCloseSharp } from "react-icons/io5";
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
      <nav className={isActive ? "active nav-container" : "nav-container"}>
        <div className="navbar-logo-container">
          <Link to="/" className="logo">
            <img src={logo} alt="comapny-logo" className="navbar-logo-image" />
          </Link>
        </div>
        <div className="menu-icons" onClick={toggleMenu}>
          {isActive ? <IoCloseSharp /> : <GiHamburgerMenu />}
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
                <Link to="/enterprise-systems" className="sub-menu-list-item">
                  <li>
                    Enterprise Systems
                    <ul className="enter-prise-menu">
                      <Link
                        to="/enterprise-systems/sap-hana"
                        className="sub-menu-list-item"
                      >
                        <li>SAP S/4 HANA</li>
                      </Link>
                      <Link
                        to="/enterprise-systems/sap-business-by-design"
                        className="sub-menu-list-item"
                      >
                        <li>SAP Business ByDesign</li>
                      </Link>
                      <Link
                        to="/enterprise-systems/sap-business-one"
                        className="sub-menu-list-item"
                      >
                        <li>SAP Business One</li>
                      </Link>
                      <Link
                        to="/enterprise-systems/sap-customer-checkout"
                        className="sub-menu-list-item"
                      >
                        <li>SAP Customer Checkout</li>
                      </Link>
                      <Link
                        to="/enterprise-systems/sap-ariba"
                        className="sub-menu-list-item"
                      >
                        <li>SAP Ariba</li>
                      </Link>
                    </ul>
                    <FaCaretRight className="right-icon" />
                  </li>
                </Link>
                <Link to="/innovation-solutions" className="sub-menu-list-item">
                  <li>
                    Innovation Solutions
                    <ul className="innovation-menu">
                      <Link to="/AnalyticsBI" className="sub-menu-list-item">
                        <li>Analytics & BI</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Digital Identity</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Application Development</li>
                      </Link>
                      <Link to="#" className="sub-menu-list-item">
                        <li>Digital Financial Services</li>
                      </Link>
                    </ul>
                    <FaCaretRight className="right-icon" />
                  </li>
                </Link>

                <Link to="/managed-services" className="sub-menu-list-item">
                  <li>
                    Managed Services
                    <ul className="managed-menu">
                      <Link
                        to="/managed-services/manage-cloud"
                        className="sub-menu-list-item"
                      >
                        <li>Managed Cloud</li>
                      </Link>
                      <Link
                        to="/managed-services/devops"
                        className="sub-menu-list-item"
                      >
                        <li>DevOps</li>
                      </Link>
                      <Link
                        to="/managed-services/staff-augmentation"
                        className="sub-menu-list-item"
                      >
                        <li>Staff Augmentation</li>
                      </Link>
                    </ul>
                    <FaCaretRight />
                  </li>
                </Link>
                <Link to="/mendixPage" className="sub-menu-list-item">
                  <li>
                    Mendix <FaCaretRight />
                  </li>
                </Link>
                <Link to="/polarionPage" className="sub-menu-list-item">
                  <li>
                    Polarion <FaCaretRight />
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
