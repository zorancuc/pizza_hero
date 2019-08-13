import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Dropdown({ onChangePayType }) {
  const [state, setState] = useState({
    dropdown: false,
    selectedItem: 'TRX',
  });
  const toggleDropDown = () => {
    setState({ ...state, dropdown: !state.dropdown });
  };
  const closeDropDown = () => {
    setState({ ...state, dropdown: false });
  };
  const selectItem = item => e => {
    e.preventDefault();
    setState({ ...state, dropdown: false, selectedItem: item });
    onChangePayType(item);
  };

  return (
    <OutsideClickHandler onOutsideClick={closeDropDown}>
      <div data-delay="0" className="dropdown w-dropdown">
        <div
          className={classNames('dropdown-toggle', 'w-dropdown-toggle', {
            'w--open': state.dropdown,
          })}
          onClick={toggleDropDown}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
        >
          <img
            src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/tron-icon-white.svg"
            width="15"
            alt=""
            className="trx-icon"
          />
          <div className="currency-type">{state.selectedItem}</div>
          <div className="dropdown-arrow w-icon-dropdown-toggle" />
        </div>
        <nav
          className={classNames('dropdown-list', 'w-dropdown-list', {
            'w--open': state.dropdown,
          })}
        >
          <a
            href="/#"
            className={classNames('dropdown-link', 'w-dropdown-link', {
              'w--current': state.selectedItem === 'TRX',
            })}
            onClick={selectItem('TRX')}
          >
            TRX
          </a>
          <a
            href="/#"
            className={classNames('dropdown-link', 'w-dropdown-link', {
              'w--current': state.selectedItem === 'EVO',
            })}
            onClick={selectItem('EVO')}
          >
            EVO
          </a>
        </nav>
      </div>
    </OutsideClickHandler>
  );
}

Dropdown.propTypes = {
  onChangePayType: PropTypes.func,
};
