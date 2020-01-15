import {
  CHANGE_CURRENT_TAB,
  VIEW_CHARACTER,
  CHANGE_SEARCH_STR,
  CHANGE_SIRE_FILTER,
  CHANGE_SALE_FILTER,
  CHANGE_SORT,
} from './constants';

export function changeCurrentTab(tab) {
  return {
    type: CHANGE_CURRENT_TAB,
    tab,
  };
}

export function changeSort(menu) {
  return {
    type: CHANGE_SORT,
    menu,
  };
}

export function changeSearchStr(searchStr) {
  return {
    type: CHANGE_SEARCH_STR,
    searchStr,
  };
}

export function changeSireFilter(sireFlag) {
  return {
    type: CHANGE_SIRE_FILTER,
    sireFlag,
  };
}

export function changeSaleFilter(saleFlag) {
  return {
    type: CHANGE_SALE_FILTER,
    saleFlag,
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
