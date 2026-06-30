import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="twoPanel homepageSplit">
      <div className="homepageLHS">
        <div className="homepageBusinessCard">
        <h1>Leslie Belloc-Pinder, K.C.</h1>
          <div className="twoPanel">
            <div>
            <ul><li>Arbitration</li><li>Adjudication</li><li>Decision-making</li></ul>
            </div>
            <div className="verticalSeperator"></div>
            <div className="d-flex align-center">
            <h4>Resolution</h4>
            </div>
          </div>
        <Link to="/about/"><button className="btn">Learn more</button></Link>
        </div>
      </div>
      <div className="homepageRHS d-flex">
        <div className="d-flex column colA">
        <div id="homepagePhoto"></div>
        <div className="lawyersPanel"></div>
        </div>
        <div className="d-flex column colB">
        <div className="colBTop">
          <p className="mb-0">Administrative law decision-making requires experience and a commitment to fairness. As a Chartered Arbitrator focused on tribunal adjudication since 2008, I bring over 40 years of litigation experience to complex labour and employment, immigration, and environmental disputes. I will provide a transparent, approachable process anchored by neutrality and adaptability. You can rely on a fair hearing and a well-reasoned written decision delivered promptly.</p>
        </div>
        <div id="homepagePhoto2"></div>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
