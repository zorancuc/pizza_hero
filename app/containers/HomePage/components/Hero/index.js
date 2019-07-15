import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({ openVideo }) {
  return (
    <div id="home" className="section hero-section">
      <div className="container hero">
        <div className="hero-content-container">
          <h1 className="main-title">
            Collect.
            <br />
            Play.
            <br />
            Earn.
          </h1>
          <h4 className="main-subtitle">
            Play and earn with digital collectibles.
          </h4>
          <a
            href="#pre-sale"
            className="start-collecting-button w-inline-block"
          >
            <div>start collecting</div>
          </a>
          <div className="watch-trailer-wrapper">
            <a href="/#" className="lightbox-link w-inline-block w-lightbox">
              <div className="watch-trailer-button-wrapper">
                <div className="watch-trailer-circle-border">
                  <div className="watch-trailer-circle">
                    <img src="/play.svg" alt="" />
                  </div>
                </div>
                <a href="/#" className="watch-trailer-text" onClick={openVideo}>
                  Watch trailer
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  openVideo: PropTypes.func,
};
