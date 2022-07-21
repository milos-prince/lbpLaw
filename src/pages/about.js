import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutPicture from "../images/aboutPicture.jpg"
import resume from "../../static/leslie-resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Labour and commercial arbitration" />
    <section className="headerSection shortHeader">
      <h1>About Leslie Belloc-Pinder</h1>
    </section>
    <section className="textSection bg-light-green aboutWrapper">
      <div className="twoPanel aboutContent">
        <div className="aboutTextbox">
        <p>I am a Chartered Arbitrator with experience conducting hearings across several areas of substantive law (labour and employment, environmental protection, immigration, Indian Residential Schools Settlement Agreement: IAP, farm security and ownership).</p>
        <p>My professional focus has been on administrative tribunal decision making, in various capacities, since 2008, except for my continued representation of the Ministry of Social Services in Saskatchewan in child protection matters.</p>
        <p>I am a litigation lawyer with over 35 years experience. I have conducted well over 150 Superior Court trials as counsel, which resulted in dozens of reported decisions.</p>
        <p>I served as the President of the Law Society of Society of Saskatchewan for 2019 and completed my 6 year term as a Bencher in December 2021.</p>
        </div>
        <div>
          <img src={aboutPicture} id="aboutPicture"/>
        </div>
      </div>
    </section>
  <section className="textSection aboutBulletSection">
      <div className="aboutBulletContent">
      <h2>I understand every case requiring a decision is the same and needs:</h2>
      <ul className="benefitsOfArbitration">
        <li>A clear and transparent process</li>
        <li>Neutrality and fairness</li>
        <li>A well-reasoned written decision provided on time</li>
      </ul>
      </div>
      <div className="aboutBulletContent">
      <h2>I understand every case requiring a decision is unique and I am:</h2>
      <ul className="benefitsOfArbitration">
        <li>Adaptable and approachable</li>
        <li>Flexible and creative with a view to meeting parties' needs</li>
      </ul>
      </div>
</section>
    <section className="d-flex justify-center align-center bg-pink">
      <div className="infoBox text-center">
        <h2>More information</h2>
        <p>To view Leslie's cv, <a href={resume} className="gold">click here</a></p>
        <p className="mb-0"><a href="https://www.hglaw.ca">www.hglaw.ca</a></p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
