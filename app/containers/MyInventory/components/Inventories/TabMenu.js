import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { chest } from 'utils/tronsc';
import { createStructuredSelector } from 'reselect';
import { makeSelectWalletAddress } from 'containers/App/selectors';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../constants';

function TabMenu({ currentTab, onChangeCurrentTab, accountAddress }) {
  const clickTab = tab => async e => {
    e.preventDefault();
    console.log(accountAddress);
    if (tab === TAB_MENU_ITEM_CHEST) {
      await chest.getBoughtChests(accountAddress);
    }
    onChangeCurrentTab(tab);
  };

  return (
    <div className="item-tabs-menu w-tab-menu">
      <a
        href="/#"
        data-w-tab="Tab 1"
        onClick={clickTab('all')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_ALL,
        })}
      >
        <div>All Items (8)</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 2"
        onClick={clickTab('heroes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_HEROES,
        })}
      >
        <div>Heroes (1)</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 3"
        onClick={clickTab('gear')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_GEAR,
        })}
      >
        <div>Gear (4)</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 4"
        onClick={clickTab('emotes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_EMOTES,
        })}
      >
        <div>Emotes (1)</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 5"
        onClick={clickTab('chest')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_CHEST,
        })}
      >
        <div>Chests (2)</div>
      </a>
    </div>
  );
}

TabMenu.propTypes = {
  currentTab: PropTypes.string,
  accountAddress: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  accountAddress: makeSelectWalletAddress(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TabMenu);
