import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { chest, item, egg } from 'utils/tronsc';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { push } from 'connected-react-router';
import { viewCharacter } from 'containers/MyInventory/actions';

import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  // TAB_MENU_ITEM_GEAR,
  // TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../../constants';

import './styles.scss';

function Inventory({
  image,
  icon,
  type,
  empty,
  id,
  currentTab,
  onViewCharacter,
}) {
  const clickInventory = async e => {
    console.log(id);
    console.log(currentTab);
    if (currentTab === TAB_MENU_ITEM_CHEST) {
      e.preventDefault();
      await chest.openChest(id);
    } else if (currentTab === TAB_MENU_ITEM_ALL) {
      const itemData = await item.getItem(id);
      onViewCharacter(itemData, TAB_MENU_ITEM_ALL, id);
    } else if (currentTab === TAB_MENU_ITEM_HEROES) {
      const eggData = await egg.getEgg(id);
      onViewCharacter(eggData, TAB_MENU_ITEM_HEROES, id);
    }
  };

  return (
    <div>
      {!empty && (
        <Link
          to="/view-character"
          className={classNames('item', 'w-inline-block', type)}
          onClick={clickInventory}
        >
          <div className="item-image-wrapper">
            {image && <img src={image} alt="" className="item-image" />}
            <div className="category-icon-wrapper">
              <img src={icon} alt="" className="category-icon" />
            </div>
          </div>
          <div className="item-tooltip">
            <div className="item-type">
              <span className="legendary">Legendary</span> | Item
            </div>
            <div className="item-name">Skullhunter Mask</div>
            <div className="tooltip-arrow" />
          </div>
        </Link>
      )}
      {empty && <div className="item empty" />}
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onViewCharacter: (metaData, characterType, id) => {
      dispatch(viewCharacter(metaData, characterType, id));
    },
  };
}

Inventory.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  empty: PropTypes.bool,
  id: PropTypes.number,
  currentTab: PropTypes.number,
  onViewCharacter: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Inventory);
