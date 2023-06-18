import React, { useState } from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={colorChange ? "navbar color-change" : "navbar"}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='nouveau départ' />
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            onClick={toggleLinks}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks
          parentClass={showLinks ? "nav-links show-links" : "nav-links"}
          itemClass='nav-link'
        />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass='nav-link' />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
