import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Labour and commercial arbitration" />
    <section className="headerSection">
      <h1>Labour and commercial arbitration</h1>
    </section>
    <section className="textSection bg-light-green">
      <div className="labourTextbox">
      <p>I am a Chartered Arbitrator designated by the ADR Institute of Canada and am an experienced adjudicator in labour, employment, and immigration matters. Many of my decisions have been published across several platforms, including CanLII, Labour Source (WestLaw), and CLAC. These decisions include Canada Labour Code and Immigration and Refugee matters, among others.</p>
      <p>I have been appointed by agreement to arbitrate grievances pursuant to Collective Agreements throughout Saskatchewan and named in one CA to date. I am also currently appointed to several tribunals by both the federal and provincial governments including the Immigration and Refugee Board (Immigration Appeal Division), Environmental Protection Tribunal of Canada, Federal Mediation and Conciliation Service, Saskatchewan Victims Compensation Appeal Committee (Chair), and the adjudication roster for Part III violations of The Saskatchewan Employment Act. </p>
      <p>I am available for appointments across Canada and am also available to conduct remote or virtual hearings, either by video or teleconference. Presently, due to Covid-19 concerns and restrictions, I have increased my capacity in this regard. Should parties wish to schedule virtual hearings, I am committed to collaboration which will ensure we implement the most suitable process and use the platform most appropriate for the parties’ needs.</p>
      <p>I will confirm my hearing and cancellation fee structure upon confirmation of my appointment. My objective is to schedule hearings to be held within 6 months or less and exceed expectations for completing decisions quickly; ideally within 60 days of final submissions.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
