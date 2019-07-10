import React from 'react';

export default function Filters() {
  return (
    <div id="w-node-6a9f48da1afe-9acf37c8" className="form-block-2 w-form">
      <form id="email-form" name="email-form" data-name="Email Form" className="form">
        <label className="w-checkbox checkbox-field">
          <input type="checkbox" id="for sale" name="for-sale" data-name="for sale" className="w-checkbox-input" />
          <span htmlFor="for sale" className="checkbox-label w-form-label">for sale</span>
        </label>
        <label className="w-checkbox checkbox-field">
          <input type="checkbox" id="for sire" name="for-sire" data-name="for sire" className="w-checkbox-input" />
          <span htmlFor="for sire" className="checkbox-label w-form-label">for sire</span>
        </label>
        <label className="w-checkbox checkbox-field">
          <input type="checkbox" id="other" name="other" data-name="other" className="w-checkbox-input" />
          <span htmlFor="other" className="checkbox-label w-form-label">other</span>
        </label>
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
}
