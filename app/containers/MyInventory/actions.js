import { CHANGE_CURRENT_TAB } from './constants';

export function changeCurrentTab(tab) {
  return {
    type: CHANGE_CURRENT_TAB,
    tab,
  }
}
