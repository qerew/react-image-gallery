import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <p className="logo"><i className="fa fa-picture-o" aria-hidden="true"></i> HC-IMGS</p>
        <div className="nav">
          <ul className="links">
            <li>
              <Link to='/'>
              Gallery
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to='/slideshow'>
              Slideshow
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Header;
