import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import christina from "../images/christina.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="twoPanel homepageSplit">
      <div className="homepageLHS">
        <div className="homepageBusinessCard">
        <h1>Leslie Belloc-Pinder, Q.C.</h1>
          <div className="twoPanel">
            <div>
            <ul><li>Arbitration</li><li>Adjudication</li><li>Decision-making</li></ul>
            </div>
            <div className="verticalSeperator"></div>
            <div className="d-flex align-center">
            <h4>Resolution</h4>
            </div>
          </div>
        <button className="btn dtn-dark">Learn more</button> 
        </div>
      </div>
      <div className="homepageRHS d-flex">
        <div className="d-flex column colA">
        <div id="homepagePhoto"></div>
        <div className="d-flex justify-center align-center"><h2 className="mb-0"><a href="">Information for lawyers</a></h2></div>
        </div>
        <div className="d-flex column colB">
        <div className="colBTop">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id aliquet enim. Pellentesque tempus felis eros, ut volutpat metus consequat a. Ut cursus egestas iaculis. Nullam vitae finibus ex.</p></div>
          <div id="homepagePhoto2"></div>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
