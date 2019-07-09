import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TabPaneItem({ tabName, amountTrx, active }) {
  return (
    <div
      data-w-tab={tabName}
      className={classNames('chest-purchase-total-tab-pane', 'w-tab-pane', { 'w--tab-active': active })}
    >
      <div className="chest-purchase-total-tab-content">
        <div className="chest-purchase-amount">
          Total: {amountTrx} TRX
        </div>
      </div>
    </div>
  );
}

TabPaneItem.propTypes = {
  tabName: PropTypes.string,
  amountTrx: PropTypes.number,
  active: PropTypes.bool,
};
