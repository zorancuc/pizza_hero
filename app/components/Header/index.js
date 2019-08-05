import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectIsLogged,
  makeSelectEvoBalance,
  makeSelectTrxBalance,
  makeSelectZACoinBalance,
  makeSelectWalletAddress,
  makeSelectAccountName,
} from 'containers/App/selectors';
import { openSignupModal } from 'containers/App/actions';

import FriendRefferal from './FriendRefferal';
import NavbarWrapper from './NavbarWrapper';

import '!file-loader?name=[name].[ext]!../../images/add-friends-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/link.svg';
import '!file-loader?name=[name].[ext]!../../images/close.svg';
import '!file-loader?name=[name].[ext]!../../images/tron-gold.svg';
import '!file-loader?name=[name].[ext]!../../images/evo-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/tron-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/za-text-white.svg';
import '!file-loader?name=[name].[ext]!../../images/avatar_1avatar.jpg';
import '!file-loader?name=[name].[ext]!../../images/pizza-heroes-logo.png';

function Header({
  isLogged,
  onOpenSignupModal,
  evoBalance,
  trxBalance,
  zaCoinBalance,
  accountName,
  accountAddress,
}) {
  const [state, setState] = useState({
    isActiveReferral: false,
    isShowReferral: false,
  });
  const setActiveReferral = e => {
    e.preventDefault();
    setState({
      ...state,
      isActiveReferral: true,
      isShowReferral: true,
    });
  };
  const setHideReferral = e => {
    if (e) e.preventDefault();
    setState({
      ...state,
      isShowReferral: false,
      isActiveReferral: false,
    });
  };

  return (
    <div>
      <FriendRefferal
        active={state.isActiveReferral}
        show={state.isShowReferral}
        setHide={setHideReferral}
      />
      <NavbarWrapper
        isLogged={isLogged}
        openSignupModal={onOpenSignupModal}
        evoBalance={evoBalance}
        trxBalance={trxBalance}
        zaCoinBalance={zaCoinBalance}
        setActiveReferral={setActiveReferral}
        accountName={accountName}
        accountAddress={accountAddress}
      />
    </div>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  onOpenSignupModal: PropTypes.func,
  evoBalance: PropTypes.number,
  trxBalance: PropTypes.number,
  zaCoinBalance: PropTypes.number,
  accountName: PropTypes.string,
  accountAddress: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
  evoBalance: makeSelectEvoBalance(),
  trxBalance: makeSelectTrxBalance(),
  zaCoinBalance: makeSelectZACoinBalance(),
  accountAddress: makeSelectWalletAddress(),
  accountName: makeSelectAccountName(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onOpenSignupModal: e => {
      e.preventDefault();
      dispatch(openSignupModal());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
