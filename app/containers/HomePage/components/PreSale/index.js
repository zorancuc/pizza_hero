import React, { useState, useEffect } from 'react';

import './styles.scss';
import { chest } from 'utils/tronsc';
import PreSaleHeader from './PreSaleHeader';
import ChestTab from './ChestTab';
import ChestTabContent from './ChestTabContent';

import { CHEST_NAME_STR } from '../../constants';

export default function PreSale() {
  const [state, setState] = useState({
    currentTabIndex: 0,
    chestGroupId: 0,
    chestNumber: 0,
    chestTotalNumber: 0,
    chestGroupInfo: [],
    trxPrice: {
      Rare: 0,
      Epic: 0,
      Legendary: 0,
      'EVO Legendary': 0,
    },
    tokenPrice: {
      Rare: 0,
      Epic: 0,
      Legendary: 0,
      'EVO Legendary': 0,
    },
  });

  async function updateChestGroupInfo() {
    setTimeout(async () => {
      const chestGroupInfo = await chest.getChestGroupInfo();
      let chestGroupId = 0;
      console.log(chestGroupInfo);
      const trxPrice = {
        Rare: 0,
        Epic: 0,
        Legendary: 0,
        'EVO Legendary': 0,
      };

      const tokenPrice = {
        Rare: 0,
        Epic: 0,
        Legendary: 0,
        'EVO Legendary': 0,
      };
      for (let i = 0; i < chestGroupInfo.length; i += 1) {
        // eslint-disable-next-line no-underscore-dangle
        const trx = parseInt(chestGroupInfo[i].price._hex, 16);
        // eslint-disable-next-line no-underscore-dangle
        const token = parseInt(chestGroupInfo[i].tokenPrice._hex, 16);
        console.log(trx / 1000000);
        trxPrice[chestGroupInfo[i].name] = trx / 1000000;
        tokenPrice[chestGroupInfo[i].name] = token / 1000000;

        if (chestGroupInfo[i].name === CHEST_NAME_STR[state.currentTabIndex]) {
          chestGroupId = i;
          console.log(chestGroupId);
        }
      }

      console.log(trxPrice);
      setState({
        ...state,
        chestGroupInfo,
        currentTabIndex: 0,
        chestGroupId,
        // eslint-disable-next-line no-underscore-dangle
        chestNumber: parseInt(chestGroupInfo[chestGroupId].quantity._hex, 16),
        chestTotalNumber: parseInt(
          // eslint-disable-next-line no-underscore-dangle
          chestGroupInfo[chestGroupId].totalAmount._hex,
          16,
        ),
        trxPrice,
        tokenPrice,
      });
    }, 2000);
  }
  useEffect(() => {
    updateChestGroupInfo();
  }, []);
  const onSelectTab = index => e => {
    e.preventDefault();

    // api.call.then()
    let chestGroupId = 0;
    for (let i = 0; i < state.chestGroupInfo.length; i += 1) {
      if (state.chestGroupInfo[i].name === CHEST_NAME_STR[index]) {
        chestGroupId = i;
        console.log(chestGroupId);
        break;
      }
    }
    setState({
      ...state,
      currentTabIndex: index,
      chestGroupId,
      chestNumber: parseInt(
        // eslint-disable-next-line no-underscore-dangle
        state.chestGroupInfo[chestGroupId].quantity._hex,
        16,
      ),
      chestTotalNumber: parseInt(
        // eslint-disable-next-line no-underscore-dangle
        state.chestGroupInfo[chestGroupId].totalAmount._hex,
        16,
      ),
    });
  };
  return (
    <div>
      <PreSaleHeader />
      <div className="chest-tabs w-tabs">
        <div className="tabs-menu w-tab-menu">
          <ChestTab
            tabName="Tab 1"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png"
            title="Rare Chest"
            titleClass="blue-chest"
            trxAmount={state.trxPrice.Rare}
            current={state.currentTabIndex === 0}
            onSelectTab={onSelectTab(0)}
          />
          <ChestTab
            tabName="Tab 2"
            linkClass="tab-link-2"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/purple-chest.png"
            title="Epic Chest"
            titleClass="purple-chest"
            trxAmount={state.trxPrice.Epic}
            current={state.currentTabIndex === 1}
            onSelectTab={onSelectTab(1)}
          />
          <ChestTab
            tabName="Tab 3"
            linkClass="tab-link-3"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gold-chest.png"
            title="Legendary Chest"
            titleClass="legendary-chest"
            trxAmount={state.trxPrice.Legendary}
            current={state.currentTabIndex === 2}
            onSelectTab={onSelectTab(2)}
          />
          <ChestTab
            tabName="Tab 4"
            linkClass="tab-link-4"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/white-chest.png"
            title="EVO Legendary Chest"
            titleClass="evo-legendary-chest"
            trxAmount={state.trxPrice['EVO Legendary']}
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
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blue-chest.png"
            chestNumber={state.chestNumber}
            chestTotalNumber={state.chestTotalNumber}
            active={state.currentTabIndex === 0}
            currentTabIndex={state.currentTabIndex}
            trxPrice={state.trxPrice.Rare}
            tokenPrice={state.tokenPrice.Rare}
          />
          <ChestTabContent
            tabName="Tab 2"
            title="Epic Chest"
            titleClass="purple-glow"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/purple-chest.png"
            chestNumber={state.chestNumber}
            chestTotalNumber={state.chestTotalNumber}
            bgClass="purple-bg"
            active={state.currentTabIndex === 1}
            currentTabIndex={state.currentTabIndex}
            trxPrice={state.trxPrice.Epic}
            tokenPrice={state.tokenPrice.Epic}
          />
          <ChestTabContent
            tabName="Tab 3"
            title="Legendary Chest"
            titleClass="yellow-glow"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/gold-chest.png"
            chestNumber={state.chestNumber}
            chestTotalNumber={state.chestTotalNumber}
            bgClass="yellow-bg"
            active={state.currentTabIndex === 2}
            currentTabIndex={state.currentTabIndex}
            trxPrice={state.trxPrice.Legendary}
            tokenPrice={state.tokenPrice.Legendary}
          />
          <ChestTabContent
            tabName="Tab 4"
            title="EVO Legedary Chest"
            image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/white-chest.png"
            chestNumber={state.chestNumber}
            chestTotalNumber={state.chestTotalNumber}
            bgClass="white-bg"
            active={state.currentTabIndex === 3}
            currentTabIndex={state.currentTabIndex}
            trxPrice={state.trxPrice['EVO Legendary']}
            tokenPrice={state.tokenPrice['EVO Legendary']}
          />
        </div>
      </div>
    </div>
  );
}
