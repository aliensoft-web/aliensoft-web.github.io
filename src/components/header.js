import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade'

import './header.css';

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
  <div className="site_header">
    <div className="container">
      <Fade>
      <div className="site_header--nav_bar">
        <div className="site_header--logo">
          <Link to="/" title="Go back to homepage" className="logo">
            <div className="logo--inner">
              {siteTitle}
            </div>
          </Link>
        </div>
        <div className="site_header--nav">
          <nav className="nav_content">
            <ul className="nav_content--page_list">
              <li>
                <span className="text_crop">
                  <span className="base_link--wrap">
                    <Link to="/work" className="base_link base_link-start_blank">Work</Link>
                  </span>
                </span>
              </li>
              <li>
                <span className="text_crop">
                  <span className="base_link--wrap">
                    <Link to="/news" className="base_link base_link-start_blank">News</Link>
                  </span>
                </span>
              </li>
              <li>
                <span className="text_crop">
                  <span className="base_link--wrap">
                    <Link to="/about" className="base_link base_link-start_blank">About</Link>
                  </span>
                </span>
              </li>
              <li>
                <span className="text_crop">
                  <span className="base_link--wrap">
                    <Link to="/careers" className="base_link base_link-start_blank">Careers</Link>
                  </span>
                </span>
              </li>
              <li>
                <span className="text_crop">
                  <span className="base_link--wrap">
                    <Link to="/contact" className="base_link base_link-start_blank">Contact</Link>
                  </span>
                </span>
              </li>
            </ul>
          </nav>
          <div className="nav_trigger">
            <button className="nav_trigger--btn">
              <div className="nav_trigger--icon">
                <div className="nav_trigger--icon_top">
                  <div className="nav_trigger--icon_top_inner"></div>
                </div>
                <div className="nav_trigger--icon_bottom">
                  <div className="nav_trigger--icon_bottom_inner"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  </div>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
