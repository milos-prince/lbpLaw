import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDesktop">
    <Link to="/">home</Link>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/family-arbitration/" className="linkUnderline" activeClassName="activeLink">family arbitration</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/labour-and-commercial/" className="linkUnderline" activeClassName="activeLink">labour and commercial</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline" activeClassName="activeLink">contact</Link></div>
    </div>
    <div className="headerMobile">
    <Link to="/">home</Link>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/family-arbitration/" className="linkUnderline" activeClassName="activeLink">family arbitration</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/labour-and-commercial/" className="linkUnderline" activeClassName="activeLink">labour and commercial</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline" activeClassName="activeLink">contact</Link></div>
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
