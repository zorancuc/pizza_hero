import React, { useState } from 'react';

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

function Header() {
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
        evoBalance={9000}
        trxBalance={180000}
        zaCoinBalance={180000}
        setActiveReferral={setActiveReferral}
      />
    </div>
  );
}

export default Header;
