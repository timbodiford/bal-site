import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <img
            className="balLogo"
            src={require('../images/partners/breakaway-logo.png')}
          ></img>
        </div>
        <div>
          <p>Breakaway Loyalty
              <br></br>
          1805 Old Alabama Road
          <br></br>
          Roswell, GA 30075
          <br></br>
            678-893-8000</p>
          <p>info@breakawayloyalty.com</p>

        </div>
      </div>
    );
  }
}
