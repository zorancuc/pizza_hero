import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

export default function Dialog({ show, toggleDialog }) {
  return (
    <div className={classNames('share-modal-wrapper', { show })}>
      <div className={classNames('share-modal', { show })}>
        <div className="share-image share-item" />
        <div className="share-info">
          <div className="share-a-link">Share a link</div>
          <div className="share-link-wrapper">
            <div className="share-link">
              https://blockbears.io/purchase?r=5NST612897be1
            </div>
            <a href="#" className="copy-button w-inline-block">
              <div>copy</div>
            </a>
            <div className="share-a-link-overlay" />
          </div>
          <div className="social-share-links-wrapper">
            <a href="#" className="social-share-button w-inline-block">
              <img src="/facebook-f-icon.svg" alt="" className="social-icon" />
              <div className="social-share-text">Share on Facebook</div>
            </a>
            <a href="#" className="social-share-button twitter w-inline-block">
              <img
                src="/twitter-icon-white.svg"
                alt=""
                className="social-icon"
              />
              <div className="social-share-text">Share on Twitter</div>
            </a>
          </div>
        </div>
        <a href="#" className="close-share-modal w-inline-block" onClick={toggleDialog}>
          <img src="/close.svg" width="15" alt="" />
        </a>
      </div>
      <div className="share-pop-up-bg" />
    </div>
  );
}

Dialog.show = {
  show: PropTypes.bool,
  toggleDialog: PropTypes.func,
};
