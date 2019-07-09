import React from 'react';

import './styles.scss';
import PreSaleHeader from './PreSaleHeader';
import ChestTab from './ChestTab';
import ChestTabContent from './ChestTabContent';

export default function PreSale() {
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
            current
          />
          <ChestTab
            tabName="Tab 2"
            linkClass="tab-link-2"
            image="/purple-chest.png"
            title="Epic Chest"
            titleClass="purple-chest"
            trxAmount={100}
          />
          <ChestTab
            tabName="Tab 3"
            linkClass="tab-link-3"
            image="/gold-chest.png"
            title="Legendary Chest"
            titleClass="legendary-chest"
            trxAmount={100}
          />
          <ChestTab
            tabName="Tab 4"
            linkClass="tab-link-4"
            image="/white-chest.png"
            title="EVO Legendary Chest"
            titleClass="evo-legendary-chest"
            trxAmount={100}
            last
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
            active
          />
          <ChestTabContent
            tabName="Tab 2"
            title="Epic Chest"
            titleClass="purple-glow"
            image="/purple-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="purple-bg"
          />
          <ChestTabContent
            tabName="Tab 3"
            title="Legendary Chest"
            titleClass="yellow-glow"
            image="/gold-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="yellow-bg"
          />
          <ChestTabContent
            tabName="Tab 4"
            title="EVO Legedary Chest"
            image="/white-chest.png"
            chestNumber={2342}
            chestTotalNumber={10000}
            bgClass="white-bg"
          />
        </div>
      </div>
    </div>
  );
}
