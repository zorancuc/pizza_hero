import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Dropdown({ onChangePayType, selectedItem }) {
  const [state, setState] = useState({
    dropdown: false,
  });
  const toggleDropDown = () => {
    setState({ ...state, dropdown: !state.dropdown });
  };
  const closeDropDown = () => {
    setState({ ...state, dropdown: false });
  };
  const selectItem = item => e => {
    e.preventDefault();
    setState({ ...state, dropdown: false });
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
          <div className="currency-type">{selectedItem}</div>
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
              'w--current': selectedItem === 'TRX',
            })}
            onClick={selectItem('TRX')}
          >
            TRX
          </a>
          <a
            href="/#"
            className={classNames('dropdown-link', 'w-dropdown-link', {
              'w--current': selectedItem === 'TRC10 Token',
            })}
            onClick={selectItem('TRC10 Token')}
          >
            TRC10 Token
          </a>
        </nav>
      </div>
    </OutsideClickHandler>
  );
}

Dropdown.propTypes = {
  onChangePayType: PropTypes.func,
  selectedItem: PropTypes.string,
};
