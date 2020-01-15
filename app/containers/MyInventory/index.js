import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectWalletAddress } from 'containers/App/selectors';
import { chest, egg, hero, item } from 'utils/tronsc';
import reducer from './reducer';
import Header from './components/Header';
import Footer from './components/Footer';
import Inventories from './components/Inventories';
import { makeSelectCurrentTab } from './selectors';
import { changeCurrentTab, changeSearchStr, changeSort } from './actions';

// import Inventory from './components/Inventories/Inventory';
import { PZ_ITEM_GEAR, PZ_ITEM_EMOTE } from './constants';
const key = 'myInventory';

function MyInventory({
  currentTab,
  onChangeCurrentTab,
  onChangeSearchStr,
  accountAddress,
  onChangeSort,
}) {
  useInjectReducer({ key, reducer });
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    inventories: {
      hero: [],
      egg: [],
      gear: [],
      emotion: [],
      chest: [],

      heroInfo: [],
      eggInfo: [],
      gearInfo: [],
      emotionInfo: [],
      chestInfo: [],
    },
  });

  async function updateNFTs() {
    // api Call then
    /* --------------------------------- Chests -------------------------------- */
    const chests = await chest.chestsOfOwner(accountAddress);
    let chestsInfo = [];
    for (let i = 0; i < chests.length; i += 1) {
      // eslint-disable-next-line no-underscore-dangle
      chestsInfo.push(chest.getChestById(parseInt(chests[i]._hex, 16)));
    }
    chestsInfo = await Promise.all(chestsInfo);
    /* --------------------------------- Chests -------------------------------- */

    /* --------------------------------- Eggs -------------------------------- */
    const eggs = await egg.eggsOfOwner(accountAddress);
    let eggsInfo = [];
    for (let i = 0; i < eggs.length; i += 1) {
      // console.log(chests[i]);
      // eslint-disable-next-line no-underscore-dangle
      eggsInfo.push(egg.getEgg(parseInt(eggs[i]._hex, 16)));
    }
    eggsInfo = await Promise.all(eggsInfo);
    /* --------------------------------- Eggs -------------------------------- */

    /* --------------------------------- Heroes -------------------------------- */
    const heroes = await hero.heroesOfOwner(accountAddress);
    let heroesInfo = [];
    for (let i = 0; i < heroes.length; i += 1) {
      // console.log(chests[i]);
      // eslint-disable-next-line no-underscore-dangle
      heroesInfo.push(hero.getHero(parseInt(heroes[i]._hex, 16)));
    }
    heroesInfo = await Promise.all(heroesInfo);
    /* --------------------------------- Heroes -------------------------------- */

    /* --------------------------------- Items -------------------------------- */
    const items = await item.itemsOfOwner(accountAddress);
    const gearItems = [];
    const emotionItems = [];
    let itemsInfo = [];
    const gearItemsInfo = [];
    const emotionItemsInfo = [];
    for (let i = 0; i < items.length; i += 1) {
      // console.log(chests[i]);
      // eslint-disable-next-line no-underscore-dangle
      itemsInfo.push(item.getItem(parseInt(items[i]._hex, 16)));
    }
    itemsInfo = await Promise.all(itemsInfo);
    for (let i = 0; i < items.length; i += 1) {
      console.log(itemsInfo[i].itemType);
      // eslint-disable-next-line no-underscore-dangle
      if (parseInt(itemsInfo[i].itemType._hex, 16) === PZ_ITEM_GEAR) {
        gearItems.push(items[i]);
        gearItemsInfo.push(itemsInfo[i]);
        // eslint-disable-next-line no-underscore-dangle
      } else if (parseInt(itemsInfo[i].itemType._hex, 16) === PZ_ITEM_EMOTE) {
        emotionItems.push(items[i]);
        emotionItemsInfo.push(itemsInfo[i]);
      }
    }
    // console.log(itemInventories);
    /* --------------------------------- Items -------------------------------- */

    // if (result.length > inventoryCount) {
    //   result.slice(0, inventoryCount);
    // } else {
    //   for (let i = result.length; i < inventoryCount; i += 1) {
    //     result[i] = {
    //       empty: true,
    //     };
    //   }
    // }

    setState({
      ...state,
      inventories: {
        hero: heroes,
        egg: eggs,
        gear: gearItems,
        emotion: emotionItems,
        chest: chests,

        heroInfo: heroesInfo,
        eggInfo: eggsInfo,
        gearInfo: gearItemsInfo,
        emotionInfo: emotionItemsInfo,
        chestInfo: chestsInfo,
      },
    });
  }

  const onUpdateInventories = () => {
    setCount(count + 1);
    // alert("OKOK");
    updateNFTs();
  };

  useEffect(() => {
    onChangeSearchStr('');
    onChangeSort('Most Recent');
    updateNFTs();
  }, [accountAddress, onChangeSearchStr]);

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
            inventories={state.inventories}
            onChangeCurrentTab={onChangeCurrentTab}
            onUpdateInventories={onUpdateInventories}
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
  onChangeSearchStr: PropTypes.func,
  onChangeSort: PropTypes.func,
  accountAddress: PropTypes.string,

  // onUpdateInventories: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentTab: makeSelectCurrentTab(),
  accountAddress: makeSelectWalletAddress(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentTab: tab => dispatch(changeCurrentTab(tab)),
    onChangeSearchStr: searchStr => dispatch(changeSearchStr(searchStr)),
    onChangeSort: sort => dispatch(changeSort(sort)),
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
