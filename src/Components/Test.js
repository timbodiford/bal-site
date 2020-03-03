import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return (
      <div className="nav">
        <img
          className="balLogo"
          src={require('../images/partners/breakaway-logo.png')}
        ></img>
        <div className="pushed">
          <a className="link" href="#">Home</a>
          <a className="link" href="#">Contact Us</a>
        </div>
      </div>
    );
  }
}
