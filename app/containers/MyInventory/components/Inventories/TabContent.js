import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectWalletAddress } from 'containers/App/selectors';

import Inventory from './Inventory';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
  CHEST_PNG_STR,
  ITEM_PNG_STR,
  INVENTORY_TYPE_ITEM,
  INVENTORY_TYPE_EGG,
  INVENTORY_TYPE_HERO,
  INVENTORY_TYPE_CHEST,
  ITEM_TYPE_STR,
  ITEM_BCK_STR,
  // INVENTORY_TYPE_STRING,
} from '../../constants';
import {
  makeSelectSearchStr,
  makeSelectSaleFilter,
  makeSelectSireFilter,
  makeSelectSort,
} from '../../selectors';

function TabContent({
  currentTab,
  inventories,
  onUpdateInventories,
  searchStr,
  saleFlag,
  sireFlag,
  sort,
}) {
  const [state, setState] = useState({
    inventoryContents: [],
  });

  const inventoryCount = 20;

  useEffect(() => {
    function updateChests() {
      const result = [];
      const chestsInfo = inventories.chestInfo;

      console.log(searchStr);

      const chests = inventories.chest;
      for (let i = 0; i < chestsInfo.length; i += 1) {
        const imgUrl = `https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/${
          CHEST_PNG_STR[chestsInfo[i].name]
        }-chest.png`;
        // eslint-disable-next-line no-underscore-dangle

        let metaStr = '';
        metaStr = metaStr.concat(chestsInfo[i].name);
        metaStr = metaStr.concat(' Chest');
        metaStr = metaStr.toLowerCase();

        console.log(metaStr);
        if (metaStr.includes(searchStr.toLowerCase())) {
          result.push({
            image: imgUrl,
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg',
            type: CHEST_PNG_STR[chestsInfo[i].name],
            // eslint-disable-next-line no-underscore-dangle
            id: parseInt(chests[i]._hex, 16),
            inventorySubType: chestsInfo[i].name,
            inventoryType: INVENTORY_TYPE_CHEST,
            inventoryName: '',
          });
        }
      }
      return result;
    }

    function updateHeroes() {
      const result = [];
      const eggs = inventories.egg;
      // const eggsInfo = inventories.eggInfo;

      let metaStr = '';
      metaStr = metaStr.concat(' Egg');
      metaStr = metaStr.toLowerCase();
      for (let i = 0; i < eggs.length; i += 1) {
        if (metaStr.includes(searchStr.toLowerCase())) {
          result.push({
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/Egg.png',
            type: 'egg',
            // eslint-disable-next-line no-underscore-dangle
            id: parseInt(eggs[i]._hex, 16),
            inventoryType: INVENTORY_TYPE_EGG,
          });
        }
      }

      metaStr = '';
      metaStr = metaStr.concat(' Hero');
      metaStr = metaStr.toLowerCase();
      const heroes = inventories.hero;
      // const heroesInfo = inventories.heroInfo;
      for (let i = 0; i < heroes.length; i += 1) {
        if (metaStr.includes(searchStr.toLowerCase())) {
          result.push({
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/hero-icon.svg',
            type: 'hero',
            // eslint-disable-next-line no-underscore-dangle
            id: parseInt(heroes[i]._hex, 16),
            inventoryType: INVENTORY_TYPE_HERO,
          });
        }
      }
      return result;
    }

    function updateGears() {
      const result = [];
      const gears = inventories.gear;
      const gearsInfo = inventories.gearInfo;

      for (let i = 0; i < gears.length; i += 1) {
        let metaStr = '';
        metaStr = metaStr.concat(ITEM_TYPE_STR[gearsInfo[i].itemRarity]);
        metaStr = metaStr.concat(' Item');
        metaStr = metaStr.concat(gearsInfo[i].name);
        metaStr = metaStr.toLowerCase();
        // eslint-disable-next-line no-underscore-dangle
        const itemid = gearsInfo[i].itemGroupId;
        if (metaStr.includes(searchStr.toLowerCase())) {
          result.push({
            image: `https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/itemid_${itemid}.png`,
            icon: `https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/${
              ITEM_PNG_STR[gearsInfo[i].itemRarity]
            }.png`,
            type: ITEM_BCK_STR[gearsInfo[i].itemRarity],
            // eslint-disable-next-line no-underscore-dangle
            id: parseInt(gears[i]._hex, 16),
            inventorySubType: ITEM_TYPE_STR[gearsInfo[i].itemRarity],
            inventoryType: INVENTORY_TYPE_ITEM,
            inventoryName: gearsInfo[i].itemName,
          });
        }
      }
      return result;
    }

    function updateEmotions() {
      const result = [];
      const emotions = inventories.emotion;
      const emotionsInfo = inventories.emotionInfo;
      for (let i = 0; i < emotions.length; i += 1) {
        let metaStr = '';
        metaStr = metaStr.concat(ITEM_TYPE_STR[emotionsInfo[i].itemRarity]);
        metaStr = metaStr.concat(' Item');
        metaStr = metaStr.concat(emotionsInfo[i].name);
        metaStr = metaStr.toLowerCase();
        // eslint-disable-next-line no-underscore-dangle
        const itemid = emotionsInfo[i].itemGroupId;
        if (metaStr.includes(searchStr.toLowerCase())) {
          result.push({
            image: `https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/itemid_${itemid}.png`,
            icon: `https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/${
              ITEM_PNG_STR[emotionsInfo[i].itemRarity]
            }.png`,
            type: ITEM_BCK_STR[emotionsInfo[i].itemRarity],
            id: itemid,
            inventorySubType: ITEM_TYPE_STR[emotionsInfo[i].itemRarity],
            inventoryType: INVENTORY_TYPE_ITEM,
            inventoryName: emotionsInfo[i].itemName,
          });
        }
      }
      return result;
    }

    function updateNFTs() {
      // api Call then
      // console.log(inventories);
      // console.log(sireFlag, saleFlag);
      let result = [];
      if (sireFlag === 1) {
        result = [];
      } else if (saleFlag === 1) {
        result = [];
      } else {
        // eslint-disable-next-line no-lonely-if
        if (currentTab === TAB_MENU_ITEM_CHEST) {
          result = updateChests();
        } else if (currentTab === TAB_MENU_ITEM_HEROES) {
          result = updateHeroes();
        } else if (currentTab === TAB_MENU_ITEM_ALL) {
          result = updateChests();
          result = result.concat(updateHeroes());
          result = result.concat(updateGears());
          result = result.concat(updateEmotions());
        } else if (currentTab === TAB_MENU_ITEM_GEAR) {
          result = updateGears();
        } else if (currentTab === TAB_MENU_ITEM_EMOTES) {
          result = updateEmotions();
        }
      }

      if (result.length > inventoryCount) {
        result.slice(0, inventoryCount);
      } else {
        for (let i = result.length; i < inventoryCount; i += 1) {
          result[i] = {
            empty: true,
          };
        }
      }

      console.log(result);
      console.log(sort);
      setState({
        ...state,
        inventoryContents: result,
      });
    }
    updateNFTs();
  }, [
    currentTab,
    inventories,
    onUpdateInventories,
    searchStr,
    saleFlag,
    sireFlag,
    sort,
  ]);

  return (
    <div className="item-tabs-content w-tab-content">
      <div
        data-w-tab="Tab 5"
        className={classNames('w-tab-pane', 'w--tab-active')}
      >
        <div className="item-grid-wrapper">
          {state.inventoryContents.map((inventory, index) =>
            inventory.empty ? (
              // eslint-disable-next-line react/no-array-index-key
              <Inventory empty key={index} />
            ) : (
              <Inventory
                image={inventory.image}
                icon={inventory.icon}
                type={inventory.type}
                id={inventory.id}
                currentTab={currentTab}
                inventoryType={inventory.inventoryType}
                inventoryName={inventory.inventoryName}
                inventorySubType={inventory.inventorySubType}
                onUpdateInventories={onUpdateInventories}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

TabContent.propTypes = {
  currentTab: PropTypes.string,
  onUpdateInventories: PropTypes.func,
  inventories: PropTypes.object,
  searchStr: PropTypes.string,
  saleFlag: PropTypes.number,
  sireFlag: PropTypes.number,
  sort: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  accountAddress: makeSelectWalletAddress(),
  searchStr: makeSelectSearchStr(),
  saleFlag: makeSelectSaleFilter(),
  sireFlag: makeSelectSireFilter(),
  sort: makeSelectSort(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TabContent);
