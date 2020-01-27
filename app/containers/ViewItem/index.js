import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import ShareDialog from 'components/ShareDialog';

import {
  makeSelectMetaData,
  makeSelectId,
} from 'containers/MyInventory/selectors';
import ButtonsWrapper from './components/ButtonsWrapper';
import Details from './components/Details';

export function ViewItem({ metaData, id, match }) {
  const [state, setState] = useState({
    liked: false,
    showDialog: false,
  });

  useEffect(() => {
    console.log('view_itemview_itemview_itemview_item');
    console.log(match.params.id);
    console.log(metaData);
    console.log(id);

    setState({
      ...state,
    });
  }, []);

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
        <Details metaData={metaData} id={id} />
      </div>
    </div>
  );
}

ViewItem.propTypes = {
  metaData: PropTypes.object,
  id: PropTypes.number,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  metaData: makeSelectMetaData(),
  id: makeSelectId(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(ViewItem);
