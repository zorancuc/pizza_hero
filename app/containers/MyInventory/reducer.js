import produce from 'immer';
import {
  CHANGE_CURRENT_TAB,
  VIEW_CHARACTER,
  CHANGE_SEARCH_STR,
  CHANGE_SIRE_FILTER,
  CHANGE_SALE_FILTER,
  CHANGE_SORT,
} from './constants';

// The initial state of the App
export const initialState = {
  currentTab: 'all',
  metaData: {},
  characterType: 0,
  id: 0,
  searchStr: '',
  sireFlag: 0,
  saleFlag: 0,
  sort: '',
};

/* eslint-disable default-case, no-param-reassign */
const myInventoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SORT:
        draft.sort = action.menu;
        break;
      case CHANGE_SEARCH_STR:
        draft.searchStr = action.searchStr;
        break;
      case CHANGE_SIRE_FILTER:
        draft.sireFlag = action.sireFlag;
        break;
      case CHANGE_SALE_FILTER:
        draft.saleFlag = action.saleFlag;
        break;
      case CHANGE_CURRENT_TAB:
        draft.currentTab = action.tab;
        // draft.searchStr = '';
        break;
      case VIEW_CHARACTER:
        draft.metaData = action.metaData;
        draft.characterType = action.characterType;
        draft.id = action.id;
        break;
    }
  });

export default myInventoryReducer;
