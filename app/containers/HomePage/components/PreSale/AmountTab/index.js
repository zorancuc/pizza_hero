import React, { useState } from 'react';

import TabItem from './TabItem';
import TabPaneItem from './TabPaneItem';

export default function AmountTab() {
  const [state, setState] = useState({
    currentAmount: 1,
  });
  const onChangeAmount = amount => e => {
    e.preventDefault();
    setState({
      currentAmount: amount,
    });
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
          amountTrx={100}
          active={state.currentAmount === 1}
        />
        <TabPaneItem
          tabName="Tab 2"
          amountTrx={500}
          active={state.currentAmount === 5}
        />
        <TabPaneItem
          tabName="Tab 3"
          amountTrx={2000}
          active={state.currentAmount === 20}
        />
        <TabPaneItem
          tabName="Tab 4"
          amountTrx={10000}
          active={state.currentAmount === 100}
        />
      </div>
    </div>
  );
}
