import React from 'react';
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
  return (
    <div className="item-tabs-content w-tab-content">
      <div data-w-tab="Tab 1" className={classNames('w-tab-pane', { 'w--tab-active': currentTab === TAB_MENU_ITEM_ALL })}>
        <div className="item-grid-wrapper">
          <Inventory image="/dancing-icon_1dancing-icon.png" icon="/emote-icon.svg" />
          <Inventory image="/blue-chest.png" icon="/chest-icon.svg" type="blue" />
          <Inventory icon="/hero-icon.svg" type="hero" />
          <Inventory image="/blue-chest.png" icon="/chest-icon.svg" type="white" />
          <Inventory image="/staff_1staff.png" icon="/gear-icon-2.svg" />
          <Inventory image="/bear-mask_1bear-mask.png" icon="/gear-icon-2.svg" type="purple" />
          <Inventory image="/legs_1legs.png" icon="/gear-icon-2.svg" type="gold" />
          <Inventory image="/chest.png" icon="/gear-icon-2.svg" type="gold" />
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
      <div data-w-tab="Tab 2" className={classNames('w-tab-pane', { 'w--tab-active': currentTab === TAB_MENU_ITEM_HEROES })}>
        <div className="item-grid-wrapper">
          <Inventory icon="/hero-icon.svg" type="hero" />
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
      <div data-w-tab="Tab 3" className={classNames('w-tab-pane', { 'w--tab-active': currentTab === TAB_MENU_ITEM_GEAR })}>
        <div className="item-grid-wrapper">
          <Inventory image="/staff_1staff.png" icon="/gear-icon-2.svg" />
          <Inventory image="/bear-mask_1bear-mask.png" icon="/gear-icon-2.svg" type="purple" />
          <Inventory image="/legs_1legs.png" icon="/gear-icon-2.svg" type="gold" />
          <Inventory image="/chest.png" icon="/gear-icon-2.svg" type="gold" />
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
      <div data-w-tab="Tab 4" className={classNames('w-tab-pane', { 'w--tab-active': currentTab === TAB_MENU_ITEM_EMOTES })}>
        <div className="item-grid-wrapper">
          <Inventory image="/dancing-icon_1dancing-icon.png" icon="/emote-icon.svg" />
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
      <div data-w-tab="Tab 5" className={classNames('w-tab-pane', { 'w--tab-active': currentTab === TAB_MENU_ITEM_CHEST })}>
        <div className="item-grid-wrapper">
          <Inventory image="/blue-chest.png" icon="/chest-icon.svg" type="white" />
          <Inventory image="/blue-chest.png" icon="/chest-icon.svg" type="blue" />
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
    </div>
  );
}

TabContent.propTypes = {
  currentTab: PropTypes.string,
};
