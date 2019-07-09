import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TabItem({ tabName, amount, current }) {
  return (
    <a
      data-w-tab={tabName}
      className={classNames('chest-purchase-amount-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': current })}
    >
      <div className="chest-purchase-amount">{amount}</div>
    </a>
  );
}

TabItem.propTypes = {
  tabName: PropTypes.string,
  amount: PropTypes.number,
  current: PropTypes.bool,
};
