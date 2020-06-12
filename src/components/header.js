import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDesktopLHS">
    <Link to="/about/" activeClassName="activeLink">about</Link>
    <Link to="/family-arbitration/" activeClassName="activeLink">family arbitration</Link>
    <Link to="/labour-and-commercial/" activeClassName="activeLink">labour and commercial</Link>
    <Link to="/contact/" activeClassName="activeLink">contact</Link>
    </div>
    <div className="headerDesktopRHS">
    <Link to="/">home</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
