import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import Header from './components/Header';
import Footer from './components/Footer';
import Inventories from './components/Inventories';
import { makeSelectCurrentTab } from './selectors';
import { changeCurrentTab } from './actions';

const key = 'myInventory';

function MyInventory({ currentTab, onChangeCurrentTab }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      <Helmet>
        <title>My Inventory</title>
        <meta
          name="description"
          content="Pizza Heroes application my inventory page"
        />
      </Helmet>
      <div className="section my-inventory-section">
        <div className="container">
          <Header />
          <Inventories
            currentTab={currentTab}
            onChangeCurrentTab={onChangeCurrentTab}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

MyInventory.propTypes = {
  currentTab: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentTab: makeSelectCurrentTab(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentTab: tab => dispatch(changeCurrentTab(tab)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyInventory);
