import React, { Component } from 'react';

export default class Unique extends Component {
  render() {
    return (
      <div>
        <h3>Engagement</h3>
        <div className="unique-container">
          <div className="unique-tile">
            <h4>Partnerships</h4>
            <div className="unique-img-container">
              <img
                className="part-img"
                src={require('../images/partnership.jpg')}
              />
            </div>
            <p>
              BreakAway Loyalty works to help clients create a situation for
              themselves where they can compete and excel against their
              competition regardless of the size of that competition.
            </p>
          </div>
          <div className="unique-tile">
            <h4>Target Market</h4>
            <div className="unique-img-container">
              <img
                className="part-img"
                src={require('../images/target-market-demographics.png')}
              />
            </div>

            <p>
              Our commitment: Service, Solutions, ROI/ROR (Return on
              Investment/Relationships) BreakAway Loyalty targets organizations
              where we believe we can offer substantial value and market
              differentiation whether the financial institution is large,
              mid-size or small.
            </p>
          </div>
          <div className="unique-tile">
            <h4>Customized Programs</h4>
            <div className="unique-img-container">
              <img
                className="part-img"
                src={require('../images/customized-programs-pictogram.png')}
              />
            </div>
            <p>
              Be unique...but be you. Financial institutions all have card
              holders that produce a unique and identifiable footprint.
              BreakAway Loyalty believes that rewards grids should be
              identifiable to a portfolio segment. An institution should analyze
              their portfolio and design the rewards grid to appeal to the
              target group, whether it's on the Consumer or Business side.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
