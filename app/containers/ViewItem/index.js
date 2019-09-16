import React, { useState } from 'react';

import ShareDialog from 'components/ShareDialog';

import ButtonsWrapper from './components/ButtonsWrapper';
import Details from './components/Details';

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
      <ShareDialog
        show={state.showDialog}
        toggleDialog={toggleDialog}
        closeDialog={closeDialog}
        isShareItem
      />
      <div className="section view-character-section">
        <div className="item-header">
          <img
            src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/crown-item.png"
            srcSet="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/crown-item-p-500.png 500w, https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/crown-item.png 703w"
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
