import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <p>
          Dave Lee <br></br>
          San Mateo, CA <br></br>
          Software Engineer @ <a href="https://sendgrid.com" target="_blank">Twilio SendGrid</a>
        </p>
        <div>
          <ul>
            <li>
              <a href="mailto:x.davelee@gmail.com" target="_blank">x.davelee@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davel33/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.github.com/davelee" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://keybase.io/dlee" target="_blank">Keybase</a>
            </li>
            <li>
              <a href="https://www.yelp.com/user_details?userid=ChAYZfqSI8OHlFd4QlYyFA" target="_blank">Yelp</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Contact;
