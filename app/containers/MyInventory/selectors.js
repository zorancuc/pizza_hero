import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyInventory = state => state.myInventory || initialState;

const makeSelectCurrentTab = () =>
  createSelector(
    selectMyInventory,
    myInventoryState => myInventoryState.currentTab,
  );

export { selectMyInventory, makeSelectCurrentTab };
