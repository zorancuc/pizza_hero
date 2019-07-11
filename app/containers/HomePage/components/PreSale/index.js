import React, { useState, useEffect } from 'react';

import './styles.scss';
import PreSaleHeader from './PreSaleHeader';
import ChestTab from './ChestTab';
import ChestTabContent from './ChestTabContent';

export default function PreSale() {
  const [state, setState] = useState({
    currentTabIndex: 0,
  });
  const onSelectTab = index => e => {
    e.preventDefault();
    setState({
      currentTabIndex: index,
    });
  }
  return (
    <div>
      <PreSaleHeader />
      <div className="chest-tabs w-tabs">
        <div className="tabs-menu w-tab-menu">
          <ChestTab
            tabName="Tab 1"
            image="/blue-chest.png"
            title="Rare Chest"
            titleClass="blue-chest"
            trxAmount={100}
            current={state.currentTabIndex === 0}
            onSelectTab={onSelectTab(0)}
          />
          <ChestTab
            tabName="Tab 2"
            linkClass="tab-link-2"
            image="/purple-chest.png"
            title="Epic Chest"
            titleClass="purple-chest"
            trxAmount={100}
            current={state.currentTabIndex === 1}
            onSelectTab={onSelectTab(1)}
          />
          <ChestTab
            tabName="Tab 3"
            linkClass="tab-link-3"
            image="/gold-chest.png"
            title="Legendary Chest"
            titleClass="legendary-chest"
            trxAmount={100}
            current={state.currentTabIndex === 2}
            onSelectTab={onSelectTab(2)}
          />
          <ChestTab
            tabName="Tab 4"
            linkClass="tab-link-4"
            image="/white-chest.png"
            title="EVO Legendary Chest"
            titleClass="evo-legendary-chest"
            trxAmount={100}
            last
            current={state.currentTabIndex === 3}
            onSelectTab={onSelectTab(3)}
          />
        </div>
        <div className="w-tab-content">
          <ChestTabContent
            tabName="Tab 1"
            title="Rare Chest"
            titleClass="blue-glow"
            image="/blue-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            active={state.currentTabIndex === 0}
          />
          <ChestTabContent
            tabName="Tab 2"
            title="Epic Chest"
            titleClass="purple-glow"
            image="/purple-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="purple-bg"
            active={state.currentTabIndex === 1}
          />
          <ChestTabContent
            tabName="Tab 3"
            title="Legendary Chest"
            titleClass="yellow-glow"
            image="/gold-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="yellow-bg"
            active={state.currentTabIndex === 2}
          />
          <ChestTabContent
            tabName="Tab 4"
            title="EVO Legedary Chest"
            image="/white-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="white-bg"
            active={state.currentTabIndex === 3}
          />
        </div>
      </div>
    </div>
  );
}
