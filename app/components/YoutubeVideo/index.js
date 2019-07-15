import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

export default function YoutubeVideo({ close }) {
  const opts = {
    playerVars: {
      height: '390',
      width: '640',
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="w-lightbox-backdrop" style={{ opacity: 1 }}>
      <div className="w-lightbox-container">
        <div className="w-lightbox-content">
          <div className="w-lightbox-view" style={{ opacity: 1 }}>
            <div className="w-lightbox-frame">
              <figure className="w-lightbox-figure">
                <img
                  className="w-lightbox-img w-lightbox-image"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22940%22%20height=%22528%22/%3E"
                  alt=""
                />
                <YouTube
                  videoId="bRzTwqBk7Ho"
                  opts={opts}
                  className="embedly-embed w-lightbox-embed"
                />
              </figure>
            </div>
          </div>
          <div className="w-lightbox-spinner w-lightbox-hide" />
          <div className="w-lightbox-control w-lightbox-left w-lightbox-inactive" />
          <div className="w-lightbox-control w-lightbox-right w-lightbox-inactive" />
          <div
            href="/#"
            className="w-lightbox-control w-lightbox-close"
            onClick={close}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className="w-lightbox-strip" />
      </div>
    </div>
  );
}

YoutubeVideo.propTypes = {
  close: PropTypes.func,
};
