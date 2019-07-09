import React from 'react';
import TabItem from './TabItem';
import TabPaneItem from './TabPaneItem';

export default function AmountTab() {
  return (
    <div className="amount-tabs w-tabs">
      <div className="amount-tabs-menu w-tab-menu">
        <TabItem tabName="Tab 1" amount={1} current />
        <TabItem tabName="Tab 2" amount={5} />
        <TabItem tabName="Tab 3" amount={20} />
        <TabItem tabName="Tab 4" amount={100} />
      </div>
      <div className="tabs-content w-tab-content">
        <TabPaneItem tabName="Tab 1" amountTrx={100} active />
        <TabPaneItem tabName="Tab 2" amountTrx={500} />
        <TabPaneItem tabName="Tab 3" amountTrx={2000} />
        <TabPaneItem tabName="Tab 4" amountTrx={10000} />
      </div>
    </div>
  );
}
