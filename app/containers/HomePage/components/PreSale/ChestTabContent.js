import React, { useState } from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import classNames from 'classnames';
import { chest } from 'utils/tronsc';
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
  currentTabIndex,
  trxPrice,
  tokenPrice,
}) {
  const [state, setState] = useState({
    selectedItem: 'TRX',
    chestAmount: 1,
  });

  const changeChestAmount = amount => {
    setState({
      ...state,
      chestAmount: amount,
    });
  };

  const purchase = async e => {
    if (e) e.preventDefault();

    console.log('Purchase test', state.selectedItem);

    // let { chestGroupId } = this.state;
    console.log(currentTabIndex);
    console.log(state.chestAmount);
    const chestGroupId = currentTabIndex;

    if (state.selectedItem === 'TRX') {
      await chest.buyChest(
        chestGroupId,
        'TKfB91Xodm5rijBqUsXND5fz5M1Cu8tt9V',
        state.chestAmount,
        true,
      );
    } else if (state.selectedItem === 'TRC10 Token') {
      await chest.buyChest(
        chestGroupId,
        'TKfB91Xodm5rijBqUsXND5fz5M1Cu8tt9V',
        state.chestAmount,
        false,
      );
    }
  };
  const onChangePayType = item => {
    setState({ ...state, selectedItem: item });
  };

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
                <Dropdown
                  onChangePayType={onChangePayType}
                  selectedItem={state.selectedItem}
                />
              </div>
              <AmountTab
                payType={state.selectedItem}
                trxPrice={trxPrice}
                tokenPrice={tokenPrice}
                changeChestAmount={changeChestAmount}
              />
              <div>
                <a
                  href="/#"
                  className="purchase-button w-inline-block"
                  onClick={purchase}
                >
                  <div className="purchase-text">
                    Purchase {state.chestAmount}
                  </div>
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
  currentTabIndex: PropTypes.number,
  trxPrice: PropTypes.number,
  tokenPrice: PropTypes.number,
};
