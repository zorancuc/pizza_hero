import React from 'react';
import PropTypes from 'prop-types';

import TabMenu from './TabMenu';
import TabContent from './TabContent';

export default function Inventories({ currentTab, onChangeCurrentTab }) {
  return (
    <div className="item-tabs w-tabs">
      <TabMenu
        currentTab={currentTab}
        onChangeCurrentTab={onChangeCurrentTab}
      />
      <TabContent currentTab={currentTab} />
    </div>
  );
}

Inventories.propTypes = {
  currentTab: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
};
