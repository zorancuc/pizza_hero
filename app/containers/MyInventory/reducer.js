import produce from 'immer';
import { CHANGE_CURRENT_TAB } from './constants';

// The initial state of the App
export const initialState = {
  currentTab: 'all',
};

/* eslint-disable default-case, no-param-reassign */
const myInventoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_TAB:
        draft.currentTab = action.tab;
        break;
    }
  });

export default myInventoryReducer;
