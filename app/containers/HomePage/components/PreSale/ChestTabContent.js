import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import classNames from 'classnames';
import Dropdown from './Dropdown';
import AmountTab from './AmountTab';
import Marquee from './Marquee';

export default function ChestTabContent({
  tabName,
  title,
  titleClass,
  image,
  chestNumber,
  chestTotalNumber,
  bgClass,
  active,
}) {
  return (
    <div
      data-w-tab={tabName}
      className={classNames('chest-tab-pane', 'w-tab-pane', bgClass, {
        'w--tab-active': active,
      })}
    >
      <div className="container">
        <div className="w-row">
          <div className="chest-tab-columns w-col w-col-6">
            <div className="chest-hero-wrapper">
              <img src={image} alt="" className="main-chest-image" />
              <h2 className={classNames('chest-main-name', titleClass)}>
                {title}
              </h2>
              <div className="chest-number-wrapper">
                <h4 className="chest-number">
                  {accounting.formatNumber(chestNumber, 0, ',')}
                </h4>
                <h4 className="chest-slash">/</h4>
                <h4 className="chest-number-total">
                  {accounting.formatNumber(chestTotalNumber, 0, ',')}
                </h4>
              </div>
            </div>
          </div>
          <div className="chest-tab-columns w-col w-col-6">
            <div className="div-block">
              <h3 className="chests-available">
                Only{' '}
                <strong>{accounting.formatNumber(chestNumber, 0, ',')}</strong>/
                {accounting.formatNumber(chestTotalNumber, 0, ',')} chests
                available
              </h3>
              <ul className="list">
                <li className="list-item">
                  <div className="chest-info-item">Gen 0 Hero</div>
                </li>
                <li className="list-item">
                  <div className="chest-info-item">
                    At least <span className="blue-text">1 rare item</span> or
                    better
                  </div>
                </li>
                <li className="list-item">
                  <div className="chest-info-item">Presale badge on items</div>
                </li>
                <li className="list-item">
                  <div className="chest-info-item">
                    Extremely low chance of{' '}
                    <span className="yellow-text">fancy hero</span> and{' '}
                    <span className="yellow-text">legendary items</span>.
                  </div>
                </li>
              </ul>
              <a href="/#" className="view-all-chest-items-link">
                View all Items Available in Chest
              </a>
              <div className="pay-using">
                <div className="pay-using-text">Pay using:</div>
                <Dropdown />
              </div>
              <AmountTab />
              <div>
                <a href="/#" className="purchase-button w-inline-block">
                  <div className="purchase-text">Purchase 1</div>
                </a>
                <a href="/#" className="help-purchasing-link">
                  Need help buying?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-negative-margin">
        <div className="marquee-outer">
          <div className="marquee-inner w-clearfix">
            <Marquee />
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
}

ChestTabContent.propTypes = {
  tabName: PropTypes.string,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  image: PropTypes.string,
  chestNumber: PropTypes.number,
  chestTotalNumber: PropTypes.number,
  bgClass: PropTypes.string,
  active: PropTypes.bool,
};
