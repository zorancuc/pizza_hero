import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import '../SignupModal/styles.scss';

export default function LoginModal({ isOpen, closeModal, onLogin }) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const loginHandler = e => {
    e.preventDefault();
    onLogin(state);
  };
  const changeInputHander = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={classNames('create-account-modal-wrapper', { open: isOpen })}
    >
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div
          data-w-id="9fe7871c-d820-415a-1d2f-9bde1800b8ae"
          className={classNames('create-account-modal', { open: isOpen })}
        >
          <a
            href="/#"
            className="close-create-account-modal w-inline-block"
            onClick={closeModal}
          >
            <img
              src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/close.svg"
              width="15"
              alt=""
            />
          </a>
          <h3 className="modal-heading">Login</h3>
          <p className="modal-blurb">
            Your email address is used to send you crucial and account related
            updates.
          </p>
          <div className="create-account-form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="create-account-form"
              onSubmit={loginHandler}
            >
              <input
                type="email"
                className="create-account-email-field w-input"
                maxLength="256"
                name="email"
                data-name="Email"
                placeholder="Your email address"
                id="email"
                required=""
                value={state.email}
                onChange={changeInputHander}
              />
              <input
                type="password"
                className="create-account-password-field w-input"
                maxLength="256"
                name="password"
                data-name="Password"
                placeholder="Your password"
                id="password"
                required=""
                value={state.password}
                onChange={changeInputHander}
              />
              <input
                type="submit"
                value="Login"
                data-wait="Please wait..."
                className="continue-button w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
      <div className="create-account-modal-bg" />
    </div>
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  onLogin: PropTypes.func,
};
