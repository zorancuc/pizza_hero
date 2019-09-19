import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectWalletAddress } from 'containers/App/selectors';
import { chest, egg, item } from 'utils/tronsc';

import Inventory from './Inventory';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../constants';

function TabContent({ currentTab, accountAddress }) {
  const [state, setState] = useState({
    inventories: [],
  });

  const inventoryCount = 18;

  useEffect(() => {
    async function updateNFTs() {
      // api Call then
      const result = [];
      if (currentTab === TAB_MENU_ITEM_CHEST) {
        const chests = await chest.chestsOfOwner(accountAddress);
        for (let i = 0; i < chests.length; i += 1) {
          result.push({
            image:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png',
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg',
            type: 'white',
            // eslint-disable-next-line no-underscore-dangle
            id: chests[i]._hex,
          });
        }
      } else if (currentTab === TAB_MENU_ITEM_HEROES) {
        console.log(accountAddress);
        const eggs = await egg.eggsOfOwner(accountAddress);
        console.log(eggs);
        for (let i = 0; i < eggs.length; i += 1) {
          result.push({
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/hero-icon.svg',
            type: 'hero',
            // eslint-disable-next-line no-underscore-dangle
            id: eggs[i]._hex,
          });
        }
      } else if (currentTab === TAB_MENU_ITEM_ALL) {
        console.log(accountAddress);
        const items = await item.itemsOfOwner(accountAddress);
        console.log(items);
        for (let i = 0; i < items.length; i += 1) {
          result.push({
            icon:
              'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/hero-icon.svg',
            type: 'item',
            // eslint-disable-next-line no-underscore-dangle
            id: items[i]._hex,
          });
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

      setState({
        inventories: result,
      });
    }
    updateNFTs();
  }, [currentTab, accountAddress]);

  return (
    <div className="item-tabs-content w-tab-content">
      <div
        data-w-tab="Tab 1"
        className={classNames('w-tab-pane', {
          'w--tab-active': currentTab === 101,
        })}
      >
        <div className="item-grid-wrapper">
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/dancing-icon_1dancing-icon.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/emote-icon.svg"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg"
            type="blue"
          />
          <Inventory
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/hero-icon.svg"
            type="hero"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg"
            type="white"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/staff_1staff.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/bear-mask_1bear-mask.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="purple"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/legs_1legs.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="gold"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="gold"
          />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
        </div>
      </div>
      <div
        data-w-tab="Tab 2"
        className={classNames('w-tab-pane', {
          'w--tab-active': currentTab === 100,
        })}
      >
        <div className="item-grid-wrapper">
          <Inventory
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/hero-icon.svg"
            type="hero"
          />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
        </div>
      </div>
      <div
        data-w-tab="Tab 3"
        className={classNames('w-tab-pane', {
          'w--tab-active': currentTab === TAB_MENU_ITEM_GEAR,
        })}
      >
        <div className="item-grid-wrapper">
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/staff_1staff.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/bear-mask_1bear-mask.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="purple"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/legs_1legs.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="gold"
          />
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gear-icon-2.svg"
            type="gold"
          />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
        </div>
      </div>
      <div
        data-w-tab="Tab 4"
        className={classNames('w-tab-pane', {
          'w--tab-active': currentTab === TAB_MENU_ITEM_EMOTES,
        })}
      >
        <div className="item-grid-wrapper">
          <Inventory
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/dancing-icon_1dancing-icon.png"
            icon="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/emote-icon.svg"
          />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
          <Inventory empty />
        </div>
      </div>
      <div
        data-w-tab="Tab 5"
        className={classNames('w-tab-pane', {
          'w--tab-active':
            currentTab === TAB_MENU_ITEM_CHEST ||
            TAB_MENU_ITEM_HEROES ||
            TAB_MENU_ITEM_ALL,
        })}
      >
        <div className="item-grid-wrapper">
          {state.inventories.map((inventory, index) =>
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
  accountAddress: PropTypes.string,
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
)(TabContent);
