import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return (
      <div id="top" className="nav">
        
        <img
          className="balLogo"
          src={require('../images/partners/breakaway-logo.png')}
        ></img>
        <div className="pushed">
          <a className="link" href="#">Home</a>
          <a className="link" href="#contactus">Contact Us</a>
        </div>
      </div>
    );
  }
}
