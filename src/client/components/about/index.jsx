import React, { Component } from 'react';
import './about.scss';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <p>
          Dave Lee <br></br>
          San Mateo, CA <br></br>
          Software Engineer @ <a href="https://sendgrid.com">Twilio SendGrid</a>
        </p>
        <div>
          <ul>
            <li>
              <a href="mailto:x.davelee@gmail.com">x.davelee@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davel33/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.github.com/davelee">GitHub</a>
            </li>
            <li>
              <a href="https://keybase.io/dlee">Keybase</a>
            </li>
            <li>
              <a href="https://www.yelp.com/user_details?userid=ChAYZfqSI8OHlFd4QlYyFA">Yelp</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
