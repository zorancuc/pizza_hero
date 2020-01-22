import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { chest, item, egg, hero } from 'utils/tronsc';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { push } from 'connected-react-router';
import { viewCharacter } from 'containers/MyInventory/actions';

import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  // TAB_MENU_ITEM_GEAR,
  // TAB_MENU_ITEM_EMOTES,
  // TAB_MENU_ITEM_CHEST,
  INVENTORY_TYPE_ITEM,
  INVENTORY_TYPE_EGG,
  INVENTORY_TYPE_HERO,
  INVENTORY_TYPE_CHEST,
  INVENTORY_TYPE_STRING,
} from '../../../constants';

import './styles.scss';

function Inventory({
  image,
  icon,
  type,
  empty,
  id,
  inventoryType,
  inventoryName,
  currentTab,
  onViewCharacter,
  inventorySubType,
  onUpdateInventories,
  history,
}) {
  // console.log("OKOKOK");
  // console.log(useHistory());
  // const history = useHistory();
  const clickInventory = async e => {
    console.log(id);
    console.log(currentTab);
    console.log(inventoryType);
    console.log(history);
    if (inventoryType === INVENTORY_TYPE_CHEST) {
      e.preventDefault();
      await chest.openChest(id);
    } else if (inventoryType === INVENTORY_TYPE_ITEM) {
      e.preventDefault();
      const itemData = await item.getItem(id);
      onViewCharacter(itemData, TAB_MENU_ITEM_ALL, id);
      history.push('/view-item');
    } else if (inventoryType === INVENTORY_TYPE_EGG) {
      e.preventDefault();
      await egg.openEgg(id);
    } else if (inventoryType === INVENTORY_TYPE_HERO) {
      e.preventDefault();
      const heroData = await hero.getHero(id);
      onViewCharacter(heroData, TAB_MENU_ITEM_HEROES, id);
      history.push('/view-character');
    }
    onUpdateInventories();
  };

  return (
    <div>
      {!empty && (
        <Link
          onClick={clickInventory}
          to="/view-character"
          className={classNames('item', 'w-inline-block', type)}
        >
          <div className="item-image-wrapper">
            {image && <img src={image} alt="" className="item-image" />}
            <div className="category-icon-wrapper">
              <img src={icon} alt="" className="category-icon" />
            </div>
          </div>
          <div className="item-tooltip">
            <div className="item-type">
              <span className="legendary">{inventorySubType}</span>
              {INVENTORY_TYPE_STRING[inventoryType]}
            </div>
            <div className="item-name">{inventoryName}</div>
            <div className="item-id">#{id}</div>
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
  currentTab: PropTypes.string,
  onViewCharacter: PropTypes.func,
  inventoryType: PropTypes.number,
  inventoryName: PropTypes.string,
  inventorySubType: PropTypes.string,
  onUpdateInventories: PropTypes.func,
  history: PropTypes.object,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withRouter(Inventory));
