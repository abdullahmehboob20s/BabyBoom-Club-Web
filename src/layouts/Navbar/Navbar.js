import React from "react";
import Logo from "components/Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import hamburger from "assets/images/hamburger.png";
import crossIcon from "assets/images/cross-icon.png";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <Link to="/" style={{ width: "200px" }}>
              <Logo />
            </Link>
          </div>

          <div className="hamburger" onClick={() => setShow(!show)}>
            <img src={hamburger} alt="" />
          </div>

          <div className={`navbar-right ${show ? "show" : ""}`}>
            <div className="nav-links">
              <img
                onClick={() => setShow(false)}
                className="cross-icon"
                src={crossIcon}
                alt=""
              />
              <ScrollLink
                to="home"
                className="pointer fs-16px dark-blue weight-4 montserrat"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                offset={80}
                className="pointer fs-16px dark-blue weight-4 montserrat"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="roadmap"
                className="pointer fs-16px dark-blue weight-4 montserrat"
              >
                Road Map
              </ScrollLink>
              <ScrollLink
                to="team"
                className="pointer fs-16px dark-blue weight-4 montserrat"
                offset={-100}
              >
                Team
              </ScrollLink>
              <ScrollLink
                to="faq"
                offset={-100}
                className="pointer fs-16px dark-blue weight-4 montserrat"
              >
                FAQ
              </ScrollLink>
            </div>
            <Link
              to="/"
              className="nav-btn fs-24px teko weight-5 dark-blue pointer"
            >
              Join Our Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
