import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

export default function ButtonsWrapper({ liked, toggleLiked, toggleDialog }) {
  return (
    <div className="interaction-buttons-wrapper">
      <a href="/#" className="item-interact-button w-inline-block">
        <img
          src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/gear-icon-2-white.svg"
          alt=""
          className="item-icon"
        />
      </a>
      <a
        href="/#"
        className={classNames('like-button', 'w-inline-block', {
          'like-bg-color': !liked,
          'liked-bg-color': liked,
        })}
        onClick={toggleLiked}
      >
        {!liked && (
          <img
            src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/heart-icon.svg"
            alt=""
            className="heart-icon"
          />
        )}
        {liked && (
          <img
            src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/heart-icon-2.svg"
            alt=""
            className="heart-icon-active"
          />
        )}
        {!liked && <div className="like-text">Like</div>}
        {liked && <div className="liked-text">Liked</div>}
        {!liked && <div className="like-count">0</div>}
        {liked && <div className="like-count-1">1</div>}
      </a>
      <a
        href="/#"
        className="share-button w-inline-block"
        onClick={toggleDialog}
      >
        <img
          src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/share-icon.svg"
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
