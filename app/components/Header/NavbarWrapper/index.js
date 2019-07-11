import React from 'react';
import PropTypes from 'prop-types';

import Balance from './Balance';
import Logo from './Logo';
import BalanceMobile from './BalanceMobile';
import SubMenu from './SubMenu';
import SubMenuMobile from './SubMenuMobile';
import AccountInfo from './AccountInfo';
import AccountInfoMobile from './AccountInfoMobile';

export default function NavbarWrapper({
  evoBalance,
  trxBalance,
  zaCoinBalance,
  toggleReferral,
}) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-container">
          <a
            id="w-node-22521a87e90d-1a87e8c5"
            href="/#"
            className="add-friends-button w-inline-block"
            onClick={toggleReferral}
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
          <Logo />
          <SubMenu />
          <Balance
            evoBalance={evoBalance}
            trxBalance={trxBalance}
            zaCoinBalance={zaCoinBalance}
          />
          <AccountInfo />
        </div>
      </div>
      <div
        data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e939"
        className="mobile-menu-wrapper"
      >
        <SubMenuMobile />
        <a href="/#" className="add-friends-button mobile w-inline-block">
          <img
            src="/add-friends-icon.svg"
            width="47"
            alt=""
            className="add-friends-icon"
          />
          <div className="sub-menu-text">refer a friend</div>
        </a>
        <BalanceMobile
          evoBalance={evoBalance}
          trxBalance={trxBalance}
          zaCoinBalance={zaCoinBalance}
        />
        <AccountInfoMobile />
      </div>
    </div>
  );
}

NavbarWrapper.propTypes = {
  evoBalance: PropTypes.number,
  trxBalance: PropTypes.number,
  zaCoinBalance: PropTypes.number,
  toggleReferral: PropTypes.func,
};
