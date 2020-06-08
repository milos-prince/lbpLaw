/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="footerContent">
            <div>
            <h2>Leslie Belloc-Pinder, Q.C.</h2>
            <p>601-402 21st Street East <br />Saskatoon, SK S7K 0C3</p>
            <p>In association with <a href="https://www.hglaw.ca">HG Law</a></p>
            </div>
            <div>
            <h2>Call us: <a href="tel:306-653-5150">(306) 653-5150</a></h2>
            <p>Fax: (306) 652-5859</p>
            <p>Monday - Friday 9:00am - 5:00pm </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
