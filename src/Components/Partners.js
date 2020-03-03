import React, { Component } from 'react';

export default class Partners extends Component {
  render() {
    return (
      <div>
        <h3>Support</h3>
        <div className="partners-container">
          <div className="partners-tile">
            <ul className="partners-info">
              <li>This is the section that had the processor logos.</li>
              <li> When you reordered the sections last time this was changed to Support.</li>
              <li> But you didn't provide input on what should be here.</li>
            </ul>
          </div>
          {/* <div className="partners-tile">
            <div className="part-img-div">
              <img
                className="part-img"
                src={require('../images/partners/TSYS_logo.svg.png')}
              />
            </div>
            <div className="part-img-div">
              <img
                className="part-img"
                src={require('../images/partners/JH.jpg')}
              />
            </div>
            <div className="part-img-div">
              <img
                className="part-img"
                src={require('../images/partners/fis.png')}
              />
            </div>
          </div> */}
        </div>

        <hr></hr>
      </div>
    );
  }
}
