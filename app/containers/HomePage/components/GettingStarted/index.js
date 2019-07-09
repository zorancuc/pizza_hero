import React from 'react';

import Header from './Header';

export default function GettingStarted() {
  return (
    <div className="section getting-started-section">
      <div className="container">
        <Header />
        <div className="steps-main-wrapper">
          <div className="step-wrapper">
            <h2 className="step-title">Step 1</h2>
            <h5 className="step-subtitle">Choose your wallet</h5>
            <a href="/#" className="wallet-link w-inline-block">
              <img src="/tronlink.png" alt="" className="wallet-logo" />
              <div>TronLink</div>
            </a>
            <div className="desktop-or-mobile-tip">Mobile:</div>
            <a href="/#" className="wallet-link w-inline-block">
              <img src="/coinbase.png" alt="" className="wallet-logo" />
              <div>Coinbase</div>
            </a>
            <a href="/#" className="wallet-link w-inline-block">
              <img src="/trust.png" alt="" className="wallet-logo" />
              <div>Trust</div>
            </a>
          </div>
          <img
            src="/right-arrow_1right-arrow.png"
            alt=""
            className="right-arrow"
          />
          <div className="step-wrapper">
            <h2 className="step-title">Step 2</h2>
            <h5 className="step-subtitle">Send EVO to your wallet</h5>
            <p className="step-desc">
              Pizza Heroes runs on the EVO network so you’ll need some EVO
              before starting your journey!
              <br />
              <br />
              You can buy EVO from any exchange in your country. We recommend
              Coinbase due to its simplicity and strong reputation.
            </p>
          </div>
          <img
            src="/right-arrow_1right-arrow.png"
            alt=""
            className="right-arrow"
          />
          <div className="step-wrapper">
            <h2 className="step-title">Step 3</h2>
            <h5 className="step-subtitle">Adopt Pizza Heroes</h5>
            <p className="step-desc">
              Now that you have your wallet and EVO, it’s time to figure out
              which Pizza Heroes you want to adopt.
              <br />
              <br />
              You can buy Pizza Heroes on the Marketplace from other players or
              you can check to see if the Pizza Lab is currently selling Hero
              Eggs.
              <br />
              <br />
              It will be helpful to do some research first by reading the FAQ
              and the Collectors Guide before making your decisions. Your first
              Pizza Heroes may become your lifelong friends, so choose wisely.
            </p>
          </div>
        </div>
        <h5 className="step-subtitle">Still need help?</h5>
        <a href="/#" className="faq-button w-inline-block">
          <div className="button-gradient">
            <div className="discover-text">Browse our FAQ</div>
          </div>
        </a>
      </div>
    </div>
  );
}
