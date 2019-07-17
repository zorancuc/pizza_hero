import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Balance from './Balance';
import Logo from './Logo';
import BalanceMobile from './BalanceMobile';
import SubMenu from './SubMenu';
import SubMenuMobile from './SubMenuMobile';
import AccountInfo from './AccountInfo';
import AccountInfoMobile from './AccountInfoMobile';

export default function NavbarWrapper({
  isLogged,
  evoBalance,
  trxBalance,
  zaCoinBalance,
  setActiveReferral,
  openSignupModal,
}) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div
          className={classNames({
            'navbar-container': isLogged,
            'navbar-container-signed-out': !isLogged,
          })}
        >
          {isLogged && (
            <a
              id="w-node-b41af30da6a1-71cf37c7"
              href="/#"
              className="add-friends-button w-inline-block"
              onClick={setActiveReferral}
            >
              <img
                src="/add-friends-icon.svg"
                width="47"
                alt=""
                className="add-friends-icon"
              />
            </a>
          )}
          <a
            id="w-node-b41af30da6a1-71cf37c7"
            data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e90f"
            href="/#"
            className="menu-icon-wrapper w-inline-block"
          >
            <div className="text-block-2">|||</div>
          </a>
          <Logo
            id={
              isLogged
                ? 'w-node-22521a87e912-1a87e8c5'
                : 'w-node-b05c41dc2ddc-71cf37c7'
            }
          />
          {!isLogged && (
            <a
              id="w-node-bf868b84a96d-71cf37c7"
              href="/#"
              className="create-account-button w-inline-block"
              onClick={openSignupModal}
            >
              <div className="sign-in-text">Create Account</div>
            </a>
          )}
          <SubMenu
            id={
              isLogged
                ? 'w-node-22521a87e914-1a87e8c5'
                : 'w-node-4de55f9e4bd1-71cf37c7'
            }
          />
          {isLogged && (
            <Balance
              evoBalance={evoBalance}
              trxBalance={trxBalance}
              zaCoinBalance={zaCoinBalance}
            />
          )}
          {isLogged && <AccountInfo />}
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
  isLogged: PropTypes.bool,
  evoBalance: PropTypes.number,
  trxBalance: PropTypes.number,
  zaCoinBalance: PropTypes.number,
  setActiveReferral: PropTypes.func,
  openSignupModal: PropTypes.func,
};
