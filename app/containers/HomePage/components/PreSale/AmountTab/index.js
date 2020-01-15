import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TabItem from './TabItem';
import TabPaneItem from './TabPaneItem';

export default function AmountTab({
  trxPrice,
  tokenPrice,
  payType,
  changeChestAmount,
}) {
  const [state, setState] = useState({
    currentAmount: 1,
    totalPrice: 0,
  });

  useEffect(() => {
    console.log(tokenPrice);
    console.log(trxPrice);
    console.log(payType);
    if (payType === 'TRX') {
      setState({
        ...state,
        totalPrice: trxPrice * state.currentAmount,
      });
    } else if (payType === 'TRC10 Token') {
      setState({
        ...state,
        totalPrice: tokenPrice * state.currentAmount,
      });
    }
  }, [tokenPrice, trxPrice, payType]);
  const onChangeAmount = amount => e => {
    e.preventDefault();
    changeChestAmount(amount);
    if (payType === 'TRX') {
      setState({
        ...state,
        currentAmount: amount,
        totalPrice: trxPrice * amount,
      });
    } else if (payType === 'TRC10 Token') {
      setState({
        ...state,
        currentAmount: amount,
        totalPrice: tokenPrice * amount,
      });
    }
  };
  return (
    <div className="amount-tabs w-tabs">
      <div className="amount-tabs-menu w-tab-menu">
        <TabItem
          tabName="Tab 1"
          amount={1}
          current={state.currentAmount === 1}
          onChangeAmount={onChangeAmount(1)}
        />
        <TabItem
          tabName="Tab 2"
          amount={5}
          current={state.currentAmount === 5}
          onChangeAmount={onChangeAmount(5)}
        />
        <TabItem
          tabName="Tab 3"
          amount={20}
          current={state.currentAmount === 20}
          onChangeAmount={onChangeAmount(20)}
        />
        <TabItem
          tabName="Tab 4"
          amount={100}
          current={state.currentAmount === 100}
          onChangeAmount={onChangeAmount(100)}
        />
      </div>
      <div className="tabs-content w-tab-content">
        <TabPaneItem
          tabName="Tab 1"
          amountTrx={state.totalPrice}
          active
          payType={payType}
        />
      </div>
    </div>
  );
}

AmountTab.propTypes = {
  trxPrice: PropTypes.number,
  tokenPrice: PropTypes.number,
  payType: PropTypes.string,
  changeChestAmount: PropTypes.func,
};
