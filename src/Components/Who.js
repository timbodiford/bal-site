import React, { Component } from 'react';

export default class Who extends Component {
  render() {
    return (
      <div className="who">
        <div className="who-header">
          <div className="who-container">
            <h3>Solutions
            </h3>
          </div>
          <div className="who-inner">
            <div className="who-tile">
              <img
                className="who-img"
                src={require('../images/partners/breakaway-logo.png')}
                alt="img"
              ></img>{' '}
              <h6>Client Services</h6>
              <p className="who-text">
                Our talented client services team will serve as your primary
                point of contact, providing efficient, centralized, and focused
                program management. We take a hands-on approach and work closely
                with you to develop and maintain your program while continuously
                finding opportunities for growth and innovation.
              </p>
            </div>
            <div className="who-tile">
              <img
                className="who-img"
                src={require('../images/partners/breakaway-logo.png')}
                alt="img"
              ></img>
              <h6>Program Management</h6>
              <p className="who-text">
                Our experienced project management team works closely with our
                client services team to ensure the efficient, successful
                implementation of your projects. We meticulously develop and
                maintain detailed resource schedules to ensure that all aspects
                of all projects are completed on time and within budget.
              </p>
            </div>
            <div className="who-tile">
              <img
                className="who-img"
                src={require('../images/partners/breakaway-logo.png')}
                alt="img"
              ></img>
              <h6>Development</h6>
              <p className="who-text">
                Our innovative development team works to create modern systems
                that adapt to the rapidly changing technological landscape. Our
                front and back end developers are experienced with and
                knowledgeable of trends old and new, and possess all the tools
                necessary to continuously evolve your program.
              </p>
            </div>
            <div className="who-tile">
              <img
                className="who-img"
                src={require('../images/partners/breakaway-logo.png')}
                alt="img"
              ></img>
              <h6>Implementation</h6>
              <p className="who-text">
                Our implementation team guarantees success for your program from
                the very beginning, working alongside you through each step of
                the process. Together we determine a custom approach for
                implementing your unique program, providing you with the highest
                level of support throughout the implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
