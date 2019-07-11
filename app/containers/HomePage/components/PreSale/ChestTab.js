import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ChestTab({
  tabName,
  linkClass,
  image,
  title,
  titleClass,
  trxAmount,
  current,
  last,
  onSelectTab,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="/#"
      className={classNames(
        'tab-link',
        linkClass,
        'w-inline-block',
        'w-tab-link',
        {
          'w--current': current,
        },
        {
          'last-tab': last,
        },
      )}
      onClick={onSelectTab}
    >
      <div className="tab-content">
        <img src={image} alt="" className="chest-image" />
        <div className={classNames('chest-tab-link-name', titleClass)}>
          {title}
        </div>
        <div className="trx-amount">{trxAmount} TRX</div>
      </div>
    </a>
  );
}

ChestTab.propTypes = {
  tabName: PropTypes.string,
  linkClass: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  trxAmount: PropTypes.number,
  current: PropTypes.bool,
  last: PropTypes.bool,
  onSelectTab: PropTypes.func,
};
