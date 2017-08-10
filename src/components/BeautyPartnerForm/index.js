import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('isomorphic-fetch');

export default class BeautyPartnerForm extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  // Initial state
  state = {
    isSubmiting: false,
    isSubmitted: false,
    emailValue: '',
    nameValue: '',
    phoneValue: '',
    facebookValue: '',
    comments: ''
  };

  // Component constants
  formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSafEX-FVEKQCII6XU-_P4o6jT_c0aqmIEfqc6zsg81WNBtA/formResponse';
  emailField = 'entry.1045781291';
  nameField = 'entry.2005620554';
  phoneField = 'entry.1166974658';
  facebookField = 'entry.839337160';
  commentsField = 'entry.1658962361';

  // Updates the field value when the user types. It also clear any error messages.
  setEmail = (e) => {
    this.setState({
      emailValue: e.target.value,
      isInvalidEmail: false,
    })
  }

  setField = (e, fieldKey) => {
    this.setState({
      [fieldKey]: e.target.value,
    });
  }

  // Validates the email and submits the form if valid. Shows error message if not.
  submitForm = (e) => {
    e.preventDefault();

    const { emailValue, nameValue, phoneValue, facebookValue, comments } = this.state;

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
          body:`${this.emailField}=${emailValue}&${this.nameField}=${nameValue}&${this.phoneField}=${phoneValue}&${this.facebookField}=${facebookValue}&${this.commentsField}=${comments}`
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
      <div className="thanks">
        Thank you! <br/> We'll be in touch with you soon :)
      </div>
    );
  }

  // Renders the actual form. If the form is being submitted, it shows a loader until the form submits
  _renderForm = () => {
    const { isSubmitting, emailValue, isInvalidEmail } = this.state;
    return isSubmitting
      ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#ffc54b" strokeWidth="3" strokeDasharray="179.61224975585938 76.97667846679687">
            <animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="2" begin="0s" repeatCount="indefinite" />
          </path>
        </svg>
      :
      <form onSubmit={this.submitForm} className={this.props.className}>
          <p>Are you a beauty student, a professional or simply passionate?</p><p>We would love to have you!<br/>
          Please fill in the following form so we can contact you as soon as possible</p>

          <label>Name:</label>
          <input
            value={this.state.nameValue}
            onChange={(e) => this.setField(e, 'nameValue')}
          />
          <label>Your Email</label>
          <input
            className={classNames('email-field', {
              'email-field--error': isInvalidEmail,
            })}
            onChange={this.setEmail}
            value={emailValue}
            placeholder='mail@mail.com'
           />
          <label>Phone number:</label>
          <input
            value={this.state.phoneValue}
            onChange={(e) => this.setField(e, 'phoneValue')}
          />
          <label>Facebook profile:</label>
          <input
            value={this.state.facebookValue}
            onChange={(e) => this.setField(e, 'facebookValue')}
          />
          <label>All types of beauty-related talents are welcome!<br/>
            Tell us more about yours!
          </label>
          <textarea
            value={this.state.comments}
            onChange={(e) => this.setField(e, 'comments')}
          />
          <button onClick={this.submitForm} className="submitButton">Submit</button>
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