import React from 'react';

export default function AccountForm() {
  return (
    <div>
      <div className="settings-wrapper">
        <div className="setting">
          <div className="setting-title">Username</div>
          <div className="settings-field-form-block w-form">
            <form
              id="wf-form-nickname"
              name="wf-form-nickname"
              data-name="nickname"
              className="settings-field-form"
            >
              <input
                type="text"
                className="settings-field w-input"
                maxLength="256"
                name="Username"
                data-name="Username"
                placeholder="Username"
                id="Username"
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
        <div className="settings-field-info">
          Other users will see your username instead of wallet address.
        </div>
        <div className="setting">
          <div className="setting-title">Account Email</div>
          <div className="settings-field-form-block w-form">
            <form
              id="wf-form-nickname"
              name="wf-form-nickname"
              data-name="nickname"
            >
              <input
                type="text"
                className="settings-field w-input"
                maxLength="256"
                name="Account-Email"
                data-name="Account Email"
                placeholder="Email"
                id="Account-Email"
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
        <div className="settings-field-info">
          Your email address is private. We use your email address to send you
          product and account-related updates only.
        </div>
        <div className="setting last">
          <div className="settings-field-form-block w-form">
            <form
              id="wf-form-nickname"
              name="wf-form-nickname"
              data-name="nickname"
              className="checkbox-form"
            >
              <label className="w-checkbox email-checkbox-field">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  data-name="Checkbox"
                  className="w-checkbox-input checkbox"
                />
                <span
                  htmlFor="checkbox"
                  className="email-checkbox-label w-form-label"
                >
                  I want to get emails about new product features and updates.
                </span>
              </label>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      <a href="/#" className="save-changes-button w-inline-block">
        <div>Save Changes</div>
      </a>
    </div>
  );
}
