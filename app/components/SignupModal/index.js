import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import './styles.scss';

export default function SignupModal({
  isOpen,
  closeSignupModal,
  onSignup,
  onLogin,
}) {
  const [state, setState] = useState({
    email: '',
    nickname: '',
    password: '',
  });
  const signupHandler = e => {
    e.preventDefault();
    onSignup(state);
  };
  const loginHandler = e => {
    e.preventDefault();
    onLogin();
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
      <OutsideClickHandler onOutsideClick={closeSignupModal}>
        <div
          data-w-id="9fe7871c-d820-415a-1d2f-9bde1800b8ae"
          className={classNames('create-account-modal', { open: isOpen })}
        >
          <a
            href="/#"
            className="close-create-account-modal w-inline-block"
            onClick={closeSignupModal}
          >
            <img
              src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/close.svg"
              width="15"
              alt=""
            />
          </a>
          <h3 className="modal-heading">Create Account</h3>
          <p className="modal-blurb">
            Your email address is used to send you crucial and account related
            updates. Your nickname is public and is how other users will
            identify you.
          </p>
          <div className="create-account-form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="create-account-form"
              onSubmit={signupHandler}
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
                type="text"
                className="create-account-nickname-field w-input"
                maxLength="256"
                name="nickname"
                data-name="Nickname"
                placeholder="Nickname (optional)"
                id="Nickname"
                value={state.nickname}
                onChange={changeInputHander}
              />
              <input
                type="submit"
                value="Continue"
                data-wait="Please wait..."
                className="continue-button w-button"
              />
              <button
                type="button"
                className="continue-button w-button login-button"
                onClick={loginHandler}
              >
                Login
              </button>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <p className="create-account-terms">
            by signing up you agree to our{' '}
            <a href="/#">
              <strong className="black-link">terms of service</strong>
            </a>{' '}
            and{' '}
            <a href="/#">
              <strong className="black-link">privacy policy</strong>
            </a>
          </p>
        </div>
      </OutsideClickHandler>
      <div className="create-account-modal-bg" />
    </div>
  );
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool,
  closeSignupModal: PropTypes.func,
  onSignup: PropTypes.func,
  onLogin: PropTypes.func,
};
