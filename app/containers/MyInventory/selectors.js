import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyInventory = state => state.myInventory || initialState;

const makeSelectCurrentTab = () =>
  createSelector(
    selectMyInventory,
    myInventoryState => myInventoryState.currentTab,
  );

const makeSelectMetaData = () =>
  createSelector(
    selectMyInventory,
    myInventoryState => myInventoryState.metaData,
  );

const makeSelectCharacterType = () =>
  createSelector(
    selectMyInventory,
    myInventoryState => myInventoryState.characterType,
  );

const makeSelectId = () =>
  createSelector(
    selectMyInventory,
    myInventoryState => myInventoryState.id,
  );

export {
  selectMyInventory,
  makeSelectCurrentTab,
  makeSelectMetaData,
  makeSelectCharacterType,
  makeSelectId,
};
