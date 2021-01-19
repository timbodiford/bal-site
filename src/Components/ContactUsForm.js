import React, { Component } from 'react';

export default class ContactUsForm extends Component {
  render() {
    return (
      <div id="contactus">
        <h3 className="contact-header">Contact us today for more information!</h3>
        <form className="form-container">
          <div className="form-item">
            <label for="business-name">Business Name:</label>
            <div className="input">
              <input
                type="text"
                id="business-name"
                placeholder="Enter your business name here"
              ></input>
            </div>
          </div>
          <div className="form-item">
            <label for="contact-name">Contact Name: </label>
            <div className="input">
              <input
                type="text"
                id="contact-name"
                placeholder="Enter your contact name here"
              ></input>
            </div>
          </div>
          <div className="form-item">
            <label for="phone-number">Phone Number: </label>
            <div className="input">
              <input
                type="text"
                id="phone-number"
                placeholder="Enter your phone number here"
              ></input>
            </div>
          </div>
          <div className="form-item">
            <label for="email">Email Address: </label>
            <div className="input">
              <input
                type="text"
                id="email"
                placeholder="Enter your email address here"
              ></input>
            </div>
          </div>
        <button className="button contact-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

{
  /* <form>
  <div className="contact-form">
    <div>
      

    </div>
    <div>
    </div>

    <label></label>
  </div>
</form>; */
}
