import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { createStructuredSelector } from 'reselect';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../constants';

function TabMenu({ currentTab, onChangeCurrentTab, inventories }) {
  const [state, setState] = useState({
    itemBalance: 0,
    gearBalance: 0,
    heroBalance: 0,
    emotionBalance: 0,
    chestBalance: 0,
  });

  useEffect(() => {
    // async function fetchData() {

    const chestBal = inventories.chest.length;
    const gearItemBal = inventories.gear.length;
    const emotionItemBal = inventories.emotion.length;
    const eggBal = inventories.egg.length;
    const heroBal = inventories.hero.length;

    setTimeout(() => {
      setState({
        ...state,
        itemBalance: chestBal + gearItemBal + emotionItemBal + eggBal + heroBal,
        gearBalance: gearItemBal,
        heroBalance: eggBal + heroBal,
        emotionBalance: emotionItemBal,
        chestBalance: chestBal,
      });
    }, 500);
  }, [inventories]);

  const clickTab = tab => async e => {
    e.preventDefault();

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
        <div>All Items ({state.itemBalance})</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 2"
        onClick={clickTab('heroes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_HEROES,
        })}
      >
        <div>Heroes ({state.heroBalance})</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 3"
        onClick={clickTab('gear')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_GEAR,
        })}
      >
        <div>Gear ({state.gearBalance})</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 4"
        onClick={clickTab('emotes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_EMOTES,
        })}
      >
        <div>Emotes ({state.emotionBalance})</div>
      </a>
      <a
        href="/#"
        data-w-tab="Tab 5"
        onClick={clickTab('chest')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', {
          'w--current': currentTab === TAB_MENU_ITEM_CHEST,
        })}
      >
        <div>Chests ({state.chestBalance})</div>
      </a>
    </div>
  );
}

TabMenu.propTypes = {
  currentTab: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
  inventories: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TabMenu);
