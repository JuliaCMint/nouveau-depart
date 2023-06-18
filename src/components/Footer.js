import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className='section footer'>
      <div className='sitemap'>
        <h4 className='footer-title'>sitemap</h4>
        <PageLinks parentClass='footer-links' itemClass='footer-link' />
      </div>
      <div className='subscribe'>
        <h3 className='footer-title'>newsletter</h3>
        <div className='newsletter-form'>
          <input type='email' placeholder='email address' />
          <button className='btn-small white-btn btn-footer'>subscribe</button>
        </div>

        <p className='copyright'>
          &copy; nouveau départ travel company
          <span id='date'>{new Date().getFullYear()}</span>
        </p>
      </div>
      <div className='other'>
        <h4 className='footer-title'>subscribe</h4>
        <ul className='footer-icons'>
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass='footer-icon' />
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
