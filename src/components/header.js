import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import Fade from 'react-reveal/Fade';
import './header.css';

const Header = ({ siteTitle, navigations }) => (
  <Headroom disableInlineStyles>
    <Fade top>
      <div className="background">
        <div className="container column">
          <div className="nav-item">
            <Link to="/" className="is-active">{siteTitle}</Link>
          </div>
          <div className="nav-stack">{navigations.map((name, i) => (
            <div className="nav-item" key={i}>
              <Link to={`/${name}`} className="at-left button-secondary is-active">
                <span>{name}</span>
              </Link>
            </div>
          ))}</div>
          <div className="nav-stack open-navigation">
            <div className="nav-item">
              <Link to="/" className="at-left button-secondary">
                <span>Menu</span>
                <span className="button-secondary--icon icon icon-burger"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
