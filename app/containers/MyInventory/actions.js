import {
  CHANGE_CURRENT_TAB,
  VIEW_CHARACTER,
  CHANGE_SEARCH_STR,
} from './constants';

export function changeCurrentTab(tab) {
  return {
    type: CHANGE_CURRENT_TAB,
    tab,
  };
}

export function changeSearchStr(searchStr) {
  return {
    type: CHANGE_SEARCH_STR,
    searchStr,
  };
}

export function viewCharacter(metaData, characterType, id) {
  return {
    type: VIEW_CHARACTER,
    metaData,
    characterType,
    id,
  };
}
