import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank you" />
    <section className='textSection'>
    <h1>Thank you for contacting me</h1>
    <p>I will be in touch soon</p>
    </section>
  </Layout>
)

export default ThankYou
