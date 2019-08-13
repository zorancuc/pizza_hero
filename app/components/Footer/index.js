import React from 'react';

function Footer() {
  return (
    <div className="section footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <a href="index.html" className="footer-link w--current">
              Pre-Order
            </a>
            <a href="/#" className="footer-link">
              Blog
            </a>
            <a href="/#" className="footer-link">
              Getting Started
            </a>
            <a href="/#" className="footer-link">
              FAQs
            </a>
            <a href="/#" className="footer-link">
              Referral
            </a>
            <a href="/#" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-column">
            <div className="footer-column">
              <a href="/#" className="footer-link">
                Twitter
              </a>
              <a href="/#" className="footer-link">
                Instagram
              </a>
              <a href="/#" className="footer-link">
                Discord
              </a>
              <a href="/#" className="footer-link">
                Medium
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <div className="footer-text">
              © 2019 Pizza Heroes. All Rights Reserved.
            </div>
            <div className="policy-and-terms">
              <a href="/#" className="footer-link-2">
                Privacy Policy
              </a>
              <div className="footer-divider">|</div>
              <a href="/#" className="footer-link-2">
                Terms of Use
              </a>
            </div>
          </div>
          <div className="accepted-crypto">
            <a href="/#" className="footer-token w-inline-block">
              <div className="footer-icon-wrapper">
                <img
                  src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/evo-icon-white.svg"
                  alt=""
                  className="footer-icon"
                />
              </div>
            </a>
            <a href="/#" className="footer-token tron w-inline-block">
              <div className="footer-icon-wrapper tron">
                <img
                  src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/tron-icon-white.svg"
                  alt=""
                  className="footer-icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
