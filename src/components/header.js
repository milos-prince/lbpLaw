import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">home</Link>
    <Link to="/about/">about</Link>
    <Link to="/contact/">contact</Link>
    <Link to="/family-arbitration/">family arbitration</Link>
    <Link to="/labour-and-commercial/">labour and commercial</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
