import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/LBP.svg"
import Collapsible from "./collapsible"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDesktop">
    <Link to="/"><img src={logo} className="logo"/></Link>
    <div className="linkUnderlineWrapper"><Link to="/about-me/" className="linkUnderline" activeClassName="activeLink">about me</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/my-work/" className="linkUnderline" activeClassName="activeLink">my work</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline" activeClassName="activeLink">contact</Link></div>
    </div>
    <div className="headerMobile">
    <Collapsible>
    <div className="linkUnderlineWrapper"><Link to="/" className="linkUnderline l1" activeClassName="activeLink">home</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/about-me/" className="linkUnderline l2" activeClassName="activeLink">about me</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/my-work/" className="linkUnderline l4" activeClassName="activeLink">my work</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline l5" activeClassName="activeLink">contact</Link></div>
    </Collapsible>
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
