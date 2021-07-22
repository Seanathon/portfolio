import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sean Yalda`,
}

export default Header
