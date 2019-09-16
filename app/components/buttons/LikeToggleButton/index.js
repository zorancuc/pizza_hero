import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

export default function LikeToggleButton({ liked, toggleLiked }) {
  return (
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
          src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/heart-icon.svg"
          alt=""
          className="heart-icon"
        />
      )}
      {liked && (
        <img
          src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/heart-icon-2.svg"
          alt=""
          className="heart-icon-active"
        />
      )}
      {!liked && <div className="like-text">Like</div>}
      {liked && <div className="liked-text">Liked</div>}
      {!liked && <div className="like-count">0</div>}
      {liked && <div className="like-count-1">1</div>}
    </a>
  );
}

LikeToggleButton.propTypes = {
  liked: PropTypes.bool,
  toggleLiked: PropTypes.func,
};
