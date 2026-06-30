import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Labour and commercial arbitration" />
    <section className="headerSection">
      <h1>Labour and commercial arbitration</h1>
    </section>
    <section className="textSection bg-light-green">
      <div className="labourTextbox">
      <p>As a Chartered Arbitrator designated by the ADR Institute of Canada, I am an experienced adjudicator in labour, employment, and immigration matters. These decisions cover a wide range of administrative disputes including grievance and first contract awards, Canada Labour Code, immigration, crime compensation, and environmental monetary penalty matters.</p>
      <p>I have been appointed by agreement to arbitrate diverse grievances pursuant to Collective Agreements throughout Saskatchewan, and named in numerous Collective Agreements. I am also currently appointed to several tribunals by both the federal and provincial governments including the Immigration and Refugee Board (Immigration Appeal Division), Environmental Protection Tribunal of Canada, Federal Mediation and Conciliation Service, Saskatchewan Victims Compensation Appeal Committee (Chair), and the adjudication roster for occupational health and wage recovery actions pursuant to The Saskatchewan Employment Act.</p>
      <p>I will accept appointments to conduct in-person hearings across Canada and am also comfortable convening virtual hearings (MS Teams and Zoom). Confirmation of hearing and cancellation fee structure will be provided upon appointment. My objective is to schedule hearings to be held within 6 months or less and exceed expectations for completing decisions quickly; ideally within 60 days of final submissions.</p>
      </div>
    </section>
    <section className="textSection workplacePad">
      <h2>Workplace Investigation</h2>
      <p>During the past decade, I have been retained by several institutional and corporate employers throughout Saskatchewan to conduct external investigations into harassment and discrimination complaints in both unionized and non-unionized workplaces. Some investigations have involved making recommendations for remedies and discipline while others have been limited to fact-finding.</p>
      <p>I am available for and interested in continuing this work, for which I usually charge fees on an hourly or daily basis (for both interviews and report writing) plus out-of-pocket expenses. Rates are negotiable.</p>
    </section>
  </Layout>
)

export default IndexPage
