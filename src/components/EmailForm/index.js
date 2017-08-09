import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('isomorphic-fetch');

export default class EmailForm extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  // Initial state
  state = {
    isSubmiting: false,
    isSubmitted: false,
    emailValue: '',
  };

  // Component constants
  formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKP_4KqGrMLLJ3OMVui7-OhAPid_1cHDDDn0hcl2cv88c7_Q/formResponse';
  formField = 'entry.316847574';

  // Updates the field value when the user types. It also clear any error messages.
  setField = (e) => {
    this.setState({
      emailValue: e.target.value,
      isInvalidEmail: false,
    })
  }

  // Validates the email and submits the form if valid. Shows error message if not.
  submitForm = (e) => {
    e.preventDefault();

    const { emailValue } = this.state;

    // If it's a valid email address, try to submit it.
    if(this.validateEmail(emailValue)) {
      // Show the loader to start the submission
      this.setState({
        isSubmitting: true,
      }, () => {
        // Start submitting the form
        fetch(this.formURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body:`${this.formField}=${emailValue}`
        })
        .then(res => res.text())
        .then(() => {
          // If no errors, clear loader and show thank you
          this.setState({
            isSubmitting: false,
            isSubmitted: true
          });
        })
        .catch(() => {
          // Since there will be CORS error, we will always fall here. This will still write to the
          // google sheet so it doesn't matter. Clear loader and show thank you
          this.setState({
            isSubmitting: false,
            isSubmitted: true
          });
        });
      })
    } else {
      // If the email address is invalid, show the error message
      this.setState({
        isInvalidEmail: true,
      })
    }
  }

  // Validates the email address
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // If the form hasn been submitted, shows the thank you mesage. Otherwise shows the form.
  render() {
    const { isSubmitted } = this.state;

    return isSubmitted ? this._renderThankyou() : this._renderForm();
  }

  // Renders the thank you message after the form is submitted
  _renderThankyou = () => {
    return (
      <div>
        Thank you
      </div>
    );
  }

  // Renders the actual form. If the form is being submitted, it shows a loader until the form submits
  _renderForm = () => {
    const { isSubmitting, emailValue, isInvalidEmail } = this.state;
    return isSubmitting
      ?
        <div className="loader">Submitting....</div>
      :
        <form onSubmit={this.submitForm} className={this.props.className}>
          <input
            className={classNames('email-field', {
              'email-field--error': isInvalidEmail,
            })}
            onChange={this.setField}
            value={emailValue}
          />
          <button onClick={this.submitForm}>Submit</button>
          {
            isInvalidEmail
            ?
              <span className="error">Please enter a valid email address</span>
            :
              null
          }
        </form>
  }
}