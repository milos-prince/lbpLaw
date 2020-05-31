import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import marble from "../images/marble.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Labour and commercial arbitration" />
    <section className="headerSection">
      <h1>About Leslie Belloc-Pinder</h1>
    </section>
    <section className="textSection bg-light-green">
      <div className="twoPanel">
        <div className="aboutTextbox">
        <p>I am a Chartered Arbitrator with experience conducting hearings across several areas of substantive law (Indian Residential Schools Settlement Agreement (Independent Adjudication Process), labour and employment, environmental protection, farm security and ownership, and immigration).</p>
        <p>My professional focus has been on decision making, in various capacities, since 2008, except for my continued representation of the Ministry of Social Services in Saskatchewan in child protection matters.</p>
        <p>I am a litigation lawyer with 35 years experience. I have conducted well over 150 trials as counsel, which resulted in dozens of reported decisions.</p>
        <p>I served as the President of the Law Society of Saskatchewan for 2019 and continue to sit on the Executive Committee as Past-President. My term as a Bencher will expire in December 2021.</p>
        </div>
        <div>
          <img src={marble} />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
