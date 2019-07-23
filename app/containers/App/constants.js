/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const FOUNDATION_ADDRESS = 'TXWSjLQoCMB6CkEQf2y1wyeiUSBU7U5ekg';
export const LOGIN = 'pizza_hero/App/LOGIN';
export const LOGIN_SUCCESS = 'pizza_hero/App/LOGIN_SUCCESS';

export const OPEN_SIGNUP_MODAL = 'pizza_hero/App/OPEN_SIGNUP_MODAL';
export const CLOSE_SIGNUP_MODAL = 'pizza_hero/App/CLOSE_SIGNUP_MODAL';

export const CHECK_TRONLINK_STATUS = 'pizza_hero/App/CHECK_TRONLINK_STATUS';
export const CHECK_TRONLINK_STATUS_SUCCESS =
  'pizza_hero/App/CHECK_TRONLINK_STATUS_SUCCESS';
export const CHECK_TRONLINK_STATUS_FAIL =
  'pizza_hero/App/CHECK_TRONLINK_STATUS_FAIL';

export const GET_TRX_BALANCE = 'pizza_hero/App/GET_TRX_BALANCE';
export const GET_TRX_BALANCE_SUCCESS = 'pizza_hero/App/GET_TRX_BALANCE_SUCCESS';
export const GET_TRX_BALANCE_FAIL = 'pizza_hero/App/GET_TRX_BALANCE_FAIL';

export const SET_WALLET_ADDRESS = 'pizza_hero/App/SET_WALLET_ADDRESS';
export const SET_TRONWEB = 'pizza_hero/App/SET_TRONWEB';

export const UPDATE_TRONLINK_STATUS = 'pizza_hero/App/UPDATE_TRONLINK_STATUS';
