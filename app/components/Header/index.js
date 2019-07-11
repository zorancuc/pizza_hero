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
    showReferral: false,
  });
  const toggleReferral = event => {
    event.preventDefault();
    setState({
      showReferral: !state.showReferral,
    });
  };
  return (
    <div>
      <FriendRefferal
        show={state.showReferral}
        toggleReferral={toggleReferral}
      />
      <NavbarWrapper
        evoBalance={9000}
        trxBalance={180000}
        zaCoinBalance={180000}
        toggleReferral={toggleReferral}
      />
    </div>
  );
}

export default Header;
