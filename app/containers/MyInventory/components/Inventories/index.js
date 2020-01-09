import React from 'react';
import PropTypes from 'prop-types';

import TabMenu from './TabMenu';
import TabContent from './TabContent';

export default function Inventories({
  currentTab,
  onChangeCurrentTab,
  inventories,
  onUpdateInventories,
}) {
  return (
    <div className="item-tabs w-tabs">
      <TabMenu
        currentTab={currentTab}
        onChangeCurrentTab={onChangeCurrentTab}
        inventories={inventories}
      />
      <TabContent
        currentTab={currentTab}
        onUpdateInventories={onUpdateInventories}
        inventories={inventories}
      />
    </div>
  );
}

Inventories.propTypes = {
  currentTab: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
  onUpdateInventories: PropTypes.func,
  inventories: PropTypes.object,
};
