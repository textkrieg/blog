import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

class SiteNav extends React.Component {
  render() {
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link to={prefixLink('/')} activeClassName="current" onlyActiveOnIndex> Articles
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/books/')} activeClassName="current"> Books
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/freelance/')} activeClassName="current"> Freelance
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/contact/')} activeClassName="current"> Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
