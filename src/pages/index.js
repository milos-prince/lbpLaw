import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="twoPanel">
      <div className="homepageLHS">
        <div className="homepageBusinessCard">
        <h1>Leslie Belloc-Pinder, Q.C.</h1>
          <div className="twoPanel">
            <div>
            <ul><li>Arbitration</li><li>Adjutication</li><li>Decision-making</li></ul>
            </div>
            <div className="verticalSeperator"></div>
            <div className="d-flex align-center">
            <h4>Resolution</h4>
            </div>
          </div>
        <button className="btn dtn-dark">Learn more</button> 
        </div>
      </div>
      <div className="b">

      </div>
    </div>
  </Layout>
)

export default IndexPage
