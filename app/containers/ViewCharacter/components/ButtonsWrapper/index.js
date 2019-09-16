import React from 'react';
import PropTypes from 'prop-types';

import LikeToggleButton from 'components/buttons/LikeToggleButton';

export default function ButtonsWrapper({ liked, toggleLiked, toggleDialog }) {
  return (
    <div className="interaction-buttons-wrapper">
      <a href="/#" className="item-interact-button w-inline-block">
        <img src="/emote-icon-white.svg" alt="" className="item-icon" />
      </a>
      <LikeToggleButton liked={liked} toggleLiked={toggleLiked} />
      <a
        href="/#"
        className="share-button w-inline-block"
        onClick={toggleDialog}
      >
        <img
          src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/share-icon.svg"
          alt=""
          className="item-icon"
        />
      </a>
    </div>
  );
}

ButtonsWrapper.propTypes = {
  liked: PropTypes.bool,
  toggleLiked: PropTypes.func,
  toggleDialog: PropTypes.func,
};
