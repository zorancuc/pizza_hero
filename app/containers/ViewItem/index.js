import React, { useState } from 'react';

import ButtonsWrapper from './components/ButtonsWrapper';
import Details from './components/Details';

import '!file-loader?name=[name].[ext]!../../images/crown-item.png';
import '!file-loader?name=[name].[ext]!../../images/crown-item-p-500.png';
import '!file-loader?name=[name].[ext]!../../images/gear-icon-2-white.svg';
import '!file-loader?name=[name].[ext]!../../images/heart-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/heart-icon-2.svg';
import '!file-loader?name=[name].[ext]!../../images/share-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/price-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/gift-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/owner-image.jpg';
import '!file-loader?name=[name].[ext]!../../images/circle-dots.svg';
import '!file-loader?name=[name].[ext]!../../images/circle-dots-active.svg';
import '!file-loader?name=[name].[ext]!../../images/facebook-f-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/twitter-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/close.svg';
import Dialog from './components/Dialog';

export default function ViewItem() {
  const [state, setState] = useState({
    liked: false,
    showDialog: false,
  });
  const toggleLiked = e => {
    e.preventDefault();
    setState({
      ...state,
      liked: !state.liked,
    });
  };
  const toggleDialog = e => {
    e.preventDefault();
    setState({
      ...state,
      showDialog: !state.showDialog,
    });
  };
  const closeDialog = () => {
    setState({
      ...state,
      showDialog: false,
    });
  };
  return (
    <div>
      <Dialog
        show={state.showDialog}
        toggleDialog={toggleDialog}
        closeDialog={closeDialog}
      />
      <div className="section view-character-section">
        <div className="item-header">
          <img
            src="/crown-item.png"
            srcSet="/crown-item-p-500.png 500w, /crown-item.png 703w"
            sizes="100vw"
            alt=""
            className="main-item-image"
          />
          <ButtonsWrapper
            liked={state.liked}
            toggleLiked={toggleLiked}
            toggleDialog={toggleDialog}
          />
        </div>
        <Details />
      </div>
    </div>
  );
}
