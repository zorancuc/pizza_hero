import { CHANGE_CURRENT_TAB, VIEW_CHARACTER } from './constants';

export function changeCurrentTab(tab) {
  return {
    type: CHANGE_CURRENT_TAB,
    tab,
  };
}

export function viewCharacter(metaData, characterType) {
  return {
    type: VIEW_CHARACTER,
    metaData,
    characterType,
  };
}
