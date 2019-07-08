import React from 'react';

export default function NavbarWrapper() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-container">
          <a
            id="w-node-22521a87e90d-1a87e8c5"
            href="/#"
            className="add-friends-button w-inline-block"
          >
            <img
              src="/add-friends-icon.svg"
              width="47"
              alt=""
              className="add-friends-icon"
            />
          </a>
          <a
            id="w-node-22521a87e90f-1a87e8c5"
            data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e90f"
            href="/#"
            className="menu-icon-wrapper w-inline-block"
          >
            <div className="text-block-2">|||</div>
          </a>
          <a
            id="w-node-22521a87e912-1a87e8c5"
            data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e912"
            href="index.html"
            className="pizza-heroes-logo-link-wrapper w-inline-block w--current"
          >
            <img
              src="/pizza-heroes-logo.png"
              width="149"
              alt=""
              className="pizza-heroes-logo"
            />
          </a>
          <div id="w-node-22521a87e914-1a87e8c5" className="sub-menu-wrapper">
            <a
              href="index.html"
              className="sub-menu-link w-inline-block w--current"
            >
              <div className="sub-menu-text">pre-order</div>
            </a>
            <a
              href="my-inventory.html"
              className="sub-menu-link w-inline-block"
            >
              <div className="sub-menu-text">my inventory</div>
            </a>
            <a
              href="/#"
              className="sub-menu-link last-sub-menu-item w-inline-block"
            >
              <div className="sub-menu-text">guides</div>
            </a>
          </div>
          <div id="w-node-22521a87e91e-1a87e8c5" className="tokens-wrapper">
            <a href="/#" className="token-link w-inline-block">
              <div className="icon-wrapper">
                <img src="/evo-icon-white.svg" alt="" />
              </div>
              <div className="token-amount">9,000</div>
              <div
                data-w-id="b47e62b2-b9b0-2b13-ec01-0f3bc75b7b0a"
                className="token-tooltip"
              >
                <div>EVO Balance</div>
                <div className="token-tooltip-arrow" />
              </div>
            </a>
            <a href="/#" className="token-link w-inline-block">
              <div className="icon-wrapper tron">
                <img src="/tron-icon-white.svg" alt="" />
              </div>
              <div className="token-amount">180,000</div>
              <div className="token-tooltip trx">
                <div>TRX Balance</div>
                <div className="token-tooltip-arrow" />
              </div>
            </a>
            <a href="/#" className="token-link w-inline-block">
              <div className="icon-wrapper za">
                <img src="/za-text-white.svg" alt="" />
              </div>
              <div className="token-amount">180,000</div>
              <div className="token-tooltip za">
                <div>ZA Coin Balance</div>
                <div className="token-tooltip-arrow" />
              </div>
            </a>
          </div>
          <a
            id="w-node-22521a87e932-1a87e8c5"
            href="activity.html"
            className="account-button w-inline-block"
          >
            <div className="account-info-wrapper">
              <div className="account-name">Elliot T. Wainman</div>
              <div className="account-name">(TVt3AG...)</div>
            </div>
            <img src="/avatar_1avatar.jpg" alt="" className="account-image" />
          </a>
        </div>
      </div>
      <div
        data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e939"
        className="mobile-menu-wrapper"
      >
        <div className="sub-menu-wrapper mobile">
          <a
            href="index.html"
            className="sub-menu-link mobile w-inline-block w--current"
          >
            <div className="sub-menu-text">pre-order</div>
          </a>
          <a
            href="my-inventory.html"
            className="sub-menu-link mobile w-inline-block"
          >
            <div className="sub-menu-text">my-inventory</div>
          </a>
          <a
            href="/#"
            className="sub-menu-link last-sub-menu-item w-inline-block"
          >
            <div className="sub-menu-text">guides</div>
          </a>
        </div>
        <a href="/#" className="add-friends-button mobile w-inline-block">
          <img
            src="/add-friends-icon.svg"
            width="47"
            alt=""
            className="add-friends-icon"
          />
          <div className="sub-menu-text">refer a friend</div>
        </a>
        <div className="tokens-wrapper mobile">
          <a href="/#" className="token-link mobile w-inline-block">
            <div className="icon-wrapper">
              <img src="/evo-icon-white.svg" alt="" />
            </div>
            <div className="token-amount">9000</div>
            <div className="token-tooltip">
              <div>EVO Balance</div>
              <div className="token-tooltip-arrow" />
            </div>
          </a>
          <a href="/#" className="token-link mobile w-inline-block">
            <div className="icon-wrapper tron">
              <img src="/tron-icon-white.svg" alt="" />
            </div>
            <div className="token-amount">180,000</div>
            <div className="token-tooltip trx">
              <div>TRX Balance</div>
              <div className="token-tooltip-arrow" />
            </div>
          </a>
          <a href="/#" className="token-link mobile last w-inline-block">
            <div className="icon-wrapper za">
              <img src="/za-text-white.svg" alt="" />
            </div>
            <div className="token-amount">180,000</div>
            <div className="token-tooltip za">
              <div>ZA Coin Balance</div>
              <div className="token-tooltip-arrow" />
            </div>
          </a>
        </div>
        <a href="/#" className="account-button mobile w-inline-block">
          <img src="/avatar_1avatar.jpg" alt="" className="account-image" />
          <div className="account-info-wrapper">
            <div className="account-name">Elliot T. Wainman</div>
            <div className="account-number">(TVt3AG...)</div>
          </div>
        </a>
      </div>
    </div>
  );
}
