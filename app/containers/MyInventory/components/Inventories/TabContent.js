import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Inventory from './Inventory';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../constants';

export default function TabContent({ currentTab }) {
  const [state, setState] = useState({
    inventories: [],
  });

  const inventoryCount = 18;

  useEffect(() => {
    // api Call then
    if (currentTab === TAB_MENU_ITEM_CHEST) {
      const result = [
        {
          image:
            'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png',
          icon:
            'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg',
          type: 'white',
        },
        {
          image:
            'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png',
          icon:
            'https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/chest-icon.svg',
          type: 'blue',
        },
      ];

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
  }, [currentTab]);

  return (
    <div className="item-tabs-content w-tab-content">
      <div
        data-w-tab="Tab 1"
        className={classNames('w-tab-pane', {
          'w--tab-active': currentTab === TAB_MENU_ITEM_ALL,
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
          'w--tab-active': currentTab === TAB_MENU_ITEM_HEROES,
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
          'w--tab-active': currentTab === TAB_MENU_ITEM_CHEST,
        })}
      >
        <div className="item-grid-wrapper">
          {state.inventories.map(item =>
            item.empty ? (
              <Inventory empty />
            ) : (
              <Inventory
                image={item.image}
                icon={item.icon}
                type={item.type}
                key={item.id}
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
};
